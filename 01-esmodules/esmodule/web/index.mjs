import CurrencyManager from "../shared/currencyManager.mjs"

function updateOutput(value) {
    const output = document.getElementById("output")
    output.innerText = value
}

window.inputMonitor = (value) => updateOutput(CurrencyManager.format(value))