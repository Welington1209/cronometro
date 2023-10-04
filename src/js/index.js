const minutosEl = document.getElementById("minutos")
const segundosEl = document.getElementById("segundos")
const milisegundosEl = document.getElementById("milisegundos")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resumeBtn = document.getElementById("resumeBtn")
const resetBtn = document.getElementById("resetBtn")

let interval
let minutos = 0
let segundos = 0
let milisegundos = 0
let isPaused = false

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pausarTempo)
resumeBtn.addEventListener("click", resumirTempo)
resetBtn.addEventListener("click", resetarTempo)

function startTimer() {

    interval = setInterval(() => {
        if (!isPaused) {

            milisegundos += 10

            if (milisegundos === 1000) {
                segundos++
                milisegundos = 0
            }

            if (segundos === 60) {
                minutos++
                segundos = 0
            }

            minutosEl.textContent = formatrTempo(minutos)
            segundosEl.textContent = formatrTempo(segundos)
            milisegundosEl.textContent = formatarMilisegundos(milisegundos)

        }
    }, 10)

    startBtn.style.display = "none"
    pauseBtn.style.display = "flex"
}

function pausarTempo() {
    isPaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "flex"
}

function resumirTempo() {
    isPaused = false
    pauseBtn.style.display = "flex"
    resumeBtn.style.display = "none"
}

function formatrTempo(time) {
    return time < 10 ? `0${time}` : time
}

function formatarMilisegundos(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

function resetarTempo() {
    clearInterval(interval)
    minutos = 0
    segundos = 0
    milisegundos = 0

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    milisegundosEl.textContent = "000"

    startBtn.style.display = "flex"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}