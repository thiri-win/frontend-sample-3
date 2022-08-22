const up=document.querySelector("#up");
const navbar=document.querySelector(".navbar");

up.onclick=()=>window.scrollTo({top: 0, left: 0, behavior: "smooth"});

window.onscroll=()=> {
    window.scrollY>=500 ? up.style.opacity=1 : up.style.opacity=0;
    window.scrollY>=600 ? navbar.classList.add("fixed-top"): navbar.classList.remove("fixed-top");
}