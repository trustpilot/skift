import { BehavioralSubject } from './behavioral-subject';
import { InternalVariation, SplitTest } from './splittest';
import { UserAgentInfo } from './useragentinfo';

declare const require: any;

function getVariationPercentage(variation: InternalVariation): string {
    return Math.round(variation.normalizedWeight * 100) + '%';
}

export const uiFactory = (
    tests: BehavioralSubject<SplitTest[]>,
    reset: () => void,
    getCurrentTestVariation: (testName: string) => string,
    getUserAgentInfo: () => UserAgentInfo
) => {
    let isInitialized = false;
    let container: Element;

    async function renderTest(test: SplitTest): Promise<string> {
        if (await test.isInitialized()) {
            const variation = getCurrentTestVariation(test.name);

            const data: { [key: string]: any } = {
                Test: test.name,
                Variation: `${variation} (${getVariationPercentage(
                    test.getVariation(variation) as InternalVariation
                )})`,
                Browser:
                    getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
                'Mobile device': getUserAgentInfo().isMobile
            };

            const variationHtml = test.variations.map(variant => {
                return `<a href="${test.getVariationUrl(
                    variant.name
                )}" title="Segment: ${getVariationPercentage(
                    variant as InternalVariation
                )}">${variant.name}</a>`;
            });

            return `
            <div class="test">
              <div class="header">
                Viewing: <span class="abtest-variant">${variation}</span>
              </div>${Object.keys(data)
                  .map(
                      key =>
                          `<div><span class="data-label">${key}</span><span class="data-value">${data[
                              key
                          ]}</span></div>`
                  )
                  .join('')}
            ${variationHtml.join('&nbsp;&bull;&nbsp;')}</div>`;
        } else {
            const canRun = await test.shouldRun(getUserAgentInfo());
            return `<div class="test">
                    <div class="header">
                      Viewing: <span class="abtest-variant">Not initialized</span>
                    </div>
                    <div>Test <span class="data-value">${test.name}</span> is not initialized</div>
                    <div><span class="data-label">Can run</span><span class="data-value">${canRun}</span></div>
                </div>`;
        }
    }

    function showSplitTestUi() {
        const skift = document.createElement('div');
        skift.className = 'skift';

        const style = document.createElement('style');
        style.innerHTML = require('./ui.css');

        const testListEl = document.createElement('div');
        testListEl.className = 'test-list';

        tests.subscribe(async list => {
            while (testListEl.hasChildNodes()) {
                testListEl.removeChild(testListEl.lastChild as Node);
            }
            testListEl.innerHTML = (await Promise.all(list.map(renderTest))).join('');
        });

        container = document.querySelector('.skift .container') || document.createElement('div');
        container.className = 'container hideme';
        container.appendChild(testListEl);

        const button = document.createElement('button');
        button.className = 'reset';
        button.textContent = 'Reset all';
        button.setAttribute('type', 'button');
        button.addEventListener('click', () => {
            reset();
        });
        container.appendChild(button);

        const close = document.createElement('div');
        close.className = 'close';
        close.textContent = 'X';
        close.addEventListener('click', () => {
            hide();
        });
        container.appendChild(close);

        // Make UI fadein
        container.className = 'container';
        skift.appendChild(style);
        skift.appendChild(container);
        document.body.appendChild(skift);

        isInitialized = true;
    }

    function show() {
        if (isInitialized) {
            container.className = 'container';
        } else {
            showSplitTestUi();
        }
    }

    function hide() {
        container.className = 'container hideme';
    }

    return {
        show,
        hide
    };
};
