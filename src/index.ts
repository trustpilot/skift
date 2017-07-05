import {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    ui,
    SplitTest,
    initialize,
    UserConfig
} from './main';
import { UserAgentInfo } from './useragentinfo';

initialize();

export {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    ui,
    SplitTest
};

export default {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    ui,
    SplitTest,
    initialize
};
