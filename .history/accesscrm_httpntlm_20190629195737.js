var httpntlm = require('httpntlm');

// this is a working example of NTLM authentication. However I need to try how to establish a session and how to sage 

httpntlm.get({
    url: "https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2/accounts",
    username: 'span',
    password: 'Xingfen091',
    workstation: '',
    domain: 'ERM'
}, function(err, res) {
    if (err) return err;
    console.log(res.headers);
    console.log(res.body);
});