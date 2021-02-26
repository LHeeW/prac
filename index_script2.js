var slideIndex = 1;
var timer = null;
document.querySelectorAll('.pic-slides')[0].style.display = 'block';
document.querySelectorAll('.curr')[0].style.background = 'white';
var x = document.querySelectorAll('.pic-slides');
var dots = document.querySelectorAll('.curr');
setTimeout(showDiv,3000);
showDivs(slideIndex);

function plusDivs(n){
    clearTimeout(timer);
    showDiv(slideIndex += n);
}

function  currDiv(n){
    clearTimeout(timer);
    showDiv(slideIndex = n);
}

function showDiv(n){
    timer = setTimeout(showDiv,3000);
    if(n > x.length){ slideIndex = 1; }
    if(n<1){ slideIndex = x.length; }
    if(n === undefined){ n = slideIndex++; }
    for(var i=0; i<x.length; i++){
        x[i].style.display = "none";
        dots[i].style.background = "none";
    }
    if(slideIndex > x.length){ slideIndex = 1; }
    x[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].style.background = 'white';
    timer;
}