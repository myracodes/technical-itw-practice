
// 1. filtrer le tableau pour ne retourner que les strings qui contiennent au moins 2 'a'
var tab = ['lala', 'lili', 'loulou', 'gaga', 'rar', 'fafafa']

// créer un array filteredArray

// itérer sur chaque élément de l'array

// pour chaque élement :
// - s'il contient 1 A --> je l'envoie dans filteredArray


let filteredArray = [];

function howMany(str, letter){
  let occurences = str.split(letter);
  return occurences.length - 1;
};

//howMany("blabla", "a")

function filterArray(arr){
  let returnArray = [];
  arr.forEach(element => {
    if (howMany(element, 'a') >= 2) {
      returnArray.push(element);
    }
  });
  return returnArray;
};

filterArray(tab)
// ["lala", "gaga", "rar", "fafafa"]


var filteredElement555 = tab.filter(string => howMany(string, 'a') >= 2);

// suggestion solution 
const NB_OCCURENCES = 3 // nb occurence is 2, split return number of occurence + 1 => 2 + 1 = 3
var filteredElement556 = tab.filter(string => string.split('a').length >= NB_OCCURENCES);

// 2. Answer of etape ["lala", "gaga", "rar", "fafafa"]
// Exo 2 : remplacer chaque occurrence de la lettre "a" par la lettre "i"

var mappedResult = filteredElement556.map(string => string.replaceAll('a', 'i'));




/**
Create a function `generateCards(count)` with count being the number of cards I want
Cards will be in an array of objects with the following format `{ number, expiration_date, cvv, username }`
**/

let prenoms = ["Myriam", "Laetitia"];
let noms = ["Mira", "Kenobi"];

function generateCards(count) {
  //retourner count cards dans un array
  if (count > 10 ** 16) {
    return;
  }
  // chaque élément de l'array = {random number + random exp-date + random cvv + name}

  let cards = [];

  for (let i = 0; i < count; i++) {
    // [0 - 1[
    // [0 - 100[
    // 5 -> 005 - padStart
    // let randomCardNumber = Math.round(Math.random()*10 ** 16);
    // let stringNumber = randomCardNumber.toString();
    // let padStartNumber = stringNumber.padStart(16, '0');

    /* vérifier que padStartNumber !== un cardNumber de mon array cards */
    // const numberAlreadyExists = cards.find(card => card.number === padStartNumber) !== undefined;

    let padStartNumber;
    let numberAlreadyExists;

    do {
      let randomCardNumber = Math.round(Math.random()* 10 ** 16);
      let stringNumber = randomCardNumber.toString();
      padStartNumber = stringNumber.padStart(16, '0');

      numberAlreadyExists = cards.find(card => card.number === padStartNumber) !== undefined;

      console.log('trying with', padStartNumber);
      if (numberAlreadyExists) {
        console.log('number already exists, regenerating')
      }
    } while (numberAlreadyExists)
    console.log(padStartNumber, 'was free');

    // [0 - 1[
    // [0 - 11[ ~ [0 - 10.99999]
    // [1 - 12[ ~ [1 - 11.99999]
    // Math.round: 1 et 12 moins probables
    // 1 - 1.5 -> 1
    // 1.5 - 2.5 -> 2 ...
    // 11.5 - 11.999999 -> 12
    // Math.floor: augmenter le max de 1 -> tous autant de chance
    // 1 - 1.99 -> 1
    // 2 - 2.99 -> 2 ...
    // 11 - 11.999999 -> 11
    // 12 - 12.99999 -> 12


    let randomMonth = Math.round(Math.random()*(12 - 1)+1);
    let stringMonth = randomMonth.toString().padStart(2, '0');
    let randomYear = Math.round(Math.random()*(28 - 21)+21);
    let stringYear = randomYear.toString();

    let randomExp = stringMonth + '/' + stringYear;

    let randomPrenomIndex = Math.floor(Math.random()*(prenoms.length));
    let randomPrenom = prenoms[randomPrenomIndex];

    let newCard = {
      "number": padStartNumber,
      "expDate": randomExp,
      "cvv": "555",
      "username": randomPrenom + " Mira"
    };

    cards.push(newCard);
  };

  return cards;
}

console.log(generateCards(20 ** 16))

// ==========================================

// créer une fonction qui prend une chaîne et vérifie si elle contient toutes les lettres de l'alphabet ET 1 chiffre et retourne true si c'est le cas

function lettersAndNumber(string){
  let isValid = false;
  let hasLetters = false;
  let hasNumber = false;
  let characters = string.toLowerCase().split('');
  if (characters.includes('a' && 'b' && 'c' && 'd' && 'e' && 'f' && 'g' && 'h' && 'i' && 'j' && 'k' && 'l' && 'm' && 'n' && 'o' && 'p' && 'q' && 'r' && 's' && 't' && 'u' && 'v' && 'w' && 'x' && 'y' && 'z')) {
    hasLetters = true;
  };
  if (characters.includes('1' || '3' || '4' || '5' || '6' || '7' || '8' || '9')) {
    hasNumber = true;
      }
  if (hasNumber && hasLetters) {
    isValid = true;
  }
  return isValid;
}

console.log(lettersAndNumber('blaBLAlabcdefghijklmnopqrstuvwxyz1'))


// créer une fonction qui prend une phrase et retourne le plus long palindrome, sinon retourne empty string

function longestPalindrome(str){
  let words = str.split(' ');
  let palindromes = [];
  console.log(words);
  words.forEach(word => {
    // ici vérifier si palindrome
    // si oui, palindromes.push(word);
  })
}

console.log(longestPalindrome("bijour c'est moi"))

// ================================================