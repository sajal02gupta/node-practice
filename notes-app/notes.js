const fs = require('fs')
const chalk = require('chalk')
var getNotes= function(){
    return "Your notes..."
}

const addNote = function(title, body) { 
    const notes= loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title ===title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes) 
    console.log('New note added!')   
    }else{
        console.log('note title taken')
    }
    
}

const saveNotes = function(notes) {
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function(title){
    var flag= 1
    const notes= loadNotes()
    notes.forEach(function(element) {
        if(element.title===title){
            notes.pop(element)
            saveNotes(notes)
            console.log(chalk.bgGreen("Note removed"))
            flag=0
        }
    })
    if(flag==1){
        console.log(chalk.bgRed.bold('Note not present'))
    }
};

const listNotes = ()=>{
    const notes= loadNotes()
    console.log(chalk.inverse.bold('Your notes..'))

    notes.forEach(note =>{
        console.log(note.title)
    })
}

const readNote = (title) =>{
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    console.log('Title is '+chalk.blue.bold(findNote.title))
    console.log('body is '+findNote.body)
}
    
module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}