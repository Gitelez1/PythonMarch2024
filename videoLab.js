
var count = 2

function hide(element) {
    var removeUser1 = document.querySelector(removeUser1);
    var removeUser2 = document.querySelector(removeUser2);
    element.remove();
    var countElement = document.querySelector("#count")
    count--;
    countElement.innerText = count;
    console.log(count);
}

function change(element) {
    element.innerText = "Todd E";
}