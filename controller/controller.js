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
    document.getElementById('changeViews').addEventListener("click", ()=>{
        view.changeView();
        cookie.setCookie("view", view.view);
    });
}