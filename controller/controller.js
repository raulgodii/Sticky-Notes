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

    // Change Views Button
    document.getElementById('theme-checkbox').addEventListener("click", ()=>{
        view.changeView();
        cookie.setCookie("view", view.view);
    });

    // Create class notes
    notes = new Notes();

    // Add Note - Button Event 'click'
    document.getElementById('addNote').addEventListener("click", () => {
        let id = notes.addNote();
        view.showNote(id, notes.notesArray[id].creationDate);

        let newNote = document.getElementById(id);
        // Limit the area for writing
        newNote.addEventListener('input', (e) => view.limitTextArea(e));

        let offsetLeft = newNote.offsetLeft;
        let offsetTop = newNote.offsetTop;

        // Allows to move the note
        newNote.addEventListener('mousedown', (e) => view.moveNote(e, id, offsetLeft, offsetTop));
        newNote.addEventListener('mouseup', (e) => view.stopNote());

        // TRASHBUTTON - Remove the note when button is clicked
        newNote.querySelector(".trashButton").addEventListener('click', (e) => {
            notes.removeNote(id); // Remove from the arrayList
            view.removeNote(id); // Renive from the view
        });
    });

    // COORDINATES - Establish a position to the note if "move" is true
    document.addEventListener("mousemove", (e) => view.moving(e));
}