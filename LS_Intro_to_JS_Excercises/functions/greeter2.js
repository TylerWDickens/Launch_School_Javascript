let rlSync = require('readline-sync');

function greeter() {

let firstName = rlSync.question('Enter your first name\n')
let lastName = rlSync.question('Enter your last name\n')

return `Welcome to the show ${firstName} ${lastName}`;

}

console.log(greeter());