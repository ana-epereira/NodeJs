const { Module } = require("module");

function encrypt(data) {
    return 'encrypted data';
}

function send(url,data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} tu ${url}`);
}

module.exports = {
    send,
}