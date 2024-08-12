/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

const private = 'Audio';





function logger() {
    console.log("Function that does something")
}

//Calling, running or invoking the fuction;
logger();


function juicer(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}


const appleJuice = juicer(5, 0);
const appleOrangeJuice = juicer(5, 3);
console.log(appleJuice);
console.log(appleOrangeJuice);




//This is a function declaration
//This is a function declaration
function calAge(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge(2002);


//This is a function expression
//This is a function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(2002);
console.log(age1, age2);



const PriceAfTax = function (price) {
    return price * 0.20;
}

const book1Price = PriceAfTax(40);


//Function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
//This is the same as above, Arrow Function
const calAge3 = birthYear => 2037 - birthYear;

const age3 = calAge3(2003);
console.log(age3);

//Quando utlizamos mais de uma linha de código na arrowfuncion, return statement é necessario. Deve ser escrito no bloco de código, assim como abaixo:
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;

}


console.log(yearsUntilRetirement(2002, 'Gabriel'))
console.log(yearsUntilRetirement(2005, 'Tione'))


    * /


function fruitSlicer(fruit) {
    return fruit * 4;
}


function juicer(apples, oragens) {
    const applePices = fruitSlicer(apples);
    const orangePieces = fruitSlicer(oragens);
    const juice = `Juice with ${applePices} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(juicer(4, 6));


//Arrow Function
const arrowEx = age => 2037 - age;
console.log(arrowEx(2002));


//Function Expression
const juicer = function makeJuice(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
//Function declaration

function calAge(birthYear) {
    return 2037 - birthYear;
}


//Nota-se que nas duas funções, a variavel birthYear no parametro não tem qualquer relação com a variavel birthYear fora da função. Isso é 
//chamado de escopo de função. A variavel birthYear dentro da função é uma variavel local, enquanto a variavel birthYear fora da função é 
//uma variavel global.

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(2002, 'Gabriel'));
console.log(yearsUntilRetirement(1970, 'Tione'));


const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= avgDolphins * 2) {
        return console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        return console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);




const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friend4 = 'Sarah';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Another way to create an array

const arr = new Array(1991, 1984, 2008, 2020);


console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length);

console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 2]);

// Podemos notar que caso array seja declarado com const, não podemos reatribuir o array, mas podemos modificar os elementos do array.
friends[2] = 'Jay';

console.log(friends);

//Não podemos fazer isso

// - > friedns = ['Bob', 'Alice'];

const firstName = 'Gabriel'
const gabriel = [firstName, 'Hartmann', 2037 - 2002, 'student', friends];

console.log(gabriel);
console.log(gabriel.length);






calAge = function (birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];
const ages = new Array;
for (let i = 0; i < year.length; i++) {
    console.log(calAge(year[i]));
    ages.push(calAge(year[i]));

}

console.log(ages);




// Métodos de Arrays 

//Adiciona elementos no final do array
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // O método push retorna o novo comprimento do array, por ser uma função. 
//Neste caso ele retorna algo tambem, que se trata do novo comprimento do array.
console.log(friends);
console.log(newLength);
// Adiciona elementos no começo do array. Também retorna o novo comprimento do array.
friends.unshift('John');

// Remove o último elemento do array
const popped = friends.pop(); // Não é necessário passar argumentos para o método pop, pois ele sempre remove o último elemento do array.

console.log(popped);


// Remove o primeiro elemento do array
friends.shift(); // Não é necessário passar argumentos para o método shift, pois ele sempre remove o primeiro elemento do array.

console.log(friends.indexOf('Steven')); // Retorna a posição do elemento no array. Caso o elemento não exista, retorna -1.


console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'))


if (friends.includes('Peter')) {
    console.log("You have a friend called Peter!")
}





const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.20);
    }
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals);




//Trabalhando com Objetos

//Declaração

const gabriel = {
    firstName: 'Gabriel',
    lastName: 'Hartmann',
    birthYear: 2002,
    job: 'Programmer',
    friends: ['Tione', 'Saert', 'Cyronical']
    hasDriversLicense: true,

};

//Como obter informação de um objeto?

//DOT notation
console.log(gabriel.lastName);

//Bracket notation
console.log(gabriel['lastName']);

const nameKey = 'Name';

console.log(gabriel['first' + nameKey])

//Undefined é algo que ocorre quando tentamos acessar alguma propriedade que não existe dentro de um objeto 

const interested = prompt("What do you whant to know?");
//console.log(`${interested === null || !(interested in gabriel) ? "Incorrect data found, try again" : gabriel[interested]}`);



console.log(gabriel.interested); //Acesso DIRETO a propriedade interested do objeto gabriel, que no caso não existe.
console.log(gabriel[interested]); //Acesso a variavel interested, que é uma string, e não a propriedade interested do objeto gabriel.



if (gabriel[interested]) {
    console.log(gabriel[interested]);
} else {
    console.log("Incorrect data found, try again")
}


gabriel.location = 'Brazil';

gabriel['twitter'] = '@gabrielhartmann';

console.log(gabriel.location);

console.log(`${gabriel.firstName} has ${gabriel.friends.length} friends, and his best firend is called ${gabriel.friends[0]}`);







const gabriel = {
    firstName: 'Gabriel',
    lastName: 'Hartmann',
    birthYear: 2002,
    job: 'Programmer',
    friends: ['Tione', 'Saert', 'Cyronical'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return console.log(`${this.firstName} is a ${this.calcAge()} year old ${gabriel.job}, his best friend is ${this.friends[0]}.\nAlso called by his last name, ${this.lastName} has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`)
    }
};


//console.log(gabriel.calcAge());

//console.log(gabriel.age)


gabriel.getSummary();




const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }

};


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();

console.log(`${mark.bmi > john.bmi ? `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!"` : `John Smith's BMI (${john.bmi}) is higher than Mark Miller's BMI (${mark.bmi})!"`}`);



// For loops keeps running while the condition is true

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}




const gabriel = [
    'Gabriel',
    'Hartmann',
    2002,
    'Programmer',
    ['Tione', 'Saert', 'Cyronical'],
    true
];

types = [];

for (let i = 0; i < gabriel.length; i++) {
    console.log(gabriel[i], typeof gabriel[i])

    //types[i] = typeof gabriel[i];
    types.push(typeof gabriel[i]);
}
console.log(types);


const years = [1991, 2006, 2004, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);

};

console.log(ages);


const gabriel = [
    'Gabriel',
    'Hartmann',
    2002,
    'Programmer',
    ['Tione', 'Saert', 'Cyronical'],
    true
];


//Continue and break


//Neste caso, o que ocorre é uma tentativa de imprimir todos os valores dentro do array que são do tipo string
//Para isso temos o loop for e termo reservado chamado cotinue que somente irá prosseguir o loop enquanto a condição for satisfeita
console.log("-----ONLY STRING-----")
for (let i = 0; i < gabriel.length; i++) {
    if (typeof gabriel[i] !== 'string') continue;
    console.log(gabriel[i], typeof gabriel[i]);

}


//Onde o número é encontrado o loop todo encerra
console.log("-----BREAK WITH NUMBER-----")

for (let i = 0; i < gabriel.length; i++) {
    if (typeof gabriel[i] === 'number') break;
    console.log(gabriel[i], typeof gabriel[i]);

}






;

const fCalc = function (n) {
    const arr = [0, 1];
    for (let i = 2; arr.length; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
        if (arr.length === n + 1) {
            return (arr[n]);
        }
    }
}
//(n - 1) + (n - 2);


console.log(fCalc(7));

*/


let input = `6\n25 77 54 81 48 34`;


let lines = input.split("\n");
let numOfCust = Number(lines[0]);

console.log();
let billAmounts = new Array(lines[1].split(' '));

if (n >= 0) {
    function calcPerfNum(n) {
        let checkN = Math.sqrt(n);
        return ((checkN * checkN) === n);
    }
    return false;
}
let discountedCust = 0;
for (let i = 0; i < billAmounts.length; i++) {
    if (calcPerfNum(billAmounts[i])) {
        discountedCust++;
    }
}



