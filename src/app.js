/**
 * Created by finba on 13/11/2015.
 */
"use strict";

var homeLink = document.getElementById("homeLink"),
    homeContent = document.getElementById("homeArticle"),
    aboutLink = document.getElementById("aboutLink"),
    aboutContent = document.getElementById("aboutArticle"),
    contactLink = document.getElementById("contactLink"),
    contactContent = document.getElementById("contactArticle"),
    articles = document.getElementsByTagName("article"),
    linksArray = [homeLink, aboutLink, contactLink];

var App = {
    handleClick: function (event) {
        this.ieDefaults(event);
        this.changeContent(event);
    },
    changeContent: function (event) {
        var thisid = event.target.id;
        for (var i = 0 ; i < articles.length ; i++){
            articles[i].style.display = "none";
        }
        switch (thisid){
            case "homeLink":
                homeContent.style.display = "block";
                break;
            case "aboutLink":
                aboutContent.style.display = "block";
                break;
            case "contactLink":
                contactContent.style.display = "block";
                break;
        }
    },
    ieDefaults: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
for (var i = 0; i<linksArray.length; i++) {
    linksArray[i].addEventListener("click", function (event) {
        App.handleClick(event);
    });
}