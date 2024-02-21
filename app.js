// const chalk  = require('chalk')
const fs  = require('fs')
const yargs  = require('yargs')
const {getNotes, addNotes,removeNotes,listNotes,readnotes} = require('./Notes.js')


yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'add a note ',
    builder:{
        title:{
            describe:'note title',
            demandOption : true,
            type: 'string',
        },
        body:{
            describe: 'Note Body',
            demandOption:true,
            type:'string',
        },
    },
    handler: (argv)=>{
        addNotes(argv.title, argv.body)
    }
}),

yargs.command({
    command: 'remove',
    describe: 'Remove a note ',
    builder:{
        title:{
            describe:'note title',
            demandOption : true,
            type: 'string',
        },
    },
    handler: (argv)=>{
        removeNotes(argv.title)
    },
}),
yargs.command({
    
    command: 'list',
    describe: 'list a note ',
 
    handler: ()=>{
        listNotes()
    },
}),
yargs.command({

    command: 'read',
    describe: 'read a note ',
    builder:{
        title:{
            describe:'note title',
            demandOption : true,
            type: 'string',
        },
    },
    handler: (argv)=>{
        readnotes(argv.title )
    },

}),

yargs.parse();