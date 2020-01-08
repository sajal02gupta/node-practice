const chalk= require('chalk')
const yargs= require('yargs')

const notes= require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
        describe: 'Note body',
        demandOption: true,
        type:'string'
        }
    },
    handler: function(argv){
        // console.log('Title: '+argv.title)
        // console.log('body: '+argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note!',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note!',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)

// const msg= chalk.bgBlue.bold('Success!')
// console.log(msg)
// const cmd= process.argv[2]
// if(cmd==='add'){
//     console.log(chalk.green.bold('Adding Note!'))
// }else if(cmd==='remove'){
//     console.log(chalk.red.bold('Removing Note!'))
// }




// const validator= require('validator')
// const note= require('./notes')

// var value= note();

// console.log(validator.isEmail('example.com'));

// console.log(validator.isURL('https//mead.io'))


// const add= require('./utils.js')
// const sum= add(2,3)
// console.log(value);
// console.log(sum)
