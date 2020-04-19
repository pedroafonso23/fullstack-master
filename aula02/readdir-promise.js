const fs = require('fs')

// fs.readdir('/', (err, files) => {console.log(files)})

const readDir = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            reject(err)
        } else {
            resolve(console.log(files))
        }
    })
})

const showFiles = async () => {
    try {
        const files = await readDir('/')
        console.log('Pasta lida')
    } catch(err) {
        console.log('ERRO FATAL', err)
    }
}

showFiles()