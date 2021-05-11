// import CurrencyManager from "../shared/currencyManager.mjs"
import CurrencyManager from "shared/currencyManager"

// aqui é o exemplo para fazer import dinâmico
import { join } from 'path'
const { pathname } = new URL(import.meta.url)
const mymodule = await import(join(pathname, './../../shared/currencyManager.mjs'))
console.log('mymodule', mymodule)
// </>

async function updateOutput(value) {
    console.log(value)
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
console.log('typing...')
input.addListener("data", inputMonitor)