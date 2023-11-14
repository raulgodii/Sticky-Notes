class View{
    constructor(view = 'darkView'){
        this.view = view;
    }

    showHeader(){
        // Set Class view mode in Body element
        document.body.className = this.view;

        // Header Element
        const header = document.createElement('header');

        // Logo Note 
        const vectorNote = document.createElement('img');
        if(this.view =='darkView'){
            vectorNote.src = "img/vectorNoteWhite.svg";
        } else{
            vectorNote.src = "img/vectorNoteBlack.svg";
        }
        
        vectorNote.className = 'vectorNote';

        // Title
        const title = document.createElement('h1');
        title.textContent = "Sticky Notes"

        header.appendChild(vectorNote);
        header.appendChild(title);
        document.body.appendChild(header);
    }

    showMain(){
        // Main Element
        const main = document.createElement('main');

        // Button to change Views
        const buttonViews = document.createElement('button');
        buttonViews.className = 'buttonViews';
        buttonViews.textContent = 'Change View';
        buttonViews.id = 'changeViews';
        main.appendChild(buttonViews);

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

    changeVectorNote(){
        
    }
}