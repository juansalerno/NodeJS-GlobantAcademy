const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = title => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title);

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const readNote = title => {
    const notes = loadNotes();
    const searchedNote = notes.find(note => note.title === title);

    if(!searchedNote) {
        console.log(chalk.red.bold('Error! Note not found.'))
    } else {
        console.log(chalk.blue.bold(searchedNote.title))
        console.log(searchedNote.body);
    }

}


const listNotes = () => {
    console.log(chalk.blue.bold('Your notes:'))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    });
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}