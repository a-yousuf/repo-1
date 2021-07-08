function removeli1() {
    var elem = document.getElementById('li1')
    elem.parentNode.removeChild(elem);
    return false;
}
function removeli2() {
    var elem = document.getElementById('li2')
    elem.parentNode.removeChild(elem);
    return false;
}
function removeli3() {
    var elem = document.getElementById('li3')
    elem.parentNode.removeChild(elem);
    return false;
}
function removeli4() {
    var elem = document.getElementById('li4')
    elem.parentNode.removeChild(elem);
    return false;
}
function removeg() {
    var elem = document.getElementById('g')
    elem.parentNode.removeChild(elem);
    return false;
}
function date(){
    new Date();
    console.log(Date());
}

function add(){
        var item = prompt("Enter item: ");
        console.log(item);
        return false;
}