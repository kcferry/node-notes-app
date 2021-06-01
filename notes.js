const fs = require('fs')
const chalk = require('chalk');


// Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title) 

    if(!duplicateNote) {
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
    const newNotesArr = notes.filter((note) => note.title !== title)
    

    if(notes.length > newNotesArr.length) {
        console.log(chalk.greenBright.inverse('Note Removed!'))
        saveNotes(newNotesArr)
    }else {
        console.log(chalk.redBright.inverse('No Note Found!'))
    }
}

// List Notes

const listNotes = () => {
    console.log(chalk.inverse.green('Your Notes'))
    const notes = loadNotes()
    notes.forEach((note) => console.log(note.title))
}

// Read Note 

const readNote = (title) => {
    const notes = loadNotes()
    const searchedNote = notes.find((note) => note.title === title)

    if(searchedNote) {
        console.log(chalk.inverse(searchedNote.title))
        console.log(searchedNote.body)
    } else {
        console.log(chalk.inverse.red('Error: No Note Found'))
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
    addNote,
    removeNote,
    listNotes,
    readNote,
}

