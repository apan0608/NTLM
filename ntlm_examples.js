var express = require('express'),
ntlm = require('express-ntlm');

var app = express();

app.use(ntlm({
    debug: function() {
       var args = Array.prototype.slice.apply(arguments);
        console.log.apply(null, args)
    },
    domain: 'MYDOMAIN',
    domaincontroller: 'ldap://myad.example',
    // use different port(default: 389)
    // domaincontroller 'ldap://myad.example:3899',
}));

app.all('*', function(request, response) {
    // {"DomainName": "MYDOMAINNAME", “Username”: "MyUser", "Workstation":"MYworkstation"}
    response.end(JSON.stringify(request.ntlm));
});
app.listen(80);