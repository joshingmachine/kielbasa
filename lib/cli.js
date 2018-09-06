#! /usr/bin/env node
/* eslint-disable no-console */

const program = require('commander')
const fs = require('fs')
const path = require('path')

const getKebabCase = require('./getKebabCase.js')
const getLowerCase = require('./getLowerCase.js')
const getStartCase = require('./getStartCase.js')
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
    .alias('kc')
    .description('convert a string to kebab case')
    .action(string => {
        console.log(getKebabCase(string))
    })

program
    .command('start-case <string>')
    .alias('sc')
    .description('convert a string to start case')
    .action(string => {
        console.log(getStartCase(string))
    })

program
    .command('upper-case <string>')
    .alias('uc')
    .description('convert a string to upper case')
    .action(string => {
        console.log(getUpperCase(string))
    })

program
    .command('lower-case <string>')
    .alias('lc')
    .description('convert a string to lower case')
    .action(string => {
        console.log(getLowerCase(string))
    })

program.parse(process.argv)
