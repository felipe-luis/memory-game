

const emojis = [
    "🐱‍👤",
    "🐱‍👤",
    "👀",
    "👀",
    "🏀",
    "🏀",
    "💻",
    "💻",
    "💰",
    "💰",
    "🍕",
    "🍕",
    "🍟",
    "🍟",
    "👻",
    "👻"
];
let openCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
let timerActive = false;


for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick
    document.querySelector('.game').appendChild(box);
}

function handleClick(){
    if(!timerActive){
        startTimer()
        timerActive = true
    }
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
    
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")


    }
    openCards = []

    if(document.querySelectorAll('.boxMatch').length === emojis.length){
        isPaused = true
    }
}

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;
let isPaused = false
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const milisecondsEl = document.getElementById('miliseconds')


function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            miliseconds += 10
            if(miliseconds == 1000){
                seconds ++;
                miliseconds = 0
            }
    
            if(seconds == 60){
                minutes++;
                seconds = 0;
            }
    
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatMiliseconds(miliseconds)
            
        }
    },10)

}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
}






