class Notes{
    notesArray = [];

    addNote(){
        let note = new Note(this.findLastId());
        this.notesArray.push(note);
        return note.id;
        
    }

    removeNote(id){

        let i = this.findIndexFromId(id);

        if(i!=-1) this.notesArray.splice(i, 1);
    }

    findLastId(){
        let length = this.notesArray.length;
        if(length != 0){
            return this.notesArray[length-1].id+1
        } else {
            return 0;
        }
    }

    findIndexFromId(id){
        let i;
        let find;
        for(i=0, find=false; find==false && i<this.notesArray.length; i++){
            if(this.notesArray[i].id == id){
                find = true;
            }
        }

        if(find) return i-1;
        else return -1;
    }

    updateLocalStorage(id, title, text){
        this.notesArray[this.findIndexFromId(id)].title = title;
        this.notesArray[this.findIndexFromId(id)].text = text;
        window.localStorage.setItem("notes", JSON.stringify(this.notesArray));
    }
}