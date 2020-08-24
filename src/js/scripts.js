((d, w) => {
    
    // select the static HTML element that all this DOM manipulation will be contained to
    let widget = d.getElementById("medium-widget");

    const mainImgObserver = new MutationObserver(() => {
        // if these elements have been rendered in the DOM
        if (widget.getElementsByClassName("medium-widget-article__image").length > 0) {
            // get the <a> link elements from the DOM, then map to get the child <img> elements
            let imgElements = Array.from(widget.getElementsByClassName("medium-widget-article__image"))
                .map((a) => a.firstElementChild);

            // get the article description elements, then map to get the textConent of those elements
            let texts = Array.from(widget.getElementsByClassName("medium-widget-article__description"))
                .map((val) => val.textContent);

            // loop over the imgElements and set the alt text to the text from the description elements
            imgElements.forEach((img, i) => {
                img.alt = texts[i];
            })

            // stop observing
            mainImgObserver.disconnect();
        }
    })

    const avatarObserver = new MutationObserver(() => {
        if (widget.getElementsByClassName("medium-widget-article__avatar-picture").length > 0) {
            let imgElement = Array.from(widget.getElementsByClassName("medium-widget-article__avatar-picture"));

            // since the avatar is a picture of the author and the authors name is adjacent to the avatar img, you can just set alt=""
            imgElement.forEach((img) => {
                img.alt = "";
            })

            // stop observing
            avatarObserver.disconnect();
        }
    })

    let options = {
        attributes: false, 
        childList: true, 
        characterData: false, 
        subtree:true
    }

    // initiate the observations
    mainImgObserver.observe(widget, options);
    avatarObserver.observe(widget, options);
    
    })(document, window);