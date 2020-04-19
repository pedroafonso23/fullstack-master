// app.get('/', (req, res)) => {

// }

console.log(1)

setTimeout(() => {
    console.log('Hello in 2 seconds')

}, 2000)

console.log(2)
// processo muito pesado

let count = 0

let interval = setInterval(() => {
    console.log('Hello')
    count++
    if (count > 5) {
        clearInterval(interval)
    }
}, 1000)

let interval2 = setInterval(() => {
    console.log('Hello2')
    count++
    if (count > 15) {
        clearInterval(interval2)
    }
}, 500)

console.log(3)