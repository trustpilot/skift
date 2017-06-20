const testsContext = require.context('./', true, /\.spec\.ts(x?)$/);
testsContext.keys().forEach(testsContext);
