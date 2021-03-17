const secret = document.querySelector('.answer')
const bank = document.querySelector('.bank')
const lastMan = document.querySelector('img.last');
const randomWords = ['wolf', 'cat', 'kazoo', 'zipper', 'orange','lizard','blue','dog','house','cake','pillow', 'book','frog']
let currentMan;
let array = [];
let lastNumber; // random number memory 




// generate random word
// let randomNumber = Math.floor(Math.random() * (randomWords.length - 1) + 1);
// let word = randomWords[randomNumber];
// console.log(word)



function getRandNumber() {
    let randomNumber = Math.floor(Math.random() * (randomWords.length - 1) + 1);

    if (randomNumber === lastNumber) { // compare with last number
       getRandNumber()
    } else {
        return randomNumber
       
    }
    lastNumber = randomNumber
  }

  



let word = randomWords[getRandNumber()];
console.log(word)
// generate and display secret word for user
let secretWord = word.replaceAll(/./g, '_');
// display word in html
secret.innerHTML = secretWord;
let secretArray = secretWord.split('');
let wordLetters = word.split('');


function checkGuess(guessLetter) {
// guessLetter = guessLetter.toLowerCase();

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

let answer = secretArray.join('').toUpperCase();
secret.innerHTML = answer;

let key =  secretArray.join('');
checkIfWon(key);


} else if(wordLetters.includes(guessLetter) && index.length === 1) {
    secretArray.splice(index1,1,guessLetter)
   


    let formattedAnswer = secretArray.join('').toUpperCase();
    secret.innerHTML = formattedAnswer;

    let key =  secretArray.join('');
    checkIfWon(key);
    

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
   
    currentMan.classList.add('hidden');
    currentMan.classList.remove('active');

    const nextMan = currentMan.nextElementSibling || document.querySelector('.last')
    
    nextMan.classList.add('active')
    nextMan.classList.remove('hidden')
    

    if(currentMan === lastMan) {
        secret.innerHTML = `AHH BUMMER MAN YOU LOOSE <br/> The word was: ${word.toLocaleUpperCase()}` 
        setTimeout(function(){location.reload();}, 4000 );
    }
    
}

function checkIfWon(key) {
    if (key === word) {
        console.log('you win')
        secret.innerHTML=`${word.toUpperCase()}: WOOHOOO YOU WIN`
        setTimeout(function(){location.reload();}, 4000 );
    } 
}



// event listeners
window.addEventListener('keyup', e => {
    let guessLetter = e.key;
    checkGuess(guessLetter);
  })






// TODO make it so you can only guess letters and only guess each letter once

