class View{
    move; // Controlls if the note is moving

    offsetX; // X coordinate relative of the header of the note
    offsetY; // Y coordinate relative of the header of the note

    id; // ID to know  what note we are moving

    marginTop;
    marginLeft;

    constructor(view = 'darkView'){
        this.view = view;
        this.move = false;

        this.marginTop = 120;
        this.marginLeft = 40;
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

        // Change View Button
        let changeViews = this.createChangeViews();
        main.appendChild(changeViews);

        // Button to create Notes
        const addNote = document.createElement("img");
        addNote.src = "img/addNote.svg";
        addNote.className = "addNote";
        addNote.id = "addNote";
        main.appendChild(addNote);

        document.body.appendChild(main);

        // Asign default view to the checkbox
        let checkbox = document.getElementById('theme-checkbox');
        if(this.view == 'darkView') checkbox.checked=true;
    }

    showFooter(){
        // Footer Element
        const footer = document.createElement("footer");

        // p
        const p = document.createElement("p");
        p.textContent = "© Raúl González Díaz | 2023";
        footer.appendChild(p);

        document.body.appendChild(footer);
    }

    createChangeViews(){
        // Create the main div element
        var themeSwitchDiv = document.createElement("div");
        themeSwitchDiv.className = "theme-switch";

        // Create the checkbox input element
        var checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.id = "theme-checkbox";

        // Create the label element
        var label = document.createElement("label");
        label.htmlFor = "theme-checkbox";

        // Create the internal div within the label
        var labelDiv = document.createElement("div");

        // Create the first span inside the label
        var span1 = document.createElement("span");

        // Create the first SVG inside the first span
        var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg1.setAttribute("viewBox", "0 0 24 24");
        svg1.setAttribute("fill", "currentColor");
        svg1.setAttribute("class", "w-6 h-6");

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("fill-rule", "evenodd");
        path1.setAttribute("d", "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z");
        path1.setAttribute("clip-rule", "evenodd");

        svg1.appendChild(path1);
        span1.appendChild(svg1);

        // Create the second span inside the label
        var span2 = document.createElement("span");

        // Create the second SVG inside the second span
        var svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg2.setAttribute("viewBox", "0 0 24 24");
        svg2.setAttribute("fill", "currentColor");
        svg2.setAttribute("class", "w-6 h-6");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z");

        svg2.appendChild(path2);
        span2.appendChild(svg2);

        // Add the elements to the document
        themeSwitchDiv.appendChild(checkboxInput);
        label.appendChild(labelDiv);
        label.appendChild(span1);
        label.appendChild(span2);
        themeSwitchDiv.appendChild(label);

        return themeSwitchDiv;
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

    showNote(id, title, text, creationDate){
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
        textarea1.textContent = title;

        // TEXTAREA 2
        const textarea2 = document.createElement("textarea");
        textarea2.className = "textArea textNote";
        textarea2.maxLength = "650";
        textarea2.placeholder = "Write here your note.";
        textarea2.textContent = text;

        // Add all elementes to the div
        div.appendChild(span);
        div.appendChild(textarea1);
        div.appendChild(textarea2);


        // Add al div to the main
        const main = document.getElementById("main");
        main.appendChild(div);

        // Add margin to the new note
        this.marginTop += 20;
        this.marginLeft += 20;
        div.style.marginTop = this.marginTop + "px";
        div.style.marginLeft = this.marginLeft + "px";

        this.limnitArea(textarea2);
        this.limnitArea(div);
    }

    // Limit the area of textArea
    limitTextArea(e){
        this.limnitArea(e.target);
    }

    limitArea(x){
        x.style.height = "";
        x.style.height = x.scrollHeight + "px";
        if (x.scrollHeight > x.clientHeight) {
            // Restrict entry if the height exceeds the limit.
            x.value = x.value.slice(0, -1);
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