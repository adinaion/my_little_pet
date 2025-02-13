// First button
const button1 = document.querySelector('.buttons-left .top-button');
const bunnyEars = document.querySelectorAll('.ears');

let isAnimationActive = true;

function toggleBunnyAnimation() {
    bunnyEars.forEach(ear => {
        if (isAnimationActive) {
            ear.style.animation = 'none';
        } else {
            ear.style.animation = 'wiggle 1s infinite ease-in-out';
        }
    });

    isAnimationActive = !isAnimationActive;

    console.log(`Animația este acum ${isAnimationActive ? 'activă' : 'inactivă'}`);
}

button1.addEventListener('click', toggleBunnyAnimation);


// Second button
const button2 = document.querySelector('.buttons-left .middle-button');

function meetTupi() {
    const userName = prompt("Hello! My name is Tupi. What's yours?");
    
    if (userName) {
        alert(`Nice to meet you, ${userName}!`);
    } else {
        alert("Hmm... looks like you want to keep your name a secret!");
    }
}

button2.addEventListener('click', meetTupi);


// Third button
const button3 = document.querySelector('.buttons-left .bottom-button');
const bunny = document.querySelector('.bunny');

function animateBunny() {
    bunny.classList.add('bounce');

    setTimeout(() => {
        bunny.classList.remove('bounce');
    }, 2000);
}

button3.addEventListener('click', animateBunny);


// Fourth button
const button4 = document.querySelector('.buttons-right .top-button');
const bunnyArms = document.querySelector('.arms');

function moveBunnyArms() {
    bunnyArms.classList.add('wave');

    setTimeout(() => {
        bunnyArms.classList.remove('wave');
    }, 1500);
}

button4.addEventListener('click', moveBunnyArms);


// Fifth button
const button5 = document.querySelector('.buttons-right .middle-button');

const bunnyEyes = document.querySelectorAll('.eyes');
const bunnyWhite = document.querySelectorAll('.white');

function blinkBunny() {
    bunnyEyes.forEach(eye => {
        eye.classList.add('blink');
    });
    bunnyWhite.forEach(white => {
        white.classList.add('blink');
    });

    setTimeout(() => {
        bunnyEyes.forEach(eye => {
            eye.classList.remove('blink');
        });
        bunnyWhite.forEach(white => {
            white.classList.remove('blink');
        });
    }, 500);
}

button5.addEventListener('click', blinkBunny);


// Sixth button
const bunnyDiv = document.querySelector('.bunny');

const imageList = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg'
];

function changeBunnyBackgroundToImage() {
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    bunnyDiv.style.background = `url('${randomImage}') no-repeat center center / cover`;
    console.log(`Fundalul a fost schimbat la imaginea: ${randomImage}`);
}

const button6 = document.querySelector('.buttons-right .bottom-button');

button6.addEventListener('click', changeBunnyBackgroundToImage);