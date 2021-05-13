const text = "N,.ã_o)d-á"
const regex = /([^A-zÀ-ÿ]|_)/g
const result = text.replace(regex, '')
console.log({ result })