class Notes{
    notesArray = [];

    addNote(id=null, title="", text="", creationDate=null){
        let note;
        if(id==null){
            let date = new Date();
            creationDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
            note = new Note("note" + this.findLastId(), title, text, creationDate);
        } else{
            note = new Note(id, title, text, creationDate);
        }
        
        this.notesArray.push(note);
        return note.id;
    }

    removeNote(id){

        let i = this.findIndexFromId(id);

        if(i!=-1){
            this.notesArray.splice(i, 1);
        }

        window.localStorage.setItem("notes", JSON.stringify(this.notesArray));
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