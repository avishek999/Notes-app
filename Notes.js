const fs = require('fs')

// systen file
const loadNotes  = () => {
   try {
    const dataBuffer = fs.readFileSync("Notes.json");
   const dataJson = dataBuffer.toString()
    const notesData = JSON.parse(dataJson);
     return notesData;
   } catch (error) {
    console.log(`Error loading Notes: ${error}`);
     return []
   }

}

const saveNotes = (notes) =>{
    const  dataJSON = JSON.stringify(notes)
    fs.writeFileSync("Notes.json", dataJSON)
}
const getNotes = ()=>{
    const notes= loadNotes()
    console.log(notes)
}

// all the operation
const addNotes =(title,body) =>{
    const notes= loadNotes()
    const duplicateNotes = notes.find((note)=> note.title === title)

    if(!duplicateNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("note Successfully saved")
     } else{
          console.log( "Note with this Title already exists!")
        }
    }

const removeNotes =(title)=>{
    const notes = loadNotes()
    const filterNotes  = notes.filter((notes)=> notes.title!== title)
  
    if(notes.length ===filterNotes.length ){
        console.log('No such Note found')
    }else{
        saveNotes(filterNotes)
        console.log('Note SuccessFully deleted!!')

    }

}

const listNotes=()=>{
    const notes = loadNotes()
    console.log("Your ALL Notes")
    
    notes.forEach((note)=>{
        console.log(note.title +" : "+ note.body )
    })
}

const readnotes=(title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title )

    if(note){
        console.log(note.title, note.body);
    }
    else{
     console.log("no note Found")
    }
};

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readnotes:readnotes
}