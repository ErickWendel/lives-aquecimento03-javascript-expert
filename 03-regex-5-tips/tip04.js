const heroes = `NickName: Chapolin, Power: Velocidade
Nick: Batman, Power: Money
`
const exp = /(NickName|Nick):\s(?<nickname>\w+),\sPower:\s(?<power>\w.*)/gm

const finalString = heroes.replace(exp, (substring, _, nickname, power, ...args) => {
    return `${nickname} ${power}`
})

console.log(finalString)

const resultSingleLine = heroes.replace(exp, '$<nickname> $<power>')
console.log(resultSingleLine)