// Taxas de câmbio fictícias para demonstração
const exchangeRates = {
    USD: 1,
    EUR: 0.93,
    JPY: 110.53,
    GBP: 0.73,
    AUD: 1.35,
    CAD: 1.25,
    CHF: 0.92,
    CNY: 6.47,
    SEK: 8.63,
    NZD: 1.40,
    BRL: 5.66
};

function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Por favor, insira um valor válido.";
        return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
