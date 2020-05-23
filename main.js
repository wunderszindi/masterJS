'use strict';

let admin = 'John';
let user = admin;

// let name = prompt('hogy hívnak', 'sehogy')

// alert(`hello ${name}`)

let n = 10;
let m = 10;

// console.log(n++)
// console.log(++m)

// let name = prompt("mi az eredeti neve a js-nek?")

// name == "ECMAScript" ? alert("ugy van") : alert("ECMASript, kisbuta")

// let login= ""

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings': (login == '' ) ? 'No login' : " "

// console.log(Boolean(null))

let username;

username = prompt('Who are you?');

if (username == 'Doctor') {
  alert('Doctor Who?');
}else {
  alert('You are not the doctor!');
}

let browser = prompt("what is your browser?");

if (browser == 'Edge') {
  alert("You've got the Edge!");
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser =='Safari' ||browser == 'Opera') {
  alert('Okay we support these browsers too');
}else {
  alert('We hope that this page looks ok!');
}

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}

