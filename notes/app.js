console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
    if(err) {
        console.log('Unable to write to the file');
    } else {
        console.log('File successfully written');
    }
});
