const chalk = require('chalk');
const yargs = require('yargs') // Parsing 
const getNotes = require('./notes')

// Customize yargs version
yargs.version('1.0.0') 



// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note ',
    handler: function() {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing out all the notes ',
    handler: function() {
        console.log('Listing the notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note ',
    handler: function() {
        console.log('Reading the note')
    }
})

// add, remove, read, ist
console.log(yargs.argv)