console.clear();

// Destructuring
const arr = ['The Crow', 'The Cranberries', 'Cheesecake'];
const [movie, music, food] = arr;
console.log(movie, music, food);
console.log(`My favorite movie is the ${movie}`);

const landon = {
    name: 'Landon Lyle',
    age: 38,
    dob: (new Date(1982, 6, 3).toString())
};
console.log(landon);
const {name, age, dob} = landon;
console.log(`Your name is ${name} and you are ${age} years old. You were born on ${dob}.`);

const tim = {
    alias: 'Super Bob'
};
const {alias, aka = 'Tim', race = 'unknown'} = tim;
console.log(alias, aka, race);

const {name: my_name, age: my_age, dob: my_dob} = landon;
console.log(my_name, my_age, my_dob);


// Spred operator
const temps = [98, 67, 35];
const tempChanges = [...temps, 89, 65];
console.log(tempChanges);

const person = {name:"Bob", spouse: "Karen", children: 4};
const hobbies = {fav: "Walking the dog", secFav: "Food"};
const completePerson = {...person, hobbies: {...hobbies}};
console.log(completePerson);

function sayHello (name, age, dob) {
    console.log(`Hello, ${name}. You are ${age} years old. And ${dob}.`);
}

const personArr = ['Landon', 38, '06-03-1982'];
sayHello(...personArr);

function sayGoodbye ({name, age, dob}) {
    console.log(`Goodbye, ${name}. ${age} ${dob}`);
}
sayGoodbye(landon);

// Arrow function
const myFirstrArrowFunc = () => {
    console.log(this);
    console.log("I'm an arrow function");
};

myFirstrArrowFunc();

const func2 = (param1, param2) => {
    console.log(param1, param2);
}
func2('arg1','arg2');

const func3 = param => {
    console.log(param);
};
func3('urgh');

const func4 = param => console.log(param);
func4("wowza");
