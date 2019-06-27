var httpntlm = require('httpntlm');

httpntlm.get({
    url: "https://crm.dev.powermetric.com.au/MeterAssets/api/data/v8.2/accounts",
    username: 'span',
    password: 'Xingfen0918',
    workstation: '',
    domain: 'ERM'
}, function(err, res) {
    if (err) return err;
    console.log(res.headers);
    console.log(res.body);
});