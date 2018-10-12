console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
    if(err) {
        console.log('Unable to write to the file');
    } else {
        console.log('File successfully written');
    }
});

var res = notes.addNote();
console.log(res);

var addRes = notes.add(3, -9);
console.log(addRes);
