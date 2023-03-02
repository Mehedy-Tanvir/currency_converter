const currencyFirst = document.querySelector('#currency-first');
const worthFirst = document.querySelector('#worth-first');

const currencySecond = document.querySelector('#currency-second');
const worthSecond = document.querySelector('#worth-second');
const exchangeRate = document.querySelector('#exchange-rate');
updateRate();

async function updateRate() {
    await fetch(`https://v6.exchangerate-api.com/v6/419898b21b5d61857b9e446a/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const currencyFirstValue = currencyFirst.value;
            const currencySecondValue = currencySecond.value;
            const rate = data.conversion_rates[currencySecondValue];
            firstCurrencyWorth = worthFirst.value;
            secondCurrencyWorth = firstCurrencyWorth * rate;
            worthSecond.value = secondCurrencyWorth;
            exchangeRate.innerText = `1 ${currencyFirstValue} = ${rate} ${currencySecondValue}`;
        })
}

currencyFirst.addEventListener('change', updateRate);
currencySecond.addEventListener('change', updateRate);
worthFirst.addEventListener('input', updateRate);