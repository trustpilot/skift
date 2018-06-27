import SplitTest, { InternalVariation } from './splitTest';
import * as ui from './ui.css';

function getVariationPercentage(variation: InternalVariation): string {
    return '(' + Math.round(variation.normalizedWeight * 100) + '%)';
}

function renderTest(splitTest: SplitTest, hide: () => void) {
    const currentVariation = splitTest.getCurrentVariation();
    const userAgentInfo = splitTest.userAgentInfo;

    const info = document.createElement('div');
    info.className = 'test info';

    const details = document.createElement('div');
    details.className = 'test details';

    const name = document.createElement('div');
    name.innerHTML = `<span class="data-label">Test</span><span class="data-value">${splitTest.name}</span>`;

    const variation = document.createElement('div');
    variation.innerHTML = `
        <span class="data-label">Current variation</span>
        <span class="data-value">${currentVariation.name + ' ' + getVariationPercentage(currentVariation)}</span>
    `;

    const browser = document.createElement('div');
    browser.innerHTML = `
        <span class="data-label">Browser</span>
        <span class="data-value">${userAgentInfo.name + ' ' + userAgentInfo.version}</span>
    `;

    const mobile = document.createElement('div');
    mobile.innerHTML = `
        <span class="data-label">Mobile device</span>
        <span class="data-value">${userAgentInfo.isMobile}</span>
    `;

    const variationsTitle = document.createElement('div');
    variationsTitle.innerText = 'Variations available: ';
    details.appendChild(variationsTitle);

    const variations = document.createElement('ul');
    splitTest.variations.map((variant) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = variant.name;
        link.setAttribute('href', '#');
        link.addEventListener('click', () => {
            hide();
            splitTest.setCurrentVariation(variant.name);
        });
        item.appendChild(link);
        variations.appendChild(item);
    });

    info.appendChild(name);
    info.appendChild(variation);
    info.appendChild(browser);
    info.appendChild(mobile);
    details.appendChild(variations);

    return [info, details];
}

export function show(splitTest: SplitTest) {
    const skiftUI = document.createElement('div');
    skiftUI.className = 'skiftui';

    const style = document.createElement('style');
    style.innerHTML = ui;

    const container = document.createElement('div');
    container.className = 'container';

    const close = document.createElement('span');
    close.className = 'close';
    close.innerText = 'X';

    function hide() {
        skiftUI.className = 'skiftui hideme';
    }

    close.addEventListener('click', hide);

    const header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'Skift';
    header.appendChild(close);

    container.appendChild(header);
    renderTest(splitTest, hide).forEach((e) => {
        container.appendChild(e);
    });

    skiftUI.appendChild(style);
    skiftUI.appendChild(container);
    document.body.appendChild(skiftUI);
}
