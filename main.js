

const show=document.getElementById("show"),
       img=document.querySelectorAll('.img') ;

let counter=1;
function plusSlides(n) {
    counter += n;
    slidefun(counter);
}  
function currentSlide(n){
   counter = n;
   slidefun(counter);

}

function slidefun(n){
let i;
for(i=0;i<img.length;i++){
    img[i].classList.remove('active');

}
if(n>img.length){
    counter=1;
}
if(n<1){
    counter=img.length;
}
img[counter-1].classList.add('active');
show.src=img[counter-1].src;
}


