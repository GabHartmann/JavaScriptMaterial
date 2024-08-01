const country = "Brazil";
const continet = "South America"
let population = 200;
let isIsland = false;
console.log(country)
console.log(continet)
console.log(population)

let language = "not"

console.log(typeof isIsland);
console.log(typeof continet)
console.log(typeof country)
console.log(typeof population)
console.log(typeof language)


console.log(population / 2)

population += 1;
console.log(population)

let isBiggerFinland = true;

let isCountryMorePopulous = true;

let description = 'Brazil is in South America, and 20000000 people speak portuguese';




if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}



console.log(population < 55 && language === 'English' && !isIsland ? console.log("You should live in Portugal :)") : console.log("Portugal does not meet your creteria :("));



switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log("Most number of native speaker!");
        break;
    case 'Spanish':
        console.log("2nd place in numbers of native speakers!");
        break;
    case 'English':
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("4th place");
        break;
    case 'Arabic':
        console.log("5h most spoken languase!");
        break;
    default:
        console.log("Great language too!")
}


console.log(
    `${country} puplation is ${population > 33 ? 'above' : 'below'} average.`
);