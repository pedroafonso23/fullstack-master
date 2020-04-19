const { readFile, writeFile } = require('./fs.promise')

// evitar que codigo cresca para frente, melhor crescer para baixo
// callback hell
// fs.readFile('temporizadores.js', (err, data) => {
//     fs.writeFile('temporizadores-copy.js', data, (err) => {
//         console.log('Arquivo copiado')
//     })
// })

// promises + async/await



/*
readFile('temporizadores.js')
    .then( data => writeFile('copia-promise.js', data) )
    .then( () => console.log('Arquivo copiado') )
    .catch( err => console.log(err) )
*/

// async/await
// try/catch eh o controle de erro
const copyFile = async () => {
    console.log('Hello async/await')
    try {
        const data = await readFile('temporizadores.js')
        await writeFile('copy-async-await.js', data)
        // console.log(String(data))
        console.log('Arquivo lido e escrito')
    } catch (err) {
        console.log('erro', err)
    }
}
copyFile().then( () => console.log('Fim do async/await'))
