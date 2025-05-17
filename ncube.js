
var Xcnt = 0;
var Ycnt = 0;
var rspace = document.getElementById('dispace');
var upside = document.getElementById('up');
var downside = document.getElementById('down');
var leftside = document.getElementById('leftbut');
var rightside = document.getElementById('rightbut');
function toggleup() {

    Xcnt -= 90;
    rspace.style.transform = `rotateX(${Xcnt}deg) rotateY(${Ycnt}deg)`;
    rspace.style.transition = "transform 1s ease-in-out";
    console.log("This is UP button clicked");

}
function toggledown() {


    Xcnt += 90;
    rspace.style.transform = `rotateX(${Xcnt}deg) rotateY(${Ycnt}deg)`;
    rspace.style.transition = "transform 1s ease-in-out";
    console.log("This is UP button clicked");

}

function toggleleft() {
    Ycnt += 90;
    rspace.style.transform = `rotateY(${Ycnt}deg) rotateX(${Xcnt}deg)`;
    rspace.style.transition = "transform 1s ease-in-out";
    console.log("This is left button clicked");
}

function toggleright() {
    Ycnt -= 90;
    rspace.style.transform = `rotateY(${Ycnt}deg) rotateX(${Xcnt}deg)`;
    rspace.style.transition = "transform 1s ease-in-out";
    console.log("This is right button clicked");
}

upside.addEventListener('click', toggleup);
downside.addEventListener('click', toggledown);
leftside.addEventListener('click', toggleleft);
rightside.addEventListener('click', toggleright);