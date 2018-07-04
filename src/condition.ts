import { UserAgentInfo } from './userAgentInfo';

export type Condition = (userAgentInfo: UserAgentInfo) => boolean | Promise<boolean>;
