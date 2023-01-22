let signindiv=document.querySelector(".profileSection1");
signindiv.addEventListener("click",(event)=>{
    window.location.href="./login.html";
})
let cartPageGo=document.querySelector(".profileSection2");
cartPageGo.addEventListener("click",(event)=>{
    window.location.href="./cart.html";
})


document.getElementById("productsTab").addEventListener("click", ()=> {
    location.href ="./products.html"
})
document.getElementById("logo--image").addEventListener("click", ()=> {
    location.href ="./index.html"
})

