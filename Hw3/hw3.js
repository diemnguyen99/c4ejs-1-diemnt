// STUDY
// 1. Variable swap
// eg1
let a = 1;
let b = 2;
console.log(a, b);
b = [a, a = b][0];
console.log(a, b);

//eg2
let x = 2;
let y = 3;
console.log(x, y);
[y, x] = [x, y];
console.log(x, y);

// 2. Split String into Array
const str = 'Hello World';
let array = str.split("  ");
console.log(array);

// 3
const num = [4, 5, 7, -8];
console.log(...num);

// REVIEW
// ex4
while (true) {
let list = prompt('Hi there, welcom to shop admin panel, what do you want ( C, R, U, D )?');
let items = ['Jeans', 'T-Shirt', 'Socks'];
if (list == 'r' || list == 'R') {
   let string = '';
    for (let i = 0; i < items.length; i++) {
        string += `${i+1}. ${items[i]}\n`;
    }
    console.log(`The current items are:\n ${string}`); 
} else if (list == 'c' || list == 'C') {
    let newItem = prompt('Enter the name of the new item');
    items.push(newItem);
    console.log(items);
    alert('Done'); 
} else if (list == 'u' || list == 'U') {
    let upDate = Number(prompt('Enter the position you want to update'));
    let newName = prompt('Enter the new name');
    let newItem = prompt('Enter the name of the new item');
    items.push(newItem);
    console.log(items);
    alert('Done');
} else if (list == 'd' || list == 'D') {
    let pos = prompt('Enter the position you want to delete');
    let newItem = prompt('Enter the name of the new item');
    items.push(newItem);
    items.splice(pos, 1);
    console.log(items);
    alert('Done');
} else if (list == 'exit' || list == 'EXIT') {
    list.stop();
} else {
    alert(`${list} is not supported`);
}
}
// ex5
let numberStr = prompt('Enter a sequence of number, separated by commas(,)');
let numberArr = new Array();
numberArr = numberStr.split(',');
let sum1 = 0;
for ( let i = 0; i < numberArr.length; i++) { 
    sum1 += Number(numberArr[i]); 
}
alert(`The sum of them is ${sum1}`);

// ex6
numberStr = prompt('Enter a sequence of number, separated by commas(,)');
numberArr = numberStr.split(',');
let min = Math.min.apply(Math, numberArr);
alert(`The smallest number is ${min}`);

// ex7
let ar = [ 3, 4, 6, -9, 10, -88, 2];
let numb = Number(prompt('Enter a number'));
let id = ar.indexOf(`${numb}`);
for (let i = 0; i < ar.length; i++) {
    if (num == Number(ar[i])) {
        alert(`${numb} is FOUND in my array at index ${id}`);
    } else {
        alert(`${numb} is NOT FOUND in my array`);
    }
}

// // ex8
// // 8.1
// let arr = [5, 7, 300, 90, 24, 50, 75];
// let n = 'Hello, my name is Nguyen Diem and here is my sheep sizes';
// console.log(`${n}:\n ${arr}`);

// // 8.2
// let maximum = Math.max(5, 7, 300, 90, 24, 50, 75);
// console.log(`Now my biggest sheep has size ${maximum}, let's shave it`);

// // 8.3
// arr = [5, 7, 300, 90, 24, 50, 75];
// let flock = arr.indexOf(`${maximum}`);
// flock = 8;
// let i = 2;
// arr[i] = flock;
// console.log(`After shearing, here is my flock ${arr}`);

// // 8.4
// let month = 'MONTH 1';
// console.log(month);
// for ( let i = 0; i < arr.length; i++) {
// arr[i] += 50;
// }
// console.log(`One month has, passed, my sheeps have grown, here are their sizes \n ${[arr]}`);
// maximum = Math.max(55, 57, 58, 140, 74, 100, 125);
// console.log(`Now my biggest sheep has size ${maximum}, let's shave it`);
// flock = arr.indexOf(`${maximum}`);
// flock = 8;
// i = 3;
// arr[i] = flock;
// console.log(`After shearing, here is my flock ${arr}`);

