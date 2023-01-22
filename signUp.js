let signUpFormHai = document.getElementById("signUpFormHai")

let allUserData = JSON.parse(localStorage.getItem("usersData")) || [];

signUpFormHai.addEventListener("submit", (event)=> {
    event.preventDefault()
    let userHaiYaNhi = false
    for(let i=0; i<allUserData.length; i++){
        if(allUserData[0].email==signUpFormHai.emailInput.value){
            userHaiYaNhi = true
            break
        }
    }
    if(userHaiYaNhi==true){
        alert("Already have account . Please login directly !")
    }else{
        let obj = {
            firstName : signUpFormHai.fnameInput.value,
            lastName : signUpFormHai.lnameInput.value,
            phoneNumber : signUpFormHai.phoneNumberInput.value,
            email : signUpFormHai.emailInput.value,
            password : signUpFormHai.passInput.value,
            zipCode : signUpFormHai.zipCodeInput.value,
        }
        allUserData.push(obj)
        localStorage.setItem("usersData", JSON.stringify(allUserData))
        allUserData = JSON.parse(localStorage.getItem("usersData")) || []
        console.log(allUserData);
        alert("Your account Succesfully created. Please Sign In")
    }
})