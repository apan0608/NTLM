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
    xhr.open("GET", "https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2/accounts()", false); // sync not async 
    xhr.setRequestHeader("Host", "crm.dev.powermetric.com.au");
    xhr.setRequestHeader("Connection", "keep-alive");  
    xhr.setRequestHeader("Authorization", "hashed user info");
    xhr.send(data);


}

initialRequest(serviceRoot);

/* HTTP request generated by the 
    var req = new XMLHttpRequest();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/accounts()", false);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var result = JSON.parse(this.response);
            var accountid = result["accountid"];
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
*/