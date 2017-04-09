export interface UserAgentInfo {
    name: string;
    version: string;
    isMobile: boolean;
}
export declare class UserAgentHelper {
    private static isMobile();
    private static getNameAndVersion();
    static getUserAgentInfo(): UserAgentInfo;
}
