#!/usr/bin/env node
var ifaces = require( 'os' ).networkInterfaces();
var defultAddress = '127.0.0.1';
var ip = defultAddress;

function x( details ) {
    if (ip === defultAddress && details.family === 'IPv4') {
        ip = details.address;
    }
}

for ( var dev in ifaces ) {
    ifaces[ dev ].forEach( x );
}
console.log('Your IP Address: ' + ip);
