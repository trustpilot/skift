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
    reset: () => void,
    getCurrentTestVariation: (testName: string) => string,
    getUserAgentInfo: () => UserAgentInfo
) => {
    function showSplitTestUi(test: SplitTest) {
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
        const variation = getCurrentTestVariation(test.name);
        $abTestContainer = $(
            `<div class="${uiClassPrefix}-ui-container hideme"></div>`
        ).append(`
              <div class="${uiClassPrefix}-header">
                Split test. Viewing <span class="abtest-variant">${variation}</span>
              </div>
            `);
        const data: { [key: string]: any } = {
            Test: test.name,
            Variation: `${variation} (${getVariationPercentage(
                <InternalVariation>test.getVariation(variation)
            )})`,
            Browser: getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
            'Mobile device': getUserAgentInfo().isMobile
        };
        Object.keys(data).forEach(key => {
            $abTestContainer.append(`
              <div>
                <span class="${uiClassPrefix}-data-label">${key}</span>
                <span class="${uiClassPrefix}-data-value">${data[key]}</span>
              </div>
            `);
        });

        const variationHtml = test.variations.map(variant => {
            return `
              <a href="${test.getVariationUrl(variant.name)}"
                 title="Segment: ${getVariationPercentage(
                     <InternalVariation>variant
                 )}">${variant.name}</a>`;
        });
        $(variationHtml.join('&nbsp;&bull;&nbsp;')).appendTo($abTestContainer);

        $(`<br><button type="button">Reset all</button>`)
            .on('click', reset)
            .appendTo($abTestContainer);

        $(`<div class="${uiClassPrefix}-close">X</div>`)
            .on('click', hide)
            .appendTo($abTestContainer);

        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        shadowRoot.appendChild(style);
        shadowRoot.appendChild($abTestContainer[0]);
        document.body.appendChild(containerElement);
        isInitialized = true;
    }

    function show(testsList: SplitTest[]) {
        if (isInitialized) {
            $abTestContainer.removeClass('hideme');
        } else if (testsList.length > 0) {
            showSplitTestUi(testsList[0]);
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
