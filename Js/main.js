let images = document.querySelectorAll(".gallery a");
let inner = document.querySelector(".inner");
let popup =document.querySelector(".popup");
let mainSliderImage = document.querySelector(".popup .inner img");
let closeBtn = document.querySelector(".popup .closeBtn");
let previous = document.querySelector(".popup .arrows .previous");
let next = document.querySelector(".popup .arrows .next");
let inputName=document.querySelector(".inputNameParent input");
let button = document.querySelector("button");
let gallery = document.querySelector(".gallery");
let headTitle = document.querySelector(".headTitle");
let headTag = document.querySelector("h1");


let changeableInput;


inputName.addEventListener("change",function(e){
    changeableInput = e.target.value;
    console.log(changeableInput);
})

button.addEventListener("click",function(){
   if(changeableInput !== undefined ){
        gallery.style.display="flex";
        headTitle.style.display = "none";
        headTag.style.display="flex";
        headTag.innerText+=` Wow you really have a name  ${changeableInput} `;
   }
   else{
       alert("Please enter your name")
   }
})


images.forEach((image)=>{
    image.addEventListener("click",function(e){
        e.preventDefault();
        doOpen();
        changeableSlider(this);
        // console.log(this);
        this.classList.add("showSlide");
    
    })
});
function doOpen(){
    popup.style.display ="flex";
}
function doClose(){
     popup.style.display ="none";
}
closeBtn.addEventListener("click",function(e){
   doClose();
})
document.addEventListener('keydown',function(e){
    if(e.key === "Escape"){
        doClose();
    }
})
function changeableSlider(item){
 let hrefLink = item.getAttribute("href");
 mainSliderImage.setAttribute("src",hrefLink);
}
next.addEventListener("click",function(e){
  let showSlide = document.querySelector(".showSlide");


   if(showSlide.nextElementSibling !== null){
         showSlide.nextElementSibling.classList.add("showSlide");
         changeableSlider(showSlide.nextElementSibling);
  }
  else
  {
      showSlide.parentElement.children[0].classList.add("showSlide");
    // changeableSlider(showSlide.parentElement.children[0]);
  changeableSlider(showSlide.parentElement.children[0]);
  }
     showSlide.classList.remove("showSlide");
//   console.log(showSlide.nextElementSibling);
  
 
})
previous.addEventListener("click",function(e){
  let showSlide = document.querySelector(".showSlide");
  let length = showSlide.parentElement.children.length;
  console.log(length);
   if(showSlide.previousElementSibling !== null){
         showSlide.previousElementSibling.classList.add("showSlide");
         changeableSlider(showSlide.previousElementSibling);
  }
  else{
      showSlide.parentElement.children[length-1].classList.add("showSlide");
   changeableSlider(showSlide.parentElement.children[length-1]);
   
  }
    showSlide.classList.remove("showSlide");
})

function keyPress (e) {
    if(e.key === "Escape") {
        doClose();
    }

    
}
document.onkeydown = checkKey;

function checkKey(e) {
     if (e.keyCode == '37') {
       let showSlide = document.querySelector(".showSlide");
  let length = showSlide.parentElement.children.length;
  console.log(length);
   if(showSlide.previousElementSibling !== null){
         showSlide.previousElementSibling.classList.add("showSlide");
         changeableSlider(showSlide.previousElementSibling);
  }
  else{
      showSlide.parentElement.children[length-1].classList.add("showSlide");
   changeableSlider(showSlide.parentElement.children[length-1]);
   
  }
    showSlide.classList.remove("showSlide");
    }
     if (e.keyCode == '39') {
      let showSlide = document.querySelector(".showSlide");


   if(showSlide.nextElementSibling !== null){
         showSlide.nextElementSibling.classList.add("showSlide");
         changeableSlider(showSlide.nextElementSibling);
  }
  else
  {
      showSlide.parentElement.children[0].classList.add("showSlide");
    // changeableSlider(showSlide.parentElement.children[0]);
  changeableSlider(showSlide.parentElement.children[0]);
  }
     showSlide.classList.remove("showSlide");
    }

}
