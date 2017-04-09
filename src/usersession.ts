import {UserAgentInfo, UserAgentHelper} from "./useragenthelper";
import CookieHelper from "./cookiehelper";

const userSessionDaysToLive = 3;

export interface TestVariantsMap {
    [key: string]: string; 
}

export default class UserSession {
    readonly userAgent: UserAgentInfo;

    constructor(
        private daysToLive: number,
        public testSegment: number = Math.floor((Math.random() * 100) + 1),
        private testVariants : TestVariantsMap = {}
    ) {
        this.userAgent = UserAgentHelper.getUserAgentInfo();
    }

    setTestVariant(testName: string, variantName: string): void {
        this.testVariants[testName] = variantName;
    }

    getTestVariant(testName: string): string {
        return this.testVariants[testName];
    }

    save(key: string): void {
        var json = JSON.stringify({
            testSegment: this.testSegment,
            testVariants: this.testVariants
        });
        CookieHelper.createCookie(key, json, this.daysToLive);
    }

    static fromJson(json: string): UserSession {
        var obj = JSON.parse(json);
        return new UserSession(userSessionDaysToLive, obj.testSegment, obj.testVariants);
    }
}