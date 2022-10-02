function attachEventsListeners() {


    let mainElement = document.querySelector('main')
    let daysInputEl = document.querySelector('#days')
    let hoursInputEl = document.querySelector('#hours')
    let minutesInputEl = document.querySelector('#minutes')
    let secondsInputEl = document.querySelector('#seconds')
    console.log(daysInputEl.value)


    mainElement.addEventListener('click', (e) => {

        if (e.target.id === "daysBtn") {
            hoursInputEl.value = Number(daysInputEl.value) * 24
            minutesInputEl.value = Number(daysInputEl.value) * 1440
            secondsInputEl.value = Number(daysInputEl.value) * 86400
        } else if (e.target.id === "hoursBtn") {
            daysInputEl.value = Number(hoursInputEl.value) / 24
            minutesInputEl.value = Number(hoursInputEl.value) * 60
            secondsInputEl.value = Number(hoursInputEl.value) * 3600
        } else if (e.target.id === "minutesBtn") {
            daysInputEl.value = Number(minutesInputEl.value) / 1440
            hoursInputEl.value = Number(minutesInputEl.value) / 60
            secondsInputEl.value = Number(minutesInputEl.value) * 60
        } else if (e.target.id === "secondsBtn") {
            daysInputEl.value = Number(secondsInputEl.value) / 86400
            hoursInputEl.value = Number(secondsInputEl.value) / 3600
            minutesInputEl.value = Number(secondsInputEl.value) / 60
        }
    })



}