// STUDY
// ex1
// 1
function promise() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise is da best');
    }, 5000);
    });
}
// 2  
async function asyncCall() {
    console.log('Promise is da best');
    const result = await promise();
    console.log(result);
}
asyncCall();
// 3
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Promise is da best"), 5000);
});
promise.then(
    result => console.log(result),
);
// ex2
const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
fetchPromise.then(connection => {
console.log('Connected');
console.log(connection);
const jsonPromise = connection.json();
console.log(jsonPromise);
});
// ex3
myAPI = 'https://sheetdb.io/api/v1/gqdssu23dvhuw';
// REVIEW
// ex4
const randomNum = () => {
    var x = Math.floor(Math.random()*10);
    console.log(x);
    if (x < 0) {
        console.log('Failed: the number is smaller than 0');
    } else if (x > 10) {
        console.log('Failed: the number is bigger than 10');
    } else {
        console.log('Passed, bravo');
    }      
}  
randomNum(); 
// ex5
function num(a, b) {
    a = 4;
    b = 16;
    x = Math.floor(Math.random() * 13) + 4;
    console.log(x);
    if (x < 4) {
        console.log('Failed: the number is smaller than 4');
    } else if (x > 16) {
        console.log('Failed: the number is bigger than 16');
    } else {
        console.log('Passed, bravo');
    }  
}
num();

//  ex6
function calDistance(x1, y1, x2, y2) {
    x1 = 3;
    x2 = 10;
    y1 = 0;
    y2 = 6;
    x = Math.floor(Math.random() * 11);
    console.log(x);
    if (x !== 5) {
        console.log('Failed: the calculation is wrong');
    } else {
        console.log('Passed, bravo');
    }
}
calDistance();
// SERIOUS EXERCISES
// ex7
async function showQuote() {
    const url = 'http://quotes.rest/qod.json';
    const conn = await fetch(url);
    const data = await conn.json();
    console.log(data);
    console.log(data.contents.quotes);
    }
showQuote();
// ex8
const new_wish = document.getElementById('newWish');
const btn_add = document.getElementById('btnAdd');
btn_add.addEventListener('click', () => {
    name = new_wish.value;
    console.log(name);
});
const API_URL = 'https://sheetdb.io/api/v1/k71edtd6htx0r';
    function id() {
        const x = Math.random;
        const y = x.toString(36);
        const z = y.substr(2, 9);
        console.log(z);
        return z;
    }
    
async function addLocation() {
    const zz = id();
    const newLocation = {
        id: zz,
        location: `${name}`,
    };
const body = {
    data: [
        newLocation
    ]
}
const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
       'Content-type': 'application/json',
    }
};
const conn = await fetch(API_URL, options);
const data = await conn.json();
console.log(data);
}
addLocation();

