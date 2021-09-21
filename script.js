const EURviuw = document.querySelector('.eur'),
      USDviuw = document.querySelector('.usd'),
      UAHviuw = document.querySelector('.uah'),
      JPYviuw = document.querySelector('.jpy');


const eurInRub = document.querySelector('.eur-in-rub'),
      eurInput = document.getElementById('eur-input');

const usdInRub = document.querySelector('.usd-in-rub'),
      usdInput = document.getElementById('usd-input');

const uahInRub = document.querySelector('.uah-in-rub'),
      uahInput = document.getElementById('uah-input');

const jpyInRub = document.querySelector('.jpy-in-rub'),
      jpyInput = document.getElementById('jpy-input');

const valute = {
    EUR: "",
    USD: "",
    UAH: "",
    JPY: ""
}

axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => {
        valute.EUR = res.data.Valute.EUR.Value
        valute.USD = res.data.Valute.USD.Value
        valute.UAH = res.data.Valute.UAH.Value * 0.1
        valute.JPY = res.data.Valute.JPY.Value * 0.01
    
        EURviuw.textContent = valute.EUR.toFixed(4)
        USDviuw.textContent = valute.USD.toFixed(4)
        UAHviuw.textContent = valute.UAH.toFixed(4)
        JPYviuw.textContent = valute.JPY.toFixed(4)
    });

eurInput.addEventListener('change', () => {
    if (!Number.isInteger(+eurInput.value)) {
        eurInRub.textContent = "Вы ввели не число"
    } else if (eurInput.value === '') {
        eurInRub.textContent = 0
    } else {
        eurInRub.textContent = Math.round(+eurInput.value * valute.EUR) + " Руб"
    }
});

usdInput.addEventListener('change', () => {
    if (!Number.isInteger(+usdInput.value)) {
        usdInRub.textContent = "Вы ввели не число"
    } else if (usdInput.value === '') {
        usdInRub.textContent = 0
    } else {
        usdInRub.textContent = Math.round(+usdInput.value * valute.USD) + " Руб"
    }
});

uahInput.addEventListener('change', () => {
    if (!Number.isInteger(+uahInput.value)) {
        uahInRub.textContent = "Вы ввели не число"
    } else if (uahInput.value === '') {
        uahInRub.textContent = 0
    } else {
        uahInRub.textContent = Math.round(+uahInput.value * valute.UAH) + " Руб"
    }
});

jpyInput.addEventListener('change', () => {
    if (!Number.isInteger(+jpyInput.value)) {
        jpyInRub.textContent = "Вы ввели не число"
    } else if (jpyInput.value === '') {
        jpyInRub.textContent = 0
    } else {
        jpyInRub.textContent = Math.round(+jpyInput.value * valute.JPY) + " Руб"
    }
});

