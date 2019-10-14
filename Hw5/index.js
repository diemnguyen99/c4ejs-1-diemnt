// Part 1
// 1
let x = (Math.random().toFixed(2));
console.log(x);
// 2
let array = [2, 5, 6, 9, 10];
let random = array[Math.floor(Math.random() * array.length)];
console.log(random);
// 3
let listQuizzes = [
    {
        question: "1 + 3 = ",
        choices: [3, 4, 7, 10],
        answer: 4,
    },
    {
        question: "1 + 4 = ",
        choices: [3, 5, 7, 10],
        answer: 5,
    },
    {
        question: "1 + 6 = ",
        choices: [3, 5, 7, 10],
        answer: 7,
    }
];
// 4 + 5 + 6 + 7
let point = 0;
let n = listQuizzes.length;
for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * listQuizzes.length );
    let rad = listQuizzes[index];
    let str = rad.question;
    for (let j = 0; j < rad.choices.length; j++) {
        str += `\n ${j + 1} : ${rad.choices[j]}`;
}   
    let userAnswer = Number(prompt(str));
if (rad.choices[userAnswer - 1] == rad.answer) {
    alert('Bravo');
    point += 1;
} else {
    alert("Good luck next time");
}
listQuizzes.splice(index, 1);
}
alert('We are out of question :(');
alert(`You answered correctly ${point} out of 3 questions`);
// Part 2
// ex1
const listOfWords = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 
                    'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 
                    'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'
                ];
for (let i = 0; i < listOfWords.length; i++) {
    let sum = 1;
    for( let j = i + 1; j < listOfWords.length; j++) {
        if(listOfWords[j] == listOfWords[i]) {
            sum += 1;
        }
    }
console.log(`\n ${listOfWords[i]}:${sum}`);
}
// ex2, 3, 4
const inventoryByBrand = {
    dell: [
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
    ],
    hp: [
            {
                name: 'HP Envy 13aq',
                price: 21000,
                brand:'HP',
                quantity: 5,
            },
            {
                name: 'HP Pavilion',
                brand: 'HP',
                price: 14000,
                quantity: 7,
            },
        ],
    asus: [
       {
           name: 'Asus Zenbook',
           brand: 'Asus',
           price: 20000,
           quantity: 4,
       },
       ]
    };
// ex4
let input = prompt('Which brand?');
let brand = input.toLowerCase();
alert(`There are ${inventoryByBrand[brand].length} generations of '${brand}' in inventory`);
// ex5
let listOf = [];
for (let i = 0; i < inventoryByBrand[brand].length; i++) {
    listOf.push(inventoryByBrand[brand][i].name);
alert(`There are ${inventoryByBrand[brand].length} generations of '${brand}' in inventory \n ${listOf} \n `);
// ex6
let total = 0;
total += Number(inventoryByBrand[brand][i].price) * Number(inventoryByBrand[brand][i].quantity);
alert(`There are ${inventoryByBrand[brand].length} generations of '${brand}' in inventory \n ${listOf} \n With total value: ${total} VND \n`);
}
// ex7 em không biết sửa ạ :(((
total = total * 10000;
total = total.toString();
let dot = '';
for (let i = 0; i < total.length; i++) {
    if (i % 3 == 0) {
        dot += ".";
    }
alert(`There are ${inventoryByBrand[brand].length} generations of '${brand}' in inventory \n ${listOf} \n With total value: ${dot} VND \n`);
}





// let rand = listQuizzes[Math.floor(Math.random() * listQuizzes.length)];
// let string = rand.question;
// let userAnswer = prompt(`
// ${listQuizzes[0]['question']}
// ${listQuizzes[0]['choices'].join("\n")}
// `);
// console.log(listQuizzes[0]['question']);
// console.log(listQuizzes[0]['choices'].join("\n"));
// if (userAnswer == '2') {
//     alert('Bravo');
// } else {
//     alert("Good luck next time");
// }
// userAnswer = prompt(`
// ${listQuizzes[1]['question']}
// ${listQuizzes[1]['choices'].join("\n")}
// `);
// if (userAnswer == '2') {
//     alert('Bravo');
// } else {
//     alert("Good luck next time");
// }
// userAnswer = prompt(`
// ${listQuizzes[2]['question']}
// ${listQuizzes[2]['choices'].join("\n")}
// `);
// if (userAnswer == '3') {
//     alert('Bravo');
// } else {
//     alert("Good luck next time");