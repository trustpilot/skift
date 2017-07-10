import $ from 'jquery';
import { InternalVariation, SplitTest } from './splittest';
import { UserAgentInfo } from './useragentinfo';

declare const require: any;

const uiClassPrefix = 'skift';
let isInitialized = false;
let $abTestContainer: JQuery;

function getVariationPercentage(variation: InternalVariation): string {
    return Math.round(variation.normalizedWeight * 100) + '%';
}

export const uiFactory = (
    tests: SplitTest[],
    reset: () => void,
    getCurrentTestVariation: (testName: string) => string,
    getUserAgentInfo: () => UserAgentInfo
) => {
    function renderTest(test: SplitTest): string {
        if (test.isInitialized) {
            const variation = getCurrentTestVariation(test.name);

            const data: { [key: string]: any } = {
                Test: test.name,
                Variation: `${variation} (${getVariationPercentage(
                    <InternalVariation>test.getVariation(variation)
                )})`,
                Browser:
                    getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
                'Mobile device': getUserAgentInfo().isMobile
            };

            const variationHtml = test.variations.map(variant => {
                return `<a href="${test.getVariationUrl(
                    variant.name
                )}" title="Segment: ${getVariationPercentage(
                    <InternalVariation>variant
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
            return `<div class="test">
                    <div class="header">
                      Viewing: <span class="abtest-variant">Not initialized</span>
                    </div>
                    <div>Test <span class="data-value">${test.name}</span> is not initialized</div>
                    <div><span class="data-label">Can run</span><span class="data-value">${test.canRun(
                        getUserAgentInfo()
                    )}</span></div>
                </div>`;
        }
    }

    function showSplitTestUi() {
        if (!document.head.attachShadow) {
            console.warn(
                `Skift: Sorry, we don't support the UI in the browsers witout Shadow DOM for now`
            );
            return;
        }

        const containerElement = document.createElement('div');
        const shadowRoot = containerElement.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.innerHTML = require('./main.css');

        $abTestContainer = $(`<div class="ui-container hideme"></div>`).append(
            `<div class="test-list">${tests.map(renderTest).join('')}</div>`
        );

        $(`<button type="button" class="reset">Reset all</button>`)
            .on('click', reset)
            .appendTo($abTestContainer);

        $(`<div class="close">X</div>`)
            .on('click', hide)
            .appendTo($abTestContainer);

        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        shadowRoot.appendChild(style);
        shadowRoot.appendChild($abTestContainer[0]);
        document.body.appendChild(containerElement);
        isInitialized = true;
    }

    function show() {
        if (isInitialized) {
            $abTestContainer.removeClass('hideme');
        } else if (tests.length > 0) {
            showSplitTestUi();
        }
    }

    function hide() {
        $abTestContainer.addClass('hideme');
    }

    return {
        show,
        hide
    };
};
