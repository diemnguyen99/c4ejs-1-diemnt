// STUDY
// ex1
// 1: - var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
//    - const maintain constant values. const declarations share some similarities with let declarations.

//2: - let: + let is preferred for variable declaration now.
//          + let is block scoped.
//          + let can be updated but not re-declared.
//          + let keyword is not initialized.
//          + When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. 

//   - var: + var declarations ruled as King.
//          + var is function scoped.
//          + var variables can be re-declared and updated.
//          + var is initialized as undefined.
//          + var cannot be declared more than once within a scope.

//3: - let: + let can be updated but not re-declared.
//          + let can be declared without being initialized.
//   - const: + const cannot be updated or re-declared.
//            + const must be initialized during declaration.

//4: - const: You should always use const unless you know the variable is going to change.
//   - let: If it will need to change (like in a for loop), you should use let.
//   - var: It is declared with function scoped.

//ex2
//1: Boolean is logical types. The boolean type has only two values: true and false.
//This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

//2: Results in Boolean:
//   - OR: The logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
//   - AND: AND returns true if both operands are truthy and false.
//   - NOT: + Converts the operand to boolean type: true/false.
//          + Returns the inverse value.

// REVIEW
// ex3
//a
for (let i = 0; i < 6; i++) {
    console.log(i);
}

//b
let n = Number(prompt('Enter a number'));
for (i = 0; i < n; i++) {
    console.log(i);
}

//c
n = Number(prompt('Enter a number'));
for (i = 3; i < n; i++) {
    console.log(i);
}

//d
let c = Number(prompt('Enter c'));
n = prompt('Enter n');
for (i = c; i < n; i++) {
    console.log(i);
}

// //e
c = Number(prompt('Enter c'));
n = Number(prompt('Enter n'));
for (i = c; i < n; i += 3) {
    console.log(i);
}

//f
let s = Number(prompt('Enter s'));
c = Number(prompt('Enter c'));
n = Number(prompt('Enter n'));
for (i = c; i < n; i += s) {
    console.log(i);
}

//ex4
let age = Number(prompt('How old are you?'));
console.log(age);
if (age < 14) {
    alert('You are not old enough to view this content')
} else {
    alert('Enjoy');
}

//SERIOUS EXERCISES
//ex5
let x = Number(prompt('Enter x'));
console.log(x);
if (x > 0 && x < 4.5) {
    alert('Lower half of 9');
} else {
    alert('Higher half of 9');
}

//ex6
x = Number(prompt('Enter x'));
n = Number(prompt('Enter n'));
if (x < n / 2) {
    alert(`${x} is in lower half of ${n}`);
} else {
    alert(`${x} is in higher half of ${n}`);
}

//ex7
x = Number(prompt('x = '));
console.log(x);
if (x % 2 == 0) {
    alert(`${x} is an even number`);
} else {
    alert(`${x} is an odd number`);
}

//ex8
//a
for (i = 0; i < 3; i++) {
    console.log('L');
}
for (i = 0; i < 3; i++) {
    console.log('H');
}

//b
n = Number(prompt('Enter the total mumber of L and H'));
for (i = 0; i < Math.floor(n / 2); i++) {
    console.log('H');
}
for (i = 0; i < n / 2; i++) {
    console.log('L');
}

//c
for (i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log('0');
    } else {
        console.log('1');
    }
}

//d
n = Number(prompt('Enter the total number of 1 and 0'));
for (i = 0; i < n; i++) {
    if (i % 2 == 0) {
        console.log('0');
    } else {
        console.log('1');
    }
}

//ex9
let weight = Number(prompt('Your weight in kg?'));
let height = Number(prompt('Your height in cm?'));
let BMI = weight / ((height / 100) * (height / 100));
alert(`Your BMI is ${BMI}`);
if (BMI < 16) {
    alert('You are severely underweight');
} else if (BMI < 18.5) {
    alert('You are underweight');
} else if (BMI < 25) {
    alert('You are normal');
} else if (BMI < 30) {
    alert('You are overweight');
} else {
    alert('You are obese');
}

// TURTLE EXERCISES
//10
//a
for (let i = 0; i < 4; i++) {
    fd(100);
    rt(90);
}

// b
for (let i = 0; i < 3; i++) {
    fd(100);
    rt(120);
}

//c
for (let i = 0; i < 5; i++) {
    fd(100);
    rt(72);
}

//d
for (let i = 0; i < 6; i++) {
    fd(100);
    rt(60);
}

//11
//a
let numEdges = Number(prompt('Enter number of edges'));
for (let i = 0; i < numEdges; i++) {
    fd(100);
    rt(120);
}
//b
let numEdges = Number(prompt('Enter number of edges'));
for (let i = 0; i < numEdges; i++) {
    fd(100);
    rt(45);
}
//c
let numEdges = Number(prompt('Enter number of edges'));
for (let i = 0; i < numEdges; i++) {
    fd(10);
    rt(10);
}

//12
let n = Number(prompt('How many polygons'));
if (n >= 1) {
    for (let i = 0; i < 3; i++) {
        color('red');
        rt(120);
        fd(50);
    }

    if (n >= 2) {
        for (let i = 0; i < 4; i++) {
            color('green');
            rt(90);
            fd(50);
        }

        if (n >= 3) {
            for (let i = 0; i < 5; i++) {
                color('red');
                rt(72);
                fd(50);
            }

            if (n >= 4) {
                for (let i = 0; i < 6; i++) {
                    color('green');
                    rt(60);
                    fd(50);
                }

                if (n == 5) {
                    for (let i = 0; i < 8; i++) {
                        color('red');
                        rt(45);
                        fd(50);
                    }
                }
            }
        }

    }

}

























