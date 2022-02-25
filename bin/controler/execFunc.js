
const {exec} = require('child_process')
const {createFile} = require('../src/createfile')
function execPwdToCreateDockerFiles() {
    
exec('pwd', async (error, stdout, stderr) => {
    if(error) {
        return console.log(error, 'from exec')
    }
    if(stderr) {
        return console.log(stderr, 'from exec')
    }
    
    await createFile(stdout.trim(), 'Dockerfile')
})

}
module.exports = execPwdToCreateDockerFiles