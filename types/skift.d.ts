import SplitTest from './splitTest';
import { UserConfig } from './config';
export declare const tests: SplitTest[];
export declare function config(userConfig?: UserConfig): void;
export declare function getTest(name: string): SplitTest;
export declare function create(name: string): SplitTest;
