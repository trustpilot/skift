import { UserAgentInfo } from './userAgent';

export type Condition = (userAgentInfo?: UserAgentInfo) => boolean | Promise<boolean>;
