const randomWords = ['jackpot', 'juicy', 'kazoo', 'zipper', 'banjo','microwave']
const guessLetter = 'o'

let randomNumber = Math.floor(Math.random() * (randomWords.length - 1) + 1);
let word = randomWords[randomNumber];
console.log(word)

// let letters = word.split('');
// console.log(letters)


let secretWord = word.replaceAll(/./g, '*');
// display word in html
// secret.innerHTML = secretWord;
let secretArray = secretWord.split('');
console.log(secretArray)

let wordLetters = word.split('');


let index = []
for (let i = 0; i < wordLetters.length; i++) {
    if(wordLetters[i] === guessLetter) {
        index.push(i)
    }
    
}


let index1 = index[0];
let index2 = index[1];
let index3 = index[2];


if(wordLetters.includes(guessLetter) && index.length > 1) {
    console.log('Woohoo!')
secretArray.splice(index1,1,guessLetter)
secretArray.splice(index2,1,guessLetter)

console.log(secretArray)
} else if(wordLetters.includes(guessLetter) && index.length === 1) {
    secretArray.splice(index1,1,guessLetter)
    console.log(secretArray)
} else {
    console.log(word)
}




// doesn't work of words with 2+ of the same letter

if(wordLetters.includes(guessLetter)) {
    console.log('Woohoo!')
    let index = wordLetters.indexOf(guessLetter);
    console.log(index)
   // TODO try for loop instead of .includes
    
    secretArray.splice(index,1,guessLetter)
    console.log(secretArray)
    
    let answer = secretArray.join('').toUpperCase();
    secret.innerHTML = answer;
    
    // secretWord.join('');
    // secret.innerHTML = secretWord;