export interface UserAgentInfo {
    name: string;
    version: string;
    isMobile: boolean;
}
export default function getUserAgentInfo(): UserAgentInfo;
