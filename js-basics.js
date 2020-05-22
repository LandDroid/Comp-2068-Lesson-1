console.clear();
// Single line comments

/* 
Multi line comments
*/

// jules and me = true;

//Mutable variables (can change)

var dontUseTheseAnymore = true;
let useThisInstead = true; //scoped to blocks {}

//Non mutable variables (cannot change)
const useTheseAsMuchAsPossible = true;

//Error Handling
try {
    useTheseAsMuchAsPossible = false;
}
catch (e) {
    console.log(e.toString());
}

let outsideBlock = "Look at me";
{
    console.log(outsideBlock);
    let insideBlock = "You can't see me";
}

try {
    console.log(insideBlock);
}
catch (e) {
    console.error(e.toString());
}

if(true) {
    let name = "Landon Lyle";
}
try {
    console.log(name);
}
catch (e) {
    console.error(e.toString());
}

// Arrays
const arr = [1,3,5];
console.log(arr);

// reference arr
arr[1] = 6;
console.log(arr);

// object
const obj = {
    name: 'Landon',
    age: 38,
    dob: '1982-06-03',
    'nickname' : 'LandDroid'
};

console.log(obj['name']);
console.log(obj.name);
console.log(obj['nickname']);

// control structure
let direction;
if (obj.age > 20) {
    direction = "down";
}
else{
    direction = "up";
}
console.log("It's all " + direction + " hill from here");
console.log(`It's all ${direction} hill from here`);
console.log(`
Hello Dave
How are you today
`);

switch (direction){
    case 'up' : console.log("Go get em tiger");
    break;
    default: 
    console.log("You better rest.");
}

switch (true) {
    case 5 < 7 : 
    console.log("Yep");
    break;
}

// Loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let item of ['a','b','c']) {
    console.group(item);
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// Functions
function sayHello (name) {
    console.log(`Hello, ${name}`);
}
sayHello('Landon');
const helloFunc = sayHello;
console.log(helloFunc);
helloFunc('Landon');