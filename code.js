const myOpen = document.querySelector(".open");
const myClose = document.querySelector(".close");
const  myOpenlang = document.getElementById("openlangues");
const  myCloselang = document.getElementById("closelangues");
const myLangues = document.getElementById("meslangues");
const myMenu = document.querySelector(".menu");
const myOnscreen = document.getElementById("onscreens");
const myClosescreen = document.getElementById("offscreens");
const myModes = document.querySelector(".modes");
const myBody = document.querySelector(".body");
const mySun = document.getElementById("clair");
const myMoon = document.getElementById("sombre");
const myPenombre = document.getElementById("penombre");


myOpen.addEventListener("click", ()=>{
myMenu.style.display = "flex";
myLangues.style.display ="flex";
myOpenlang.style.display = "flex";
myCloselang.style.display = "flex";
myOpen.style.zIndex = "0";
myClose.style.zIndex = "1";
myOpen.style.opacity = "0";
myClose.style.opacity = "1";
});
myClose.addEventListener("click", ()=>{
    myMenu.style.display = "none";
    myLangues.style.display ="none";
    myOpenlang.style.display = "none";
    myCloselang.style.display = "none";
    myMenu.style.opacity = "1";
    myClose.style.zIndex = "0";
    myOpen.style.zIndex = "1";
    myClose.style.opacity = "0";
    myOpen.style.opacity = "1";
});
// 
myOpenlang.addEventListener("click", ()=>{
myLangues.style.display = "flex";
myLangues.style.zIndex ="1";
myOpenlang.style.zIndex = "-1";
myCloselang.style.zIndex = "1";
myLangues.style.opacity ="1";
});
myCloselang.addEventListener("click", ()=>{
    myLangues.style.display = "none";
    myLangues.style.zIndex ="-1";
    myOpenlang.style.zIndex = "1";
    myCloselang.style.zIndex = "-1";
    myLangues.style.opacity ="0";
});
// 
myOnscreen.addEventListener("click", ()=>{
    myModes.style.display = "flex";
    myModes.style.zIndex ="1";
    myOnscreen.style.zIndex = "-1";
    myClosescreen.style.zIndex = "1";
    myModes.style.opacity ="1";

});
myClosescreen.addEventListener("click", ()=>{
myModes.style.display = "none";
myModes.style.zIndex = "-1";
myOnscreen.style.zIndex = "1";
myClosescreen.style.zIndex = "-1";
myModes.style.opacity = "0";
});
// 
mySun.addEventListener("click", ()=>{
myBody.style.background = "white";
myBody.style.color = "black";
});
myMoon.addEventListener("click", ()=>{
myBody.style.background = "black";
myBody.style.color = "white";
});
myPenombre.addEventListener("click", ()=>{
myBody.style.background = "rgba(20, 20, 20, 0.4)";
myBody.style.color = "black";
});


