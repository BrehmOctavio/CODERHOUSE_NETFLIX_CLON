const form = document.querySelector(".div-login");

const logIn = (email, password) =>{
    if(email == "octaviobrehm@gmail.com" & password == "1234"){
        window.open("../html/profiles.html");
    }else{
        alert("Datos incorrectos");
    };
};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const {email, password} = e.target;
    logIn(email.value, password.value);
});