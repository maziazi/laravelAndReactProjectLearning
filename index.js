console.log('Azis')

var name = 'Muahamad Azis';
console.log(name);

// dapat diubah nilainya
let price = 250;
price = 300;

// niali tidak dapat diubah
const firstName = 'Azis';

console.log(price, firstName); 

// String
let lastName = 'Muhamad';
console.log(typeof name);

// Number
let age = 19;
console.log(typeof age);

// Boolean
let isMarried = false;
console.log(typeof isMarried);

// Undefined
let colors = undefined;
console.log(typeof colors);

// Object
let selectColor = null;
console.log(typeof selectColor)

let user = {
    lastName : 'Muhamad',
    age : 19,
    hobby : 'play duolingo',
};

console.log(user);
console.log(user.lastName);
console.log(user.hobby);

console.log(user['lastName']);
console.log(user['age']);

// Javascript Array
let firends = ['Azis', 'Ahmad', 'Supri'];

console.log(firends);
console.log(firends[2]);
console.log(typeof firends);
console.log(firends.length);

// Javascript Function
function showMyName(name){
    console.log('My name is ' + name);
    //console.log('My name is Azis');
}
//showMyName();
showMyName('Azis');
showMyName('Ahmad');
showMyName('Supri');

// let num1 = 30;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(sum);

