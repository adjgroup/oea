let linkWorks;          // 버튼바>WORKS
let linkShop;           // 버튼바>SHOP
let linkAbout;          // 버튼바>ABOUT
let colseBtn;           // 닫기 버튼

window.onload = ()=>{
    linkWorks = document.querySelector(".web__button_bar>.works");
    linkShop = document.querySelector(".web__button_bar>.shop");
    linkAbout = document.querySelector(".web__button_bar>.about");
    colseBtn = document.querySelector(".close__icon");

    if(linkWorks != undefined) linkWorks.addEventListener("click", ()=>{ location.href="/" });
    // if(linkShop != undefined) linkShop.addEventListener("click", ()=>{ location.href="" });
    if(linkAbout != undefined) linkAbout.addEventListener("click", ()=>{ location.href="about" });
    if(colseBtn != undefined) colseBtn.addEventListener("click", ()=>{ location.href="/" });

    init();
}