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

//5
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
function getValue() {
const value = name_input.value;
console.log(value);
}
name_input.addEventListener('keyup', getValue);
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

// 12.4
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2)
cell1.innerHTML = "Project Test 1";
cell2.innerHTML = "Task Test 1";
cell3.innerHTML = "0";

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
btn1.addEventListener('click', highNum);

function highNum() {
    document.getElementById('num').value = count;
    count+=1;
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', lowNum);

function lowNum (){
    document.getElementById('num').value = count;
    count-=1;
}

// // Timer
// // function startCount() {
// //     start.addEventListener('click', () => {
// //         const timer = document.getElementById('timer');
// //             console.log(timer.value);
// //         });
// // }
// // let time = timer.value;

// // function stopCount() {

// }

// Timer
start = document.getElementById("start");
start.addEventListener('click', () => {
    let inputcount = document.getElementById("timer").value;
    time = document.getElementById("timer");
    k = setInterval(() => {
        inputcount -= 1;
        time.value = inputcount;  
    }, 500); 
});
stop = document.getElementById('stop');
stop.addEventListener('click', myStopFunction);
function myStopFunction() {
    clearInterval(k);
}

// Random quote
let listQuote = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
    }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
    }, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
    }, {
    "quoteText": "Life is change. Growth is optional. Choose wisely.",
    "quoteAuthor": "Karen Clark"
    }, {
    "quoteText": "You'll see it when you believe it.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "Today is the tomorrow we worried about yesterday.",
    "quoteAuthor": ""
    }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Every man dies. Not every man really lives.",
    "quoteAuthor": ""
    }, {
    "quoteText": "To lead people walk behind them.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Having nothing, nothing can he lose.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "Trouble is only opportunity in work clothes.",
    "quoteAuthor": "Henry J. Kaiser"
    }, {
    "quoteText": "A rolling stone gathers no moss.",
    "quoteAuthor": "Publilius Syrus"
    }, {
    "quoteText": "Ideas are the beginning points of all fortunes.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Everything in life is luck.",
    "quoteAuthor": "Donald Trump"
    }, {
    "quoteText": "Doing nothing is better than being busy doing nothing.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Trust yourself. You know more than you think you do.",
    "quoteAuthor": "Benjamin Spock"
    }, {
    "quoteText": "Study the past, if you would divine the future.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": ""
    }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
    }, {
    "quoteText": "Well done is better than well said.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Bite off more than you can chew, then chew it.",
    "quoteAuthor": "Ella Williams"
    }, {
    "quoteText": "Work out your own salvation. Do not depend on others.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "One today is worth two tomorrows.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
    }, {
    "quoteText": "God always takes the simplest way.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "From small beginnings come great things.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Learning is a treasure that will follow its owner everywhere",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "The world is always in movement.",
    "quoteAuthor": "V. Naipaul"
    }, {
    "quoteText": "Never mistake activity for achievement.",
    "quoteAuthor": "John Wooden"
    }, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
    }, {
    "quoteText": "One faces the future with ones past.",
    "quoteAuthor": "Pearl Buck"
    }, {
    "quoteText": "Goals are the fuel in the furnace of achievement.",
    "quoteAuthor": "Brian Tracy"
    }, {
    "quoteText": "Who sows virtue reaps honour.",
    "quoteAuthor": "Leonardo da Vinci"
    }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
    }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "A goal without a plan is just a wish.",
    "quoteAuthor": "Larry Elder"
    }, {
    "quoteText": "To succeed, we must first believe that we can.",
    "quoteAuthor": "Michael Korda"
    }, {
    "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "A weed is no more than a flower in disguise.",
    "quoteAuthor": "James Lowell"
    }, {
    "quoteText": "Do, or do not. There is no try.",
    "quoteAuthor": "Yoda"
    }, {
    "quoteText": "All serious daring starts from within.",
    "quoteAuthor": "Harriet Beecher Stowe"
    }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
    }, {
    "quoteText": "Love is the flower you've got to let grow.",
    "quoteAuthor": "John Lennon"
    }, {
    "quoteText": "Don't wait. The time will never be just right.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "Time is the wisest counsellor of all.",
    "quoteAuthor": "Pericles"
    }, {
    "quoteText": "You give before you get.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Wisdom begins in wonder.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "Without courage, wisdom bears no fruit.",
    "quoteAuthor": "Baltasar Gracian"
    }, {
    "quoteText": "Change in all things is sweet.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "What you fear is that which requires action to overcome.",
    "quoteAuthor": "Byron Pulsifer"
    }
    ];
    let btn = document.getElementById('btn');
    btn.addEventListener('click', reLoad);
    function reLoad() {
        for( let i = 0; i < listQuote.length; i++) {
            let quote = document.getElementById('quote');
            let author = document.getElementById('author');
            let Random = Math.floor(Math.random() * listQuote.length);
            quote.innerHTML = listQuote[Random].quoteText;
            author.innerHTML = listQuote[Random].quoteAuthor;
        }
    }
    
// Your belongings
let listOfBelongings = ['Backpack', 'MiBand watch', 'Ring'];
console.log(listOfBelongings);
const listItems = document.getElementById('listItems');
console.log(listItems);
for (let i = 0; i < listOfBelongings.length; i++) {
    listItems.insertAdjacentHTML('beforeend', `<li>${listOfBelongings[i]} <button class="btn_remove">Remove</button></li>`);
}
let addOne = document.getElementById('add_one');
addOne.addEventListener('click', addItem);
const enterOne = document.getElementById('enter_one');
function addItem() {
    let newI = enterOne.value;
    listOfBelongings.push(newI);
    listItems.insertAdjacentHTML('beforeend', `<li><span> ${newI} <button class="btn_remove">Remove</button></span></li>`);
}
function resetInput() {
    document.getElementById("enter_one").value = " ";
}
addItem();
resetInput();
function deteleI() {
    const btn_remove = document.getElementsByClassName('btn_remove');
    for(let i = 0; i < btn_remove.length; i++) {
        let clickBtn = btn_remove[i];
        clickBtn.addEventListener('click', () => {
            let span = clickBtn.parentNode;
            let li = span.parentNode;
            li.remove();
        });
    }
}
deteleI();