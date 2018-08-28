#! /usr/bin/env node
/* eslint-disable no-console */

const program = require('commander')

const getLowerCase = require('./getLowerCase.js')
const getUpperCase = require('./getUpperCase.js')

program
    .version('0.2.0', '-v, --version')
    .option(
        '-l, --language [string]',
        'set the language. defaults to "en"',
        'en'
    )

program
    .command('to-upper-case <string>')
    .alias('uc')
    .description('convert a string to upper case')
    .action(string => {
        console.log(getUpperCase(string))
    })

program
    .command('to-lower-case <string>')
    .alias('lc')
    .description('convert a string to lower case')
    .action(string => {
        console.log(getLowerCase(string))
    })

program.parse(process.argv)
console.log(program.language)
