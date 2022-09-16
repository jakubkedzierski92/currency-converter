let formElement = document.querySelector(".js-form")

let currencyElement = document.querySelector(".js-currencyIn")

let resultElement = document.querySelector(".js-currencyResult")

let selectedElement = document.querySelector(".js-currencySelected")

formElement.addEventListener("input", () => {

let currency = currencyElement.value
let currencyRate = selectedElement.value

let result = currency / currencyRate

resultElement.innerText = result.toFixed(1)
})