
//testing
const fetch = require('node-fetch');

const host = 'http://localhost:3003/';
const path = 'scenario';
const baseUrl = `${host}${path}/`;


function getBets(){
    fetch(`${baseUrl}${arguments.callee.name}.mock.js`)
	.then(res => res.text())
	.then(body => console.log(body));
}

getBets();