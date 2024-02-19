

login=()=>{
    let Username=unam.value
    let Password=pswd.value
    if(!Username || !Password){
        alert("Invalid Credentails!! Login Failed")
    }
    else{
        localStorage.setItem("Username",Username)
        console.log(`Username:${Username},Password:${Password}`)
        window.location="dashboard.html"
    }
}



