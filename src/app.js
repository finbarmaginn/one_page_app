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
    articles = document.getElementsByTagName("article");

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
        if (thisid == "homeLink") {
            homeContent.style.display = "block";
        } else if (thisid == "aboutLink") {
            aboutContent.style.display = "block";
        }   else {
            contactContent.style.display = "block";
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
homeLink.addEventListener("click", function (event) {
    App.handleClick(event);
});
aboutLink.addEventListener("click", function (event) {
    App.handleClick(event);
});
contactLink.addEventListener("click", function (event) {
    App.handleClick(event);
});