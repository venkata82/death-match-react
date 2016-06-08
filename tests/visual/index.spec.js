var fs = require( 'fs' );

var url = 'http://localhost:4000';
var screenWidth = 1024;
var screenHeight = 768;
var screenshotsDir = fs.absolute( fs.workingDirectory + '/tests/visual/_screenshots');
var failuresDir = fs.absolute( fs.workingDirectory + '/tests/visual/_screenshots/failures');
var resultsDir = fs.absolute( fs.workingDirectory + '/tests/visual/_screenshots/results');
var phantomcssDir = fs.absolute( fs.workingDirectory + '/node_modules/phantomcss' );
var phantomcssExec = fs.absolute( fs.workingDirectory + '/node_modules/phantomcss/phantomcss.js' );


var phantomcss = require(phantomcssExec);

casper.test.begin('Death Match visual tests', function(test) {

    phantomcss.init({
        libraryRoot: phantomcssDir,
        comparisonResultRoot: resultsDir,
        cleanupComparisonImages: true,
        screenshotRoot: screenshotsDir,
        failedComparisonsRoot: failuresDir
    });

    // run the tests
    casper.start(url);

    casper.viewport(screenWidth, screenHeight);

    casper.then(function() {
        phantomcss.screenshot('.header', 'header');
        phantomcss.screenshot('.sidebar .warriors', 'warriors_section');
        phantomcss.screenshot('.sidebar .top-five', 'top_five_section');
    });

    casper.then(function() {
        phantomcss.compareAll();
    });

    casper.run(function() {
        casper.test.done();
    });

});