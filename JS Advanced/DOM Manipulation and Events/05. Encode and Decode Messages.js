function encodeAndDecodeMessages() {

    let textAreaElements = document.querySelectorAll('textarea')
    let buttonElements = document.querySelectorAll('button')



    buttonElements[0].addEventListener('click', (e) => {
        let message = textAreaElements[0].value.split("").map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join("")

        textAreaElements[0].value = ""
        textAreaElements[1].value = message
    })

    buttonElements[1].addEventListener('click', (e) => {
        let message = textAreaElements[1].value.split("").map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join("")

        textAreaElements[1].value = message

    })





}
