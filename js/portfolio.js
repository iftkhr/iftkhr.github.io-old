// top navigation bar on mobile
function topNavOpen(){
    document.getElementById("top").classList.remove("hide");
    document.getElementById("dots").classList.add("hide");
    document.getElementById("cross").classList.remove("hide");
}
function topNavClose(){
    document.getElementById("top").classList.add("hide");
    document.getElementById("dots").classList.remove("hide");
    document.getElementById("cross").classList.add("hide");
}

// go to top arrow
function upArrowHide(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").classList.remove("hide");
    }
    else{
        document.getElementById("up").classList.add("hide");
    }
}
function upArrow(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function menuHide(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").classList.add("hide");
        document.getElementById("dots").classList.remove("hide");
        document.getElementById("cross").classList.add("hide");
    }
}
