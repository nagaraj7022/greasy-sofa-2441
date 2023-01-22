let cartDataEl = document.getElementById("cart-data")

let cartProduct = JSON.parse(localStorage.getItem("cartproduct")) || [];
console.log(cartProduct);

Display(cartProduct)
function Display(data){
    cartDataEl.innerHTML = ""
    data.forEach((element, index) => {
        let div = document.createElement("div")
    
        let img = document.createElement("img")
        img.src = element.avatar

        let title = document.createElement("h4")
        title.innerText = element.title
        let price = document.createElement("h4")
        price.innerText = element.price

        let del = document.createElement("button")
        del.innerText = "Remove"
        del.setAttribute("class", "delete-button")
        del.style.backgroundColor = "red"
        del.style.colorolor = "white"
        del.addEventListener("click", ()=> {
            data.splice(index,1)
            localStorage.setItem("cartproduct", JSON.stringify(data))
            cartProduct = JSON.parse(localStorage.getItem("cartproduct")) || []
            Display(cartProduct)
        })

        div.append(img,title,price,del)
        cartDataEl.append(div)
    })

}
