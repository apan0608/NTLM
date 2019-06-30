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

// after the initial request, we need to send user info like username, workstation, domain in hash 
// user info should be representated in "Authorization:" header and start with "NTLM" followed by the hashing   
function sendUserinfo() {
    xhr.open("GET", "https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2/account");
    // GET https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2 HTTP/1.1
    xhr.setRequestHeader("Host", "crm.dev.powermetric.com.au");
    //Host: crm.dev.powermetric.com.au
    xhr.setRequestHeader("Connection", "keep-alive");  
    xhr.setRequestHeader("Negotiate", "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");
    xhr.send(data);
}

initialRequest(serviceRoot);