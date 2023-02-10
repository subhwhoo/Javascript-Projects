const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function updateClock(){
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const hourDeg = (hours/12)*360
    const minuteDeg = (minutes/60)*360
    const secondDeg = (seconds/60)*360
    hourEl.style.transform=`rotate(${hourDeg}deg)`
    minuteEl.style.transform=`rotate(${minuteDeg}deg)`
    secondEl.style.transform=`rotate(${secondDeg}deg)`
}

setInterval(updateClock, 1000)
