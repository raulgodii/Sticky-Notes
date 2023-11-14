class Notes{
    notesArray = [];

    addNote(){
        let note = new Note(this.notesArray.length);
        this.notesArray.push(note);
        return note.id;
    }

    removeNote(id){
        this.notesArray.splice(id, 1);
    }
}