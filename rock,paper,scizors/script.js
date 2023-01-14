const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const spanElementScore1 = document.querySelector(".left")
const spanElementScore2 = document.querySelector(".right")
const resultEl = document.querySelector(".result")
const spanPcChoice = document.querySelector(".pc-choice")

let myPoints = 0
let pcPoints = 0
let choice2 = 0

const showPoints = () => {
    spanElementScore1.textContent = myPoints
    spanElementScore2.textContent = pcPoints
}
const pickedRock = () => {
    choice2 = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    switch (choice2) {
        case 1: //kamien 
            //remis
            resultEl.textContent = "REMIS"
            spanPcChoice.textContent = "kamien"
            break;
        case 2: //papier
            //przegrana
            resultEl.textContent = "PRZEGRALES"
            pcPoints++
            showPoints()
            spanPcChoice.textContent = "papier"
            break;

        case 3: //nozyczki
            //wygrana
            resultEl.textContent = "WYGRALES"
            myPoints++
            showPoints()
            spanPcChoice.textContent = "nozyczki"
            break;
        default: //blad w losowaniu
            console.error('Błąd w losowaniu');
            break;
    }
}
const pickedPaper = () => {
    choice2 = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    console.log(choice2);
    switch (choice2) {
        case 1: //kamien 
            //wygrana
            resultEl.textContent = "WYGRALES"
            myPoints++
            showPoints()
            spanPcChoice.textContent = "kamien"
            break;
        case 2: //papier
            //remis
            resultEl.textContent = "REMIS"
            spanPcChoice.textContent = "papier"
            break;

        case 3: //nozyczki
            //przegrana
            resultEl.textContent = "PRZEGRALES"
            pcPoints++
            showPoints()
            spanPcChoice.textContent = "nozyczki"
            break;
        default: //blad w losowaniu
            console.error('Błąd w losowaniu');
            break;
    }
}
const pickedScissors = () => {
    choice2 = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    console.log(choice2);
    switch (choice2) {
        case 1: //kamien 
            //przegrana
            resultEl.textContent = "PRZEGRALES"
            pcPoints++
            showPoints()
            spanPcChoice.textContent = "kamien"
            break;
        case 2: //papier
            //wygrana
            resultEl.textContent = "WYGRALES"
            myPoints++
            showPoints()
            spanPcChoice.textContent = "papier"
            break;

        case 3: //nozyczki
            //remis
            resultEl.textContent = "REMIS"
            spanPcChoice.textContent = "nozyczki"
            break;
        default: //blad w losowaniu
            console.error('Błąd w losowaniu');
            break;
    }
}

rockBtn.addEventListener('click', pickedRock)
paperBtn.addEventListener('click', pickedPaper)
scissorsBtn.addEventListener('click', pickedScissors)