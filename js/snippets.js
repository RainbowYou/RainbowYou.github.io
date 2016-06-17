window.onload = function() {
    var indeces = getElementsByClassName("index-l1", "a");

    var length = indeces.length;
    for (var i = 0; i < length; i++) {
        indeces[i].onclick = function() {
          
        }
    }
}

function getElementsByClassName(className, tagName) {
    var es = document.getElementsByTagName(tagName);
    var eArray = new Array();

    var length = es.length;
    for (var i = 0; i < length; i++) {
        if (es[i].className == className)
            eArray.push(es[i]);
    }

    return eArray;
}
