var http = require('https');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
// var serviceRoot = 'https://services.odata.org/v4/(S(dc0anal5v5lm4asxhv23eyye))/TripPinServiceRW/People';
var serviceRoot = 'https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2'; //process.env.serviceUrl;

function initialRequest(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            console.log('statusCode is ' + response.statusCode);
            console.log('header is ' + JSON.stringify(response.headers));
            console.log('raw header is ' + response.rawHeaders);
            console.log('body is ' + JSON.stringify(body));
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}

function sendUserinfo() {
    
}

initialRequest(serviceRoot);