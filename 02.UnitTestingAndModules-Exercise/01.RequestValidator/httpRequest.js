const { version } = require("chai");

function httpRequest(request) {

    let methods = [ 'POST', 'GET', 'DELETE', 'CONNECT' ];
    let uriReg = /^([A-Za-z0-9.]+)$|\*/g;
    let vrs = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
    let msgReg=/^([^<>\\&'"]*)$/g;

    if (!methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!request.uri.match(uriReg)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!vrs.includes(request.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(!request.message.match(msgReg)){
        throw new Error('Invalid request header: Invalid Message');
    }
}

httpRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});