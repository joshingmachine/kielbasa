#! /usr/bin/env node
/* eslint-disable no-console */

const program = require('commander')
const fs = require('fs')
const path = require('path')

const getCamelCase = require('./getCamelCase.js')
const getKebabCase = require('./getKebabCase.js')
const getLowerCase = require('./getLowerCase.js')
const getScreamingSnakeCase = require('./getScreamingSnakeCase.js')
const getSnakeCase = require('./getSnakeCase.js')
const getStartCase = require('./getStartCase.js')
const getTrainCase = require('./getTrainCase.js')
const getUpperCase = require('./getUpperCase.js')

let stdin = ''

function handleAction(string = '', performAction) {
    const input = stdin || string
    console.log(performAction(input))
}

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
    .command('camel-case [string]')
    .alias('cam')
    .description('convert a string to camel case')
    .action(string => {
        handleAction(string, getCamelCase)
    })

program
    .command('kebab-case [string]')
    .alias('keb')
    .description('convert a string to kebab case')
    .action(string => {
        handleAction(string, getKebabCase)
    })

program
    .command('lower-case [string]')
    .alias('low')
    .description('convert a string to lower case')
    .action(string => {
        handleAction(string, getLowerCase)
    })

program
    .command('screaming-snake-case [string]')
    .alias('scr')
    .description('convert a string to screaming snake case')
    .action(string => {
        handleAction(string, getScreamingSnakeCase)
    })

program
    .command('snake-case [string]')
    .alias('sna')
    .description('convert a string to snake case')
    .action(string => {
        handleAction(string, getSnakeCase)
    })

program
    .command('start-case [string]')
    .alias('sta')
    .description('convert a string to start case')
    .action(string => {
        handleAction(string, getStartCase)
    })

program
    .command('train-case [string]')
    .alias('tra')
    .description('convert a string to train case')
    .action(string => {
        handleAction(string, getTrainCase)
    })

program
    .command('upper-case [string]')
    .alias('upp')
    .description('convert a string to upper case')
    .action(string => {
        handleAction(string, getUpperCase)
    })

if (process.stdin.isTTY) {
    program.parse(process.argv)
} else {
    process.stdin.on('readable', function addChunkToStdin() {
        // Necessary for proper chunk reading
        // eslint-disable-next-line no-invalid-this
        const chunk = this.read()
        if (chunk !== null) {
            stdin += chunk
        }
    })

    process.stdin.on('end', () => {
        stdin = stdin.replace(/\n$/, '')
        program.parse(process.argv)
    })
}
