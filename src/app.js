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
    arrayButton = document.getElementById("loadArray"),
    linksArray = [homeLink, aboutLink, contactLink],
    arrayList = document.getElementById("arrayList"),
    arrayItems = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
    textNode;

var App = {
    handleClick: function (event) {
        event.preventDefault();
        this.pushHistory(event);
        this.changeContent(event);
        event.stopPropagation();
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
    pushHistory: function(event) {
        var data = event.target.getAttribute('data-name'),
            url = data + ".html";
        history.pushState(data, null, url);
    },
    changeHistory: function(event) {
        var loadContent = event.state;
        for (var i = 0 ; i < articles.length ; i++){
            articles[i].style.display = "none";
        }
        if (loadContent == null){
            homeContent.style.display = "block";
        } else {
            switch (loadContent){
                case "index":
                    homeContent.style.display = "block";
                    break;
                case "about":
                    aboutContent.style.display = "block";
                    break;
                case "contact":
                    contactContent.style.display = "block";
                    break;
            }
        }
    }
};
for (var i = 0; i<linksArray.length; i++) {
    linksArray[i].addEventListener("click", function (event) {
        App.handleClick(event);
    });
}
arrayButton.addEventListener("click", function() {
    for (var i = 0; i < arrayItems.length; i++) {
        var arrayListItem = document.createElement("LI");
        textNode = document.createTextNode(arrayItems[i]);
        arrayListItem.appendChild(textNode);
        arrayList.appendChild(arrayListItem);
    }
});
window.addEventListener("popstate", function(event){
    App.changeHistory(event);
});