const fs = require('fs').promises
async function createFile(path = "", fileName = "") {
    try {
        await fs.writeFile(`${path}/${fileName}`, '')
        await fs.writeFile(`${path}/.dockerignore`, '')
        console.log('Dockerfile is created ...')
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = { createFile }