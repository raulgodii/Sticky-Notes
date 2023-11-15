window.onload = () => {
    // Read Cookie to load the last View
    cookie = new Cookie();
    defaultView = "";
    if(cookie.readCookie("view")==null){
        cookie.setCookie("view", "darkView");
        defaultView = "darkView";
    }else{
        defaultView = cookie.readCookie("view");
    }

    // Creation of the View
    view = new View(defaultView);
    // Show Header - Main - Footer
    view.showHeader();
    view.showMain();
    view.showFooter();

    // Change Views Button
    document.getElementById('theme-checkbox').addEventListener("click", ()=>{
        view.changeView();
        cookie.setCookie("view", view.view);
    });

    // Create class notes
    notes = new Notes();

    // Load previous notes
    if(window.localStorage.getItem("notes")){
        notesStorage = JSON.parse(window.localStorage.getItem("notes"));
        notesStorage.forEach(note => {
            notes.addNote(note.id, note.title, note.text, note.creationDate);
            createNote(note.id);
        });
    }

    // Add Note - Button Event 'click'
    document.getElementById('addNote').addEventListener("click", () => {
        let id = notes.addNote();
        createNote(id);
    });

    function createNote(id){
        view.showNote(id, notes.notesArray[notes.findIndexFromId(id)].title, notes.notesArray[notes.findIndexFromId(id)].text, notes.notesArray[notes.findIndexFromId(id)].creationDate);

        let newNote = document.getElementById(id);
        // TextArea Event - Limit the area for writing
        newNote.addEventListener('input', (e) => view.limitTextArea(e));

        let offsetLeft = newNote.offsetLeft;
        let offsetTop = newNote.offsetTop;

        // Moving Event - Allows to move and drag the note
        const span = newNote.querySelector(".headerNote");
        span.addEventListener('mousedown', (e) => view.moveNote(e, id, offsetLeft, offsetTop));
        span.addEventListener('mouseup', (e) => view.stopNote());

        // TRASHBUTTON Event - Remove the note when button is clicked
        newNote.querySelector(".trashButton").addEventListener('click', (e) => {
            notes.removeNote(id); // Remove from the arrayList
            view.removeNote(id); // Renive from the view
        });

        // Save Note Event - Save and update the note to the localStorage per each keydown
        newNote.addEventListener("keydown", (e) => notes.updateLocalStorage(id, document.querySelector("#" + id + " .titleNote").value, document.querySelector("#" + id + " .textNote").value));
    }

    // COORDINATES - Establish a position to the note if "move" is true
    document.addEventListener("mousemove", (e) => view.moving(e));
}