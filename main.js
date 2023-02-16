function OpenMenu() {
    if(document.getElementById('left-menu').style.marginLeft == '0px') {
        document.getElementById('left-menu').style.marginLeft = '-13%';
    }
    else {
        document.getElementById('left-menu').style.marginLeft = '0px';
    }
}

let closed = true;

function OpenLeftMenu(){
    if (closed){
        document.getElementsByClassName('dropdown')[0].style.height = '250px';
        closed = false;
    }
    else {
        document.getElementsByClassName('dropdown')[0].style.height = '100%';
        closed = true;
    }
}