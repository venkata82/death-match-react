var testsContext = require.context("./app", true, /(spec|test)\.js$/i);
testsContext.keys().forEach(testsContext);