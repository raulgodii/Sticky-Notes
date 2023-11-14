class View{
    move; // Controlls if the note is moving

    offsetX; // X coordinate relative of the header of the note
    offsetY; // Y coordinate relative of the header of the note

    id; // ID to know  what note we are moving

    constructor(view = 'darkView'){
        this.view = view;
        this.move = false;

    }

    showHeader(){
        // Set Class view mode in Body element
        document.body.className = this.view;

        // Header Element
        const header = document.createElement('header');

        // Logo/Vector Note 
        const vectorNote = document.createElement('img');
        if(this.view =='darkView'){
            vectorNote.src = "img/vectorNoteWhite.svg";
        } else{
            vectorNote.src = "img/vectorNoteBlack.svg";
        }
        vectorNote.className = 'vectorNote';
        header.appendChild(vectorNote);

        // Title
        const title = document.createElement('h1');
        title.textContent = "Sticky Notes"
        header.appendChild(title);
        
        
        document.body.appendChild(header);
    }

    showMain(){
        // Main Element
        const main = document.createElement('main');
        main.id = "main";

        // Button to change Views
        const buttonViews = document.createElement('button');
        buttonViews.className = 'buttonViews';
        buttonViews.textContent = 'Change View';
        buttonViews.id = 'changeViews';
        main.appendChild(buttonViews);

        // Button to create Notes
        const addNote = document.createElement("img");
        addNote.src = "img/addNote.svg";
        addNote.className = "addNote";
        addNote.id = "addNote";
        main.appendChild(addNote);

        document.body.appendChild(main);
    }

    changeView(){
        const vectorNote = document.querySelector('.vectorNote');
        if(this.view == 'darkView'){
            this.view = 'lightView';
            vectorNote.src = "img/vectorNoteBlack.svg";
        } else if(this.view == 'lightView'){
            this.view = 'darkView';
            vectorNote.src = "img/vectorNoteWhite.svg";
        }
        
        document.body.className = this.view;
        return this.view;
    }

    showNote(id, creationDate){
        // DIV
        const div = document.createElement("div");
        div.className="note";
        div.setAttribute("oninput", 'this.style.height = "";this.style.height = this.scrollHeight + "px"');
        div.id = id;
        

        // SPAN
        const span = document.createElement("span");
        span.className = "headerNote";

        // P - Creation date of the note
        const p = document.createElement("p");
        p.className = "creationDate";
        p.textContent = creationDate;
        span.appendChild(p); // Add p to the span

        // IMG
        const img = document.createElement("img");
        img.className = "trashButton";
        img.src = "img/trashButton.svg";
        img.alt = "Delete Note";
        span.appendChild(img); // Add img to the span

        // TEXTAREA 1
        const textarea1 = document.createElement("textarea");
        textarea1.className = "textArea titleNote";
        textarea1.placeholder = "Title";

        // TEXTAREA 2
        const textarea2 = document.createElement("textarea");
        textarea2.className = "textArea textNote";
        textarea2.maxLength = "650";
        textarea2.placeholder = "Write here your note.";

        // Add all elementes to the div
        div.appendChild(span);
        div.appendChild(textarea1);
        div.appendChild(textarea2);


        // Add al div to the main
        const main = document.getElementById("main");
        main.appendChild(div);
    }

    // Limit the area of textArea
    limitTextArea(e){
        e.target.style.height = "";
        e.target.style.height = e.target.scrollHeight + "px";
        if (e.target.scrollHeight > e.target.clientHeight) {
            // Restrict entry if the height exceeds the limit.
            e.target.value = e.target.value.slice(0, -1);
        }
    }

    // Move the note
    moveNote(e, id, offsetLeft, offsetTop){
        if (e.target.tagName.toLowerCase() === 'img') {
            return;
        }
        
        this.id = id;
        this.move = true;

        this.offsetX = e.offsetX+offsetLeft;
        this.offsetY = e.offsetY+offsetTop;
    }

    // Stops moving the note
    stopNote(){
        this.move = false;
    }

    // Capture and asign the note the coordinates of mousemove when move is true
    moving(e){
        let divNote = document.getElementById(this.id);

        if(this.move){
            divNote.style.top = e.clientY-this.offsetY + "px";
            divNote.style.left = e.clientX-this.offsetX + "px";
        }
    }

    // Remove or delete the note
    removeNote(id){
        document.getElementById(id).remove();
    }
}