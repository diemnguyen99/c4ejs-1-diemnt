// STUDY
// 1
// 1 - b
// 2 - a
// 3 - c
// 4 - d
// 2
let timerId = setInterval(() => console.log('Heehaw'), 1000);
setTimeout(() => { clearInterval(timerId);
}, 4000);
// 3
// 3.1
// It is possible to access variables from a higher block, just like it is possible with var to access variables from a higher scope.
// 3.2
// You can only access variables that have the same scope or a higher scope. So, from inside a function, you can access the global scope. But, globally, you can’t access a variable that is created only in a function.
// 4
let li = document.getElementsByTagName("li")[0];
console.log(li); 
for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
    li = document.getElementsByTagName('li')[i];
    console.log(li);
}
// 5
let div = document.getElementsByClassName("singer")[1];
console.log(div);
for (let i = 0; i < document.getElementsByClassName('singer').length; i++) {
    div = document.getElementsByClassName('singer')[i];
    console.log(div);
}
// 7
// 7.1
const button1 = document.getElementById('button1');
console.log(button1);
button1.addEventListener('click', (e) => {
    console.log(e.target);
});
const button2 = document.getElementById('button2');
console.log(button2);
button2.addEventListener('click', (e) => {
    console.log(e.target);
});
// 7.2
const btn1 = document.getElementById('button1');
console.log(btn1);
btn1.addEventListener('keydown', (e) => {
    console.log(e.key);
});
const btn2 = document.getElementById('button1');
console.log(btn2);
btn2.addEventListener('keydown', (e) => {
    console.log(e.key);
});
// REVIEW
// ex8
function wish() {
    alert('Diem');
    alert('Happy');
}
wish();
// ex9
function userName(name, wish) {
    name = 'A';
    // wish = 'Happy';
    alert(name);
    alert(wish);
}
userName();
// ex10
function userName(name, wish) { 
    name = 'A';
    alert('A')
    const w = wish || 'How are you?'
    if (w) {
        alert(w);
    } else {
        alert('How are you?')
    }
}
userName();
// ex11
// 11.2
const btn = document.getElementById('btn');
console.log(btn);
// 11.3
    btn.addEventListener('click', () => {
        console.log('Upper it!!! Just clicked');
 });
// 11.4
 const name_input = document.getElementById('name_input');
 console.log(name_input);
// 11.5, 6
// function getValue() {
// const value = name_input.value;
// console.log(value);
// }
// name_input.addEventListener('keyup', getValue);
btn.addEventListener('click', () => {
console.log(name_input.value.toUpperCase());
});
// 11.7
const result_div = document.getElementById('result_div');
console.log(result_div);
// 11.8
document.getElementById('result_div').style.textTransform = "uppercase";
// SERIOUS EXERCISES
// ex12
// 12.1
const timeSheetData = document.getElementsByClassName('table_content');
for (let i = 0; i < timeSheetData.length; i++) {
    tableContent = timeSheetData[i];
    console.log(tableContent);
}
// 12.3
const tsBody = document.getElementById('ts_body');
console.log(tsBody);
// // 12.4
// var new_row = timeSheetData.parentNode.insertRow( timeSheetData.rowIndex + 1 );
// new_row.insertCell(0).innerHTML = "Project";
// new_row.insertCell(1).innerHTML = "Task";
// new_row.insertCell(2).innerHTML = "Time Spent";
// 12.6
const enter_project = document.getElementById('enterProject');
console.log(enter_project);
const enter_task = document.getElementById('enterTask');
console.log(enter_task);
const time_spent = document.getElementById('timeSpent');
console.log(time_spent);
const add_btn = document.getElementById('add_btn');
console.log(add_btn);
// UI LAB
// Counter
let count = 0;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
if (btn1) {
    count++;
} else {
    count--;
}
// Timer
start.addEventListener('click', () => {
const timer = document.getElementById('timer');
    console.log(timer.value);
});
// Random quote
// Your belongings
