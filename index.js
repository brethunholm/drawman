const secret = document.querySelector('.answer')
const bank = document.querySelector('.bank')
const lastMan = document.querySelector('img.last');
let currentMan;
const randomWords = ['jackpot', 'juicy', 'kazoo', 'zipper', 'banjo','microwave']
let array = [];

//TODO make it so you can't get the same random word twice in a row



// generate random word
let randomNumber = Math.floor(Math.random() * (randomWords.length - 1) + 1);
let word = randomWords[randomNumber];
console.log(word)

// generate and display secret word for user
let secretWord = word.replaceAll(/./g, '*');
// display word in html
secret.innerHTML = secretWord;
let secretArray = secretWord.split('');

let wordLetters = word.split('');




function checkGuess(guessLetter) {

guessLetter = guessLetter.toLowerCase();
console.log(guessLetter)
    

let index = []
for (let i = 0; i < wordLetters.length; i++) {
    if(wordLetters[i] === guessLetter) {
        index.push(i)
    }
}


let index1 = index[0];
let index2 = index[1];


if(wordLetters.includes(guessLetter) && index.length > 1) {
    console.log('Woohoo!')
secretArray.splice(index1,1,guessLetter)
secretArray.splice(index2,1,guessLetter)
console.log(secretArray)

let answer = secretArray.join('').toUpperCase();
secret.innerHTML = answer;



} else if(wordLetters.includes(guessLetter) && index.length === 1) {
    secretArray.splice(index1,1,guessLetter)
    console.log(secretArray)

    let answer = secretArray.join('').toUpperCase();
    secret.innerHTML = answer;
    

    } else {
        console.log('Bummer man');
        showMan()
        array.push(guessLetter);
        let loggedGuess = array.join('').toUpperCase();
        bank.innerHTML = loggedGuess;
        
    }
}


function showMan(){
    currentMan = document.querySelector('img.active');
   
    console.log(currentMan)
    currentMan.classList.add('hidden');
    currentMan.classList.remove('active');

    const nextMan = currentMan.nextElementSibling || document.querySelector('.last')
    
    nextMan.classList.add('active')
    nextMan.classList.remove('hidden')
    console.log(nextMan)

    if(currentMan === lastMan) {
        alert('You loose!')
        console.log('you loose')
    }
    
}

function isGameOver(answer) {
    if(currentMan === lastMan) {
        alert('GAME OVER loose')

    } else if(answer === finalWord) {
        console.log('You win!')
        alert('You win')
    } else {
        return
    }
}



// event listeners

window.addEventListener('keyup', e => {
    console.log(e.key);
    let guessLetter = e.key;
    checkGuess(guessLetter);
  })





// TODO 
// TODO handle win/ loose
// TODO format word to guess _ _ _ _ .map 
// TODO make it so you can only guess letters and only guess each letter once

