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
) => {
    async function renderTest(test: SplitTest): Promise<string> {
        if (await test.isInitialized()) {
            const variation = getCurrentTestVariation(test.name);

            const data: { [key: string]: any } = {
                Test: test.name,
                Variation: `${variation} (${getVariationPercentage(
                    test.getVariation(variation) as InternalVariation,
                )})`,
            };

            return `
                <div class="test">
                    ${Object.keys(data).map((key) => `
                        <div>
                            <span class="data-label">${key}</span>
                            <span class="data-value">${data[key]}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="variations">
                    <span class="legend">Variations available:</span>
                    <ul>
                        ${test.variations.map((variant) => {
                            if (variation === variant.name) {
                                return `
                                    <li class="selected">${variant.name}</li>
                                `;
                            }

                            return `
                                <li>
                                    <a
                                        href="${test.getVariationUrl(variant.name)}"
                                        title="Segment: ${getVariationPercentage(variant as InternalVariation)}"
                                    >
                                        ${variant.name}
                                    </a>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            `;
        } else {
            const canRun = await test.shouldRun(getUserAgentInfo());
            return `
                <div class="test">
                    <div>Test <span class="data-value">${test.name}</span> is not initialized</div>
                    <div>
                        <span class="data-label">Can run</span>
                        <span class="data-value">${canRun}</span>
                    </div>
                </div>
            `;
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
        style.innerHTML = require('./ui.css');

        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = 'Skift';

        const testList = document.createElement('div');
        testList.className = 'tests';

        tests.subscribe(async (list) => {
            while (testList.hasChildNodes()) {
                testList.removeChild(testList.lastChild as Node);
            }
            testList.innerHTML = (await Promise.all(list.map(renderTest))).join('');
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
