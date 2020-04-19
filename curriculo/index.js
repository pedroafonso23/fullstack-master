const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('home')
})

app.listen(3000, (err) => {
    if (err) {
        console.log('It was not possible to initiate the website.')
    } else {
        console.log('Server running...')
    }
})