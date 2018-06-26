import consoleAnalytics from '../src/analytics';
import { BrowserEnv } from './browser';

declare const global: BrowserEnv;

describe('Analytics', () => {
    describe('ConsoleAnalytics', () => {
        it('should return default tracking handler', () => {
            console.log = jest.fn();
            consoleAnalytics.track('ExperimentViewed', {});
            expect(console.log).toHaveBeenCalledWith('Split testing event: ExperimentViewed', {});
        });

        it('should track on link click',() => {
            const document = global.document;
            const link = document.createElement('a');
            link.textContent = 'test';
            link.setAttribute('id', 'test');
            document.body.appendChild(link);

            console.log = jest.fn();
            const element = document.getElementById('test');
            consoleAnalytics.trackLink(element, 'ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: element.textContent
            });
            element.click();
            expect(console.log).toHaveBeenCalledWith('Split testing event: ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: 'test',
            });
        });
    });
});
