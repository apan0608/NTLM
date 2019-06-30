var http = require('https');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var serviceRoot = 'https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2'; //process.env.serviceUrl;

// this code sample is taken from odata.org
function initialRequest(url) {
    var body = '';
    http.get(url, function (response) {
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            response.body += body;
            logResponseInfo('initialRequest', response);
            if (response.headers['www-authenticate'].includes('NTLM')) {
                // which is type 1 message to send user info, then expecting a challenge
                sendUserinfo(); // this is type 1 to send user info           
            }
        });
    }).on('error', function(e) {
       console.log('ERROR: ' + e.message);
    });
}

// after the initial request, we need to send user info like username, workstation, domain in hash 
// user info should be representated in "Authorization:" header and start with "NTLM" followed by the hashing   
function sendUserinfo() {
    data = null;
    xhr.open("GET", "https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2/accounts()", false); // sync not async 
    //xhr.setRequestHeader("Host", "crm.dev.powermetric.com.au");
    //  xhr.setRequestHeader("Connection", "keep-alive");  
    xhr.setRequestHeader("Authorization", "NTLM hashed user info"); // todo need to replace with the right user info in hash
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            xhr.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                var accountid = result["accountid"];
            } else {                 
                //console.log(this.statusText);
                console.log('senduserInfo Response text is: ' + this.responseText, ' response code is ' + this.statusCode);
                // logResponseInfo('senduserInfo', this.response)
            }
        }
    };
    xhr.send(data);
}

function logResponseInfo(reqName, response) {
    console.log(reqName);
    //console.log(response);
    // console.log('status text is ' + response.statusText);
    // console.log('statusCode is ' + response.statusCode);
    // console.log('header is ' + JSON.stringify(response.headers));
    console.log('header is ' + JSON.stringify(response.headers));
    // console.log('raw header is ' + response.rawHeaders);
   // console.log('body is ' + JSON.stringify(response.body));
}

function hashUserInfo(userInfo) {


}

initialRequest(serviceRoot);

/* HTTP request generated by the CRM builder
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