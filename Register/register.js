function Register(event){
    event.preventDefault();

    // alert("Enter email or password")

    var name = document.getElementById("name").value;
    console.log(name,"name")
    var email =document.getElementById("email").value;
    console.log(email,"email")
    var password=document.getElementById("password").value;
    console.log(password,"password")

    if(!name || !email || !password){
       return alert("All Feilds Are Required")
    }
    // console.log("All Feilds are found")

    var userData={name:name, email:email, password:password}

    localStorage.setItem('users',JSON.stringify(userData))

}
