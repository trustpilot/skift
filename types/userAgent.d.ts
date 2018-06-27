export interface UserAgentInfo {
    name: string;
    version: string;
    isMobile: boolean;
}
export declare function getInfo(userAgent?: string): UserAgentInfo;
