#! /usr/bin/env node
const execPwdToCreateDockerFiles = require('./controler/execFunc')
const yargs = require('yargs')
yargs.command({
    command: 'addDockerfile',
    describe: 'create dockerfile with ignore file in cur directory',
    handler: (argv) => {
        execPwdToCreateDockerFiles()
    }
})
yargs.parse()
