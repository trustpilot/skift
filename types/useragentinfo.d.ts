export interface UserAgentInfo {
    name: string;
    version: string;
    isMobile: boolean;
    isBot: boolean;
    isGhostInspector: boolean;
}
export default function getUserAgentInfo(): UserAgentInfo;
