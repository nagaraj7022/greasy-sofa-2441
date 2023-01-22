let loginPageFormEL = document.getElementById("loginPageForm")

let allUserData = JSON.parse(localStorage.getItem("usersData")) || [] 
console.log(allUserData);
loginPageFormEL.addEventListener("submit", (event) => {
    event.preventDefault()

    let userHaiYaNhi = false
    for(let i=0; i<allUserData.length; i++){
        if(allUserData[i].email==loginPageFormEL.emailFromUser.value && allUserData[i].password==loginPageFormEL.passFromUser.value){
            userHaiYaNhi = true
            break
        }
    }
    // console.log()
    if(userHaiYaNhi==true){
        alert("Login Successfully !")
        localStorage.setItem("isLogedIn", 1)
        location.href = "./index.html"
    }else{
        alert("Wroung Credianital !")
        localStorage.removeItem("isLogedIn")
    }
})