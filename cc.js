{
    const formElement = document.querySelector(".js-form");

    const currencyElement = document.querySelector(".js-currencyIn");
  
    const resultElement = document.querySelector(".js-currencyResult");
  
    const selectedElement = document.querySelector(".js-currencySelected");

  const calculate = (currency, currencyRate) => {
    

    return currencyElement.value/ selectedElement.value;
  };

  formElement.addEventListener("input", () => {
    const result = calculate(currencyElement.value, selectedElement.value);

    resultElement.innerText = result.toFixed(1)
  });
}


