var testsContext = require.context("./app", true, /(spec|test)\.jsx?$/i);
testsContext.keys().forEach(testsContext);