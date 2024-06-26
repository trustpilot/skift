import { BehavioralSubject } from './behavioralSubject';
import { InternalVariation, SplitTest } from './splitTest';
import { UserAgentInfo } from './userAgentInfo';

declare const require: any;

function getVariationPercentage(variation: InternalVariation): string {
    return Math.round(variation.normalizedWeight * 100) + '%';
}

let isInitialized = false;
let skift: Element;

export const uiFactory = (
    tests: BehavioralSubject<SplitTest[]>,
    reset: () => void,
    getCurrentTestVariation: (testName: string) => string,
    getUserAgentInfo: () => UserAgentInfo,
    setCurrentTestVariation: (testName: string, variation: string) => void,
) => {
    function renderButton(svgContent: string, onClick: () => void) {
        const button = document.createElement('button');
        button.className = 'icon';
        button.innerHTML = svgContent;
        button.addEventListener('click', onClick);
        return button;
    }

    function renderLink(splitTest: SplitTest, variation: InternalVariation) {
        return renderButton('currently active', () => {
            const button = document.createElement('button');
            button.value = splitTest.getVariationUrl(variation.name);
            document.body.appendChild(button);
            document.execCommand('copy');
            document.body.removeChild(button);
        });
    }

    function renderSelectedVaraition(
        splitTest: SplitTest,
        variation: InternalVariation,
    ) {
        const item = document.createElement('li');
        item.className = 'selected';
        item.textContent = variation.name;

        const link = renderLink(splitTest, variation);

        item.appendChild(link);
        return item;
    }

    function renderUnselectedVariation(
        splitTest: SplitTest,
        variation: InternalVariation,
    ) {
        const item = document.createElement('li');
        item.textContent = variation.name;
        const open = renderButton('change to this variant', () => {
            setCurrentTestVariation(splitTest.name, variation.name);
        });
        item.appendChild(open);
        return item;
    }

    async function renderTest(splitTest: SplitTest) {
        if (await splitTest.isInitialized()) {
            const currentVariation = splitTest.getVariation(
                getCurrentTestVariation(splitTest.name),
            );

            const data: { [key: string]: any } = {
                Test: splitTest.name,
                Variation: `${currentVariation.name} (${getVariationPercentage(
                    currentVariation,
                )})`,
            };

            const test = document.createElement('div');
            test.className = 'test';
            test.innerHTML = `
                ${Object.keys(data)
                    .map(
                        (key) => `
                    <div>
                        <span class='data-label'>${key}</span>
                        <span class='data-value'>${data[key]}</span>
                    </div>
                `,
                    )
                    .join('')}
            `;

            const variations = document.createElement('div');
            variations.className = 'variations';

            const legend = document.createElement('span');
            legend.className = 'legend';
            legend.textContent = 'Variations available:';

            const list = document.createElement('ul');
            splitTest.variations.forEach((variation) => {
                if (currentVariation.name === variation.name) {
                    return list.appendChild(
                        renderSelectedVaraition(splitTest, variation),
                    );
                } else {
                    return list.appendChild(
                        renderUnselectedVariation(splitTest, variation),
                    );
                }
            });

            variations.appendChild(legend);
            variations.appendChild(list);

            return [test, variations];
        }
    }

    function showSplitTestUi() {
        const previousContainer = document.querySelector('.skift');

        if (previousContainer) {
            skift = previousContainer;
        } else {
            skift = document.createElement('div');
            skift.className = 'skift';
        }

        const style = document.createElement('style');
        style.innerHTML = require('./styles/ui.css');

        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = 'Skift';

        const testList = document.createElement('div');
        testList.className = 'tests';

        tests.subscribe(async (list) => {
            while (testList.hasChildNodes()) {
                testList.removeChild(testList.lastChild as Node);
            }
            const test = await list
                .map(renderTest)
                .reduce((promise, futureElement) => {
                    return promise.then((elements) => {
                        return futureElement.then((element) => {
                            if (element && elements) {
                                elements.push(...element);
                            }
                            return elements;
                        });
                    });
                }, Promise.resolve([]));
            if (test) {
            test.forEach((x) => testList.appendChild(x));
            }
        });

        const button = document.createElement('button');

        button.className = 'reset';
        button.textContent = 'Reset all';
        button.setAttribute('type', 'button');
        button.addEventListener('click', () => {
            reset();
        });

        const close = document.createElement('span');
        close.className = 'close';
        close.textContent = 'X';
        close.addEventListener('click', () => {
            hide();
        });
        header.appendChild(close);

        skift.appendChild(header);
        skift.appendChild(style);
        skift.appendChild(testList);
        skift.appendChild(button);
        document.body.appendChild(skift);
        isInitialized = true;
    }

    function show() {
        if (isInitialized) {
            skift.className = 'skift';
        } else {
            showSplitTestUi();
        }
    }

    function hide() {
        skift.className = 'skift hideme';
    }

    return {
        hide,
        show,
    };
};
