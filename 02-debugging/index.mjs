import http  from 'http'

// Error.stackTraceLimit = 100

// function selfCaller(count =0 ) {
//     console.count('selfCaller')
//     if(count >= 1000) throw new Error('DEU RUIM')

//     return selfCaller(count += 1)
// }

// selfCaller()

function netSalary({ discount, salary }) {
    const percent = (discount / 100)
    const cost = salary * percent
    const result = salary - cost

    return result
}

http.createServer((req, res) => {
    const url = req.url.replace('/', '')
    const params = new URLSearchParams(url)
    const data = Object.fromEntries(params)
    const result = netSalary(data)
    // debugger
    res.end(`O seu salario final é ${result}`)
}).listen(3000, () => console.log('app running at 3000'))