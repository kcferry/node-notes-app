const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => 'Your notes... :)'

// Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.inverse('New Note Adedd!'))
    } else {
        console.log(chalk.redBright.inverse('Note title already excists!'))
    }

}

// Remove Note
const removeNote = (title) => {
    const notes = loadNotes()
    const newNotesArr = notes.filter((note) => {
        return note.title !== title
    })

    if(notes.length > newNotesArr.length) {
        console.log(chalk.greenBright.inverse('Note Removed!'))
        saveNotes(newNotesArr)
    }else {
        console.log(chalk.redBright.inverse('No Note Found!'))
    }
}


// Save Note
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


// Load Notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNote,
}