function calcSum(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result = calcSum(30,20);
console.log(result);

// Template Literals
let name1 = 'Akbar';
console.log(`my name is  ${name1}`);

console.log(`${30 + 20}`);

let massage ='my name is \nMuhamad Azis';
console.log(massage);

let massage1 =`my name is 
Muhamad 
Azis`;
console.log(massage1);

// Excercise
let person = {
    name : 'Azis',
    age: 19,
    isMarried: false,

    homeAddress:{
        long:22.55,
        lat: 33.44,
    },
   friends: ['ahmad', 'supri', 'akbar', 'zafran'], 
};
console.log(person);
console.log(person.name);
console.log(person.homeAddress);
console.log(person.friends[3]);

// Arithmatic Operators
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// Assignment Operators
// let num3 = 10;
// let num4 = num3;

// console.log(num3, num4);

let num3 = 10;
let num4 = num3 + 5;
num3 += 5;
console.log(num3);

num3 = num3 * 5;
num3 *= 5;

num3 = num3 + 1;
num3 += 1;
num3++;

num3 = num3 - 1;
num3 -= 1;
num3--;

// Comparision Operators
// > < >= <= === !===
let price1 = 200;

console.log(price1 > 300);
console.log(price1 >= 200);
console.log(price1 < 100);
console.log(price1 <= 500);
console.log(price1 === 200);
console.log(price1 !== 300);

// Logical Operators
// and (&&), or (||), not(!)
let price2 = 10;

console.log(price2 > 5 && price2 < 15);
// true && true 
console.log(price2 > 50 || price2 < 15);
// false || true
console.log(!(price2 > 50));

// Equality Operators
// number
console.log(price2 === 10);
console.log(price2 !== 20);
// number and string
console.log(price2 == 10);
console.log(price2 != 20);

// Problem : Swap Two Numbers
let apple = 10;
let orange = 20;

let temp = apple
apple = orange;
orange = temp;

console.log(apple, orange);

// Conditional Statments - If Else
// if(condition1){
//     statments
// } else if (consition2){
//     statments
// } else if (consition3){
//     statments
// } else {
// }

let number = 0;
number = 5;

if (number > 0){
    console.log('This is a positive number');
} else if (number < 0){
    console.log('This is a negative number');
} else{
    console.log('This is zero number')
}

// Conditional Statments - Switch Case
let color = 'white';

switch(color){
    case 'black':
    console.log('This is black');
    break;

    case 'white':
    console.log('This is white')
    break;

    case 'red':
    console.log('This is red')
    break;
}

// Conditional Statments - Ternary Operator
let number1 = 10;
let number2 = 2;

let maxValue;
if (number1 > number2){
    maxValue = number1;
} else {
    maxValue = number2;
}
console.log(maxValue);

let max = number1 > number2 ? number1 : number2;
console.log(max);

//Problem : FizzBuzz
let numA = 15;
if (numA % 3 === 0 && numA % 5 === 0){
    console.log('FizzBuzz');
}else if (numA % 5 === 0){
    console.log('Buzz');
}else if  (numA % 3 === 0){
    console.log('Fizz');
}else{
    console.log('Nothing');
}

console.log(numA % 3 === 0 && numA % 5 === 0
    ? 'FizzBuzz'
    : numA % 5 === 0
    ? 'Buzz'
    : numA % 3 === 0
    ? 'Fizz'
    : 'Nothing'
);

// Problem : Our Grading System 
let mark = 80;

if (mark < 0 || mark > 100){
    console.log ('Invalid Mark')
}else if (mark >= 80 && mark <= 100){
    console.log ('A+')
} else if (mark >= 70 && mark <= 79){
    console.log ('A')
} else if (mark >= 60 && mark <= 69){
    console.log ('A-')
} else if (mark >= 50 && mark <= 59){
    console.log ('B')
} else if (mark >= 40 && mark <= 49){
    console.log ('C')
} else if (mark >= 33 && mark <= 39){
    console.log ('D')
} else if (mark >= 0 && mark <= 32){
    console.log ('F')
}

number = 5;
switch (true){
    case number > 0:
    console.log('This is a positive number');
    break;

    case number < 0:
    console.log('This is a negative number');
    break;

    case number === 0:
    console.log('This is zero number')
    break;
}

//  Loops - for loop
for ( let index = 1; index <= 4; index++){
    console.log('Hi Azis', index)
}

for ( let index = 4; index >= 1; index--){
    console.log('Hi Azis', index)
}

//  Loops - while loop
let index = 1;
while(index <= 5){
    console.log('Halo Azis', index);
    index++;
}

// Loops - do while loop
let service = 1;
do {
    console.log('Halo Udemy', service);
    service++;
} while (service <= 5);

//  Loops - for in loop
const objs = {
    name : 'Azis',
    age : 19,
}

for (let key in objs){
    console.log(key , objs[key] );
}

let number4 = [1,2,3,4,5];
console.log(number4);

for (let index in number4){
    console.log(index, number4[index]);
}

// Loops - for of loop
for (let num of number4){
    console.log(num);
}

// Loops - Break and Continue
for (let i=1; i<=20; i++){
    if (i === 7){
        continue;
    }
    console.log(i)
    if (i === 10){
        break;
    }
}

// Loops - Infinite loop
// for (let i = 1; ;i++){
//     console.log(i)
// }

// Loops - Nasted loop
for (let azis = 1; azis <= 3; azis++){
    for (let supri = 1; supri <=3; supri++){
        console.log(azis, supri);
    }
}

//String
let country = 'Indonesia';
console.log(country);
console.log(typeof country);
console.log(country[4]); // > undefined 
console.log(country.charAt(4)) // > null

let massage2 = "Hi My name is Hi Azis";
console.log(massage2);
console.log(massage2.charAt(3));
console.log(massage2.toUpperCase());
console.log(massage2.toLowerCase());
console.log(massage2.includes('Azis'));
console.log(massage2.startsWith('Hi'));
console.log(massage2.endsWith('Azis'));

console.log(massage2.search('Hi'));
console.log(massage2.indexOf('Hi'));
console.log(massage2.lastIndexOf('Hi'));

let temp1 = 123;
console.log(typeof temp1.toString());
console.log(temp1.toString());

let m1 ='Hi';
let m2 =' My Name';
let m3 =' Is Azis';

let m = m1.concat(m2,m3);
m = m1 + m2 + m3;
console.log(m)

massage2 = "Hi My name is Hi Azis";
console.log(massage2.split(''));
console.log(massage2.slice(0,5));
console.log(massage2.slice(6,12));
console.log(massage2.slice(2));
console.log(massage2.slice());
console.log(massage2.slice(0));
console.log(massage2.slice(-6,-1));

console.log(massage2.substring(0,3))
console.log(massage2.substr(0,4))

// Hi Ariyan "It's a nice course"
// How are you
let massage3= '\tHi ariyan \\ "it\'s a nice course". \nHow are you?';
console.log(massage3);

// String Immutability
let massage4 = 'Ji Azis';
massage4='Hi Azis ' +'How are you';
console.log(massage4); 

// Javascript Object
let nameA = 'Azis';
let age1 = 19;
let hobby = 'Playing Duolingo';

const user1 = {
    nameA : 'Azis',
    age1 : 19,
    hobby : 'Playing Duolingo',
};
console.log(user1);
console.log (user1.hobby);
console.log(user1['nameA']);
console.log(user1['age1']);


const user2 = {
    nameA : 'Azis',
    age1 : 19,
    isMarried : false,
    friends : ['Ahmad', 'Supri'],
    selectColor : null,
    calculateAge : function(){
        console.log(`I am ${age1} Muhamad Azis`);
    }
}; 

// ADD
user2.email = 'mazis9651@gmail.com';
let key = 'hghds';
user2 ['key']='093728728813';
user2['phone'] = '081215623332';

// UPDATE
user2.isMarried = true;
user2.age1 = user2.age1 + 6;

// DELATE
delete user2.age1;

console.log(user2);

// function (asdf);
user2.calculateAge();

// Traversing Object
const user3 = {
    name : 'Azis',
    age : 19,
    gander : 'Male',
    phone : '081215623332',
    email : 'mazis9651@gmail.com',
};

// One way
for (let key in user3){
    console.log(key, user3[key]);
}

// Two way
console.log(Object.keys(user3));
console.log(Object.values(user3));

for (let val of Object.values(user3)){
    console.log(val);
}

// Excercise Traversing Object
const salaries = {
    azis : 1000,
    supri : 3000,
    ahmad : 5000,
    zafran : 2000,
    akbar : 4000,
};

let sum = 0;

// for (let key in salaries){
//     console.log(key, salaries[key]);
//     // sum = sum + salaries[key];
//     sum += salaries[key];
// }

// console.log(sum);

console.log(Object.values(salaries));

for (let val of Object.values(salaries)){
    sum += val;
}
console.log(sum);

// Object Destructuring 
const user4 = {
    name7 : 'Ahmad',
    age7 : 20,
    favBook:{
        bookName: 'Bumi dan Manusia',
        bookAuthor : 'Pundjabi',
    }
}

const {name7, age7, favBook} = user4;
const {bookAuthor, bookName} = favBook;
console.log(name);
console.log(age);
console.log(bookName);
console.log(bookAuthor);

// Cloning an Object
const user5 ={
    nameB : 'Azis',
    ageB :19,
}

// const copidUser = {}
// copidUser.nameB = user5.nameB;
// copidUser.ageB = user5.ageB;

// for (let key in user5){
//     console.log(key, user5[key]);
//     copidUser[key] = user5[key];
// }

const copidUser = Object.assign({},user5);

console.log(copidUser);

// Matrh Object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.9))

// JSON Data format
const user6 = {
    name : 'Azis',
    age : 19,
}

const jsonData = JSON.stringify(user6);
console.log(JSON.parse(jsonData));
console.log(jsonData);

// function Declaration
function aboutMe(name, age){
    const massageA = `I am ${name} and i am ${age} years old`;
    console.log(massageA);
}

// function Call
aboutMe('Azis', 19);
aboutMe('Ahmad', 20);

function calcSum (number1, number2){
    let sum = number1 + number2;
    return sum
}

let result1 = calcSum(10,20);
console.log(result1);

// default Parameters
function calSum (number1, number2 = 40, number3 = 50){
    let sum = number1 + number2 + number3;
    return sum
}
console.log(calSum(10));

// function expression
const calcSumExp = function(number1, number2){
    let sum = number1 + number2;
    return sum
}
console.log(calcSumExp(50,60));

// arrow function
const calcSumArr = (number1, number2) => number1 + number2;
console.log(calcSumArr(50, 70));

// function expression
const mulByTwo = function (number1){
    return number1*2;
}
console.log(mulByTwo(6));

// arrow function
const mulByTwoArr = (number1) => number1 * 2; 
console.log(mulByTwoArr(5))

// Rest parameter
function muliply(...args){
    console.log(args)
    let mulp = 1;
    for (let num of args){
        mulp = mulp * num;
    }
    return mulp
    // return number1 * number2 * number3;
}
console.log(muliply(2,3,4,5))
0
// Array
let friends = ['Azis', 'Supri', 'Ahmad', 'Zafran', 'Akbar'];

console.log(friends);
console.log(friends[3]);
console.log(friends.length);

// Add
let numb = [12,13,15,16];

numb.unshift(9,10,11);
numb.push(17,18,19);
numb.splice(5,0,14,);
console.log(numb);

// Remove
let numbA = [1,2,3,4,5,6,7,8];

numbA.shift();
numbA.pop();
numbA.splice(2,2);
console.log(numbA);

// Primitive Type
const numbB = [1,2,3,2,5,6,2,8];

console.log(numbB.includes(5));
console.log(numbB.indexOf(2));
console.log(numbB.lastIndexOf(2));
console.log(numbB);

// Finding Project in Array
const doctors = [
    {name : 'Azis', age : 19},
    {name : 'Ahmad', age : 20},
    {name : 'Supri', age : 21},
];

const resultA = doctors.find(function(doctor){
    // return doctor.name === 'Supri';
    return doctor.age < 20;
});

console.log(resultA);

// Itterating in Array
const numbC = [1,2,3,4,5];

for (let i=0; i<numbC.length; i++){
    console.log(i, numbC[i]);
}

for (let num of numbC){
    console.log(num);
}

numbC.forEach(function(num, i){
    console.log(num, i);
});

// Sorting and Reversing an Array
const numbD = [6,8,7,-2,1,9];

numbD.sort();
numbD.reverse();
console.log(numbD);

const doctorsA = [
    {name : 'Azis', age : 30},
    {name : 'Ahmad', age : 40},
    {name : 'Supri', age : 21},
];
doctorsA.sort(function (d1,d2){
    if (d1.age > d2.age)return+1;
    if (d1.age === d2.age)return 0;
    if (d1.age < d2.age)return-1;
})
console.log(doctorsA);

// Array Method - every, some
// const numbD = [6,8,7,-2,1,9];
const data = numbD.some (function(num){
    return num > 0;
})
console.log(data);

// Array Method concat, slice
const num1a = [1,2,3];
const num2a = [4,5,6,7];

const num = num1a.concat(num2a);
console.log(num); 

const num3a = [1,2,3,4,5,6,7,8];
const sliceArr = num3a.slice(2,5);
console.log(sliceArr);

// Spread operator
//const num3a = [1,2,3,4,5,6,7,8];
console.log(...num3a);
console.log(num3a[0],num3a[1]);
console.log(num3a);

const copiedArr = [...num3a];
console.log(copiedArr);

// const num1a = [1,2,3];
// const num2a = [4,5,6,7];
const nuM = [...num1a, ...num2a];
console.log(nuM);

// Joining Array
let numb1 = [1,2,3,4];
let joinArray = numb1.join(' - ');
console.log(joinArray);

let massageB = 'Hi my name is Azis';
const arrMassageB = massageB.split(' ');
console.log(arrMassageB.join('-'));

// ES6 Fearure : Map
// let numb1 = [1,2,3,4];
// let mulByTwo1 = [];

// for (let num of numb1){
//     mulByTwo1.push(num*2);
// }
// console.log(mulByTwo1);

// const MulByTwo1 = numb1.map(function(num){
//     return num*2;
// })

// Arr Function
const MulByTwo1 = numb1.map((num) => num*2);

console.log(MulByTwo1)

// const doctorsA = [
//     {name : 'Azis', age : 30},
//     {name : 'Ahmad', age : 40},
//     {name : 'Supri', age : 21},
// ];

const docName = doctorsA.map((doc) => doc.name);
console.log(docName);

// ES6 : Filtering an Array
// const num3a = [1,2,3,4,5,6,7,8];
let onlyOddNumber = [];

for (let num of num3a){
    if (num % 2 !== 1){
        onlyOddNumber.push(num);
    }
} 
console.log(onlyOddNumber);

const onlyOddnumbers = num3a.filter(function(num){
    return num % 2 === 1;
})
console.log(onlyOddnumbers)

// ES6 : Reduce
let numB = [10, 20, 30];

let Sum = 0;
for (let num of numB){
    Sum = Sum + num;
}
console.log(Sum);

const ReduceSum = numB.reduce(function(sum,num){
    return sum += num;
})
console.log(ReduceSum)


