// // 8.5
// month = 'MONTH 2';
// console.log(month);
// for ( let i = 0; i < arr.length; i++) {
//     arr[i] += 50;
// }
// console.log(`One month has, passed, my sheeps have grown, here are their sizes \n ${[arr]}`);
// maximum = Math.max(105, 107, 108, 58, 124, 150, 175);
// console.log(`Now my biggest sheep has size ${maximum}, let's shave it`);
// flock = arr.indexOf(`${maximum}`);
// flock = 8;
// i = 6;
// arr[i] = flock;
// console.log(`After shearing, here is my flock ${arr}`);

// month = 'MONTH 3';
// console.log(month);
// for ( let i = 0; i < arr.length; i++) {
//     arr[i] += 50;
// }
// console.log(`One month has, passed, my sheeps have grown, here are their sizes \n ${[arr]}`);

// // 8.6
// let sum2 = 0;
// for ( let i = 0; i < arr.length; i++) { 
//     sum2 += Number(arr[i]); 
// }
// console.log(`My flock has size in total: ${sum2}`);
// let moneySheep = sum2 * 2;
// console.log(`I would get ${sum2} * 2$ = ${moneySheep}`);

// ex9 
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
let numShapes = 4;
let length = 30;
for (let i = 0; i < 4; i++) {
    length +=20;
    for (let j = 0; j < colors.length - 1; j++) {
		fd(length);
    	rt(90);
      	color("colors[j]");
   }
}
// ex10
let name = prompt('Enter a sequence of name');
let arrName = [];
name = name.split(' , ');
for (let i = 0; i < name.length; i++) {
    arrName.push(`<${name[i]}>`);
}
alert(`${name} => ${arrName}`);

// ex11
let seNum = prompt('Enter a sequence number');
let numberArray = new Array();
numberArray = seNum.split(',');
for (let i = 0; i < seNum.length; i++) {
    if(Number(numberArray[i] % 2 == 0)) {
        numberArray.splice(i, 1);
    }
}
alert(`${seNum} => ${numberArr}`);

// ex8 redo
let sizeSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello,I'm Diem and here is my sheep sizes:\n ${sizeSheep}`);
let maxSheep = 0;
for (let i = 0; i < sizeSheep.length; i++) {
    if (maxSheep < Number(sizeSheep[i])) {
        maxSheep = Number(sizeSheep[i]);

    }
}
console.log(" Now my biggest sheep has size " + maxSheep + " let's shave it" );
let maximumSheep = sizeSheep.indexOf(maxSheep);
sizeSheep[maximumSheep] = 8;
console.log(`After shearing, here is my flock sizes:\n ${sizeSheep}`);
let numMonth = Number(prompt('Enter month :'));
for (let j = 1; j <= numMonth; j++) {
    let maxSheep = 0;
    for (let i = 0; i < sizeSheep.length; i++) {
        sizeSheep[i] += 50;
    }
    if (j !== numMonth) {
        console.log(`\n MONTH ${j}\n`);
        console.log(`One month has, passed, my sheeps have grown, here is their sizes :\n ${sizeSheep}\n`);
        for (let i = 0; i < sizeSheep.length; i++) {
            if (maxSheep < Number(sizeSheep[i])) {
                maxSheep = Number(sizeSheep[i]);

            }
        }
        console.log(` \n Now my biggest sheep has size  ${maxSheep} let's shave it \n`);
        maximumSheep = sizeSheep.indexOf(maxSheep);
        sizeSheep[maximumSheep] = 8;
        console.log(`\n After shearing, here is my flock sizes:\n ${sizeSheep}\n`);

    } else {
        console.log(`\n MONTH ${j}\n`);
        console.log(`One month has, passed, my sheeps have grown, here is their sizes :\n ${sizeSheep}\n`);
    }

}
let sum = 0;
for ( let i = 0; i < sizeSheep.length; i++) { 
    sum += Number(sizeSheep[i]); 
}
console.log(`My flock has size in total: ${sum}`);
let money = sum * 2;
console.log(`I would get ${sum} * 2$ = ${money}`);
