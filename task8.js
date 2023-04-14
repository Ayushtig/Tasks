var left1=document.querySelector("#left1");
var left2=document.querySelector("#left2");
var right1=document.querySelector("#right1");
var right2=document.querySelector("#right2");
var down=document.querySelector("#down");
var down2=document.querySelector("#down2");
var up=document.querySelector("#up");
var up2=document.querySelector("#up2");

down.addEventListener("click",function(){
    left2.style.marginTop="0%";
    left1.style.marginTop="48.5%";
    right2.style.marginTop="0%";
    right1.style.marginTop="-48.5%";
    setTimeout(function(){
    left2.style.marginTop="-48.5%";
    left1.style.marginTop="0%";
    right2.style.marginTop="48.5%";
    right1.style.marginTop="0%";
    },3000)
})
up.addEventListener("click",function(){
    left2.style.marginTop="0%";
    left1.style.marginTop="48.5%";
    right2.style.marginTop="0%";
    right1.style.marginTop="-48.5%";
    setTimeout(function(){
        left2.style.marginTop="-48.5%";
        left1.style.marginTop="0%";
        right2.style.marginTop="48.5%";
        right1.style.marginTop="0%";
        },3000)
})

