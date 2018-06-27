import { UserAgentInfo } from './userAgent';
export declare type Condition = (userAgentInfo?: UserAgentInfo) => boolean | Promise<boolean>;
