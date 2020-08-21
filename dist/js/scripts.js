((d, w) => {
    // These functions wait until the medium-widget draws those sections then using DOM manipulation to add alt text to the images for accessibility purposes.
    const observerA = new MutationObserver(() => {
        if (d.getElementsByClassName("medium-widget-article__image").length > 0) {
            let imgParent = Array.from(d.getElementsByClassName("medium-widget-article__image")).map((img) => img.firstElementChild);
            let desc = Array.from(d.getElementsByClassName("medium-widget-article__description")).map((val) => val.textContent);

            imgParent.forEach((img, i) => {
                img.alt = desc[i];
            })
            observerA.disconnect();
        }
    })

    const observerB = new MutationObserver(() => {
        if (d.getElementsByClassName("medium-widget-article__avatar-picture").length > 0) {
            let imgParent = Array.from(d.getElementsByClassName("medium-widget-article__avatar-picture"));

            imgParent.forEach((img, i) => {
                img.alt = "";
            })
            observerB.disconnect();
        }
    })

    observerA.observe(d, {attributes: false, childList: true, characterData: false, subtree:true});
    observerB.observe(d, {attributes: false, childList: true, characterData: false, subtree:true});
    

    })(document, window); // and call it immediately