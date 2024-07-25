
//Tipos de Variaveis
// LET e CONST = usado no JS depois de 2015
// VAR = utilizado antes de 2015, só deve ser utilizado se compatibilidade for um problema
//


/*
let js = 'amazing';
if (js = 'amazing') alert('Javascript is fun');

console.log(10 + 453 + 5);

let firstName = "Jonas";
console.log(firstName)




true;
let javascriptIsFun = true;
console.log(javascriptIsFun);


//Dynamic typing
javascriptIsFun = 'YES!' // Designando um novo valor para a variavel já declarada previamente
console.log(javascriptIsFun)


year = 1991;

console.log(typeof year);
console.log(typeof null); //This should not return objetc, it is no an object by any means, this is just a bug




let age = 30;

age = 31;

const birthYear = 1991;

var job = 'programmer'
job = 'teacher';

let currentYear = 2054;

let myAge = currentYear - 2002;

let ageSara = currentYear - 1996;

console.log(myAge, ageSara)

console.log(myAge / 2, ageSara / 2, 2 ** 3);



let firstName = 'Gabriel';
let lastName = 'Hartmann';

console.log(firstName + ' ' + lastName)


//Operators

let x = 10 + 5;

x += 1;
x *= 1;

x++;
x--;

console.log(x);

//Comparasion

console.log(myAge > ageSara);

console.log(ageSara >= 18);


console.log(currentYear - 1991 > currentYear - 2020);




const firstName = 'Gabriel';
const job = 'programmer';
const birthYear = 2002;
const currentYear = 2037
const gabriel = " I'm " + firstName + ", a " + (currentYear - birthYear) + ' years old ' + job + " !";

console.log(gabriel);


const gabrielNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

console.log(gabrielNew);

console.log(` Just a normal string.... `);






const age = 17;

if (age >= 18) {
    console.log("Can Drive!");

} else {
    yearLeft = 18 - age;
    console.log(`Cant drive yet, ${yearLeft} year left until you can get your license`);
}


const birthYear = 1998;
let century;
if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}
console.log(century)


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {

    console.log("Mark's BMI (" + BMIMark + ") is higher than John's (" + BMIJohn + ")!");
} else {
    console.log("John's BMI (" + BMIJohn + ") is higher than Mark's BMI (" + BMIMark + ")!");
}




const inputYear = 1998;

console.log(Number(inputYear, inputYear));
console.log(Number(inputYear + 8));





//Falsy values: ' ', null, NaN, 0, undefined



console.log((Boolean(0)));
console.log((Boolean(NaN)));
console.log((Boolean({})));
console.log((Boolean('')));
console.log((Boolean(undefined)));

let money = 0;

if (money) {
    console.log("You shuld not spend it all")
} else {
    console.log("Get a job")
}




// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}



const age = '18';

if (age === 18) console.log("You just became an adult! (strict)")


if (age == 18) console.log("You just became an adult! (loose)")





const favourite = Number(prompt("What's your favourite number?")); //using ===, wrap the promp using Number method

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //'23' == 23 // using the == operator, the string is converted to an int type. Using the === this will return false because this operator does not do type conversion
    //Always use === when doing comparasions between two values, then convert later.
    console.log("Wowe 23/?? No WAYT")
} else if (favourite === 7) {
    console.log("7 is cool")
} else {
    console.log("Number is not 23 or 7!")
}

if (favourite !== 23) console.log("YEah, not 23 :(")


const hasDriverLicense = true;
const hasGoodVision = true;


console.log(hasDriverLicense && hasDriverLicense);
console.log(hasDriverLicense || hasDriverLicense);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;



if (shouldDrive) {
    console.log("Is good to go")
} else {
    console.log("You need to check something")
}



const day = "Monday";

switch (day) {
    case 'Monday': //day = 'Monday'
        console.log("Study something");
        console.log("2hrs study, plan for next day + code something");
        break;
    case 'tuesday':
        console.log("2hrs study, plan for next day + code something");
        break;
    case 'wednesday':
        console.log("2hrs study, plan for next day + code something");
        break;
    case 'thursday':
        console.log("2hrs study, course + code something beyond course");
        break;
    case 'friday':
        console.log("Nothing, free day");
        break;
    case 'saturday':
        console.log("Enjoy the day");
        break;
    case 'moonday':
        console.log("Study, code, course");
    default:
        console.log("You dind't choose something")
}



const day = "Thursday";

if (day === "Monday") {
    console.log("Study something");
    console.log("2hrs study, plan for next day + code something");
} else if (day === "Tuesday") {
    console.log("2hrs study, plan for next day + code something");
} else if (day === "Wednesday" || day == "Thursday") {
    console.log("Write code exemples")
} else if (day === "Friday") {
    console.log("Record videos");
} else if (day === "Saturday") {
    console.log("Rest");
} else if (day === "Moonday") {
    console.log("Free day");
} else {
    console.log("Not a day");
}








//Operador ternário

const age = 23;

//exemplo de operador ternario, NESTE caso o operador ternario é um expression, e este expression pode ser colocado dentro de um bloco statment
console.log(`"I'd like a glass of ${age >= 18 ? 'Water💧' : 'Wine 🍷'}"`);

*/



const bill = 301;

/* Write your code below. Good luck! 🙂 */

let tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.20;

console.log(tip);
































































































































