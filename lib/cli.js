#! /usr/bin/env node
/* eslint-disable no-console */

const program = require('commander')
const fs = require('fs')
const path = require('path')

const getKebabCase = require('./getKebabCase.js')
const getLowerCase = require('./getLowerCase.js')
const getScreamingSnakeCase = require('./getScreamingSnakeCase.js')
const getSnakeCase = require('./getSnakeCase.js')
const getStartCase = require('./getStartCase.js')
const getTrainCase = require('./getTrainCase.js')
const getUpperCase = require('./getUpperCase.js')

function getVersion() {
    const pjsonPath = path.join(__dirname, '..', 'package.json')
    // Synchronous operations are okay in CLI tools,
    // as per no-sync rule documentation
    // eslint-disable-next-line no-sync
    const pjsonContent = fs.readFileSync(pjsonPath, 'utf8')
    return JSON.parse(pjsonContent).version
}

program
    .version(getVersion(), '-v, --version')
    .option(
        '-l, --language [string]',
        'set the language. defaults to "en"',
        'en'
    )

program
    .command('kebab-case <string>')
    .alias('keb')
    .description('convert a string to kebab case')
    .action(string => {
        console.log(getKebabCase(string))
    })

program
    .command('screaming-snake-case <string>')
    .alias('scr')
    .description('convert a string to screaming snake case')
    .action(string => {
        console.log(getScreamingSnakeCase(string))
    })

program
    .command('snake-case <string>')
    .alias('sna')
    .description('convert a string to snake case')
    .action(string => {
        console.log(getSnakeCase(string))
    })

program
    .command('start-case <string>')
    .alias('sta')
    .description('convert a string to start case')
    .action(string => {
        console.log(getStartCase(string))
    })

program
    .command('train-case <string>')
    .alias('tra')
    .description('convert a string to train case')
    .action(string => {
        console.log(getTrainCase(string))
    })

program
    .command('upper-case <string>')
    .alias('upp')
    .description('convert a string to upper case')
    .action(string => {
        console.log(getUpperCase(string))
    })

program
    .command('lower-case <string>')
    .alias('low')
    .description('convert a string to lower case')
    .action(string => {
        console.log(getLowerCase(string))
    })

program.parse(process.argv)
