
let filterproducts=document.querySelector("#filter-products");
let allfunctionality=document.querySelector("#all-functionality");
let allproducts=document.querySelector("#all-products");
let url="https://63c8ed6a904f040a9652b740.mockapi.io/product"
let maindata=[];

fetch(url).then((res)=>{
    return res.json()
}).then((res)=>{
    
    maindata=res;
    displayproduct(maindata)
})

let cartProducts = JSON.parse(localStorage.getItem("cartproduct")) || []
let isLogedIn = JSON.parse(localStorage.getItem('isLogedIn'))

function displayproduct(data){
    allproducts.innerHTML=null;

    data.forEach((ele,index)=>{
        let div=document.createElement("div");
        div.setAttribute("class", "cart-styling-class")
        let avatar=document.createElement("img");
        let title=document.createElement("p");
        let rating=document.createElement("p");
        let price=document.createElement("p");

        avatar.src=ele.avatar;
        title.innerText=ele.title;
        rating.innerText=`Rating ${ele.rating%4} ⭐`;
        price.innerText=`Price $${ele.price}`;

        let addbtn = document.createElement("button")
        addbtn.innerText = "ADD TO CART"
        addbtn.addEventListener("click",(event)=>{
            if(isLogedIn==1){
                let samehai = false
                cartProducts.forEach(nag => {
                    if(nag.id==ele.id){
                        samehai = true
                        return
                    }
                })
                if(samehai==true){
                    alert("Already added into cart!!")
                }else{
                    ele.quantity=1;
                    cartProducts.push(ele)
                    localStorage.setItem("cartproduct",JSON.stringify(cartProducts));
                    alert("Successfuly Added into cart")
                }
            }else{
                location.href = "./login.html"
                
            }
        })
        div.append(avatar,title,rating,price,addbtn);
        allproducts.append(div);
        
    })
}


