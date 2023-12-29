var emailNameInput = document.getElementById('EmailName');
var passNameInput = document.getElementById('PasswordName');
var signNameInput = document.getElementById('SignUpName');
var signEmailInput = document.getElementById('SignUpEmail');
var signPassInput = document.getElementById('SignUpPassword');
var welcome = document.getElementById('welcomeHome');
var userContainer =[]
if (localStorage.getItem('Users')!=null){
   userContainer =JSON.parse(localStorage.getItem('Users'))
}
if(signNameInput){
   function signup(){
    var newName = signNameInput.value;
    var newEmail = signEmailInput.value;
    var newPass = signPassInput.value;
    if (!validateEmail(newEmail)) {
        alert("Invalid email format");
    }
    if (!validateName(newName)){
        alert("Invalid Name");
    }
    if (!validatePass(newPass)){
        alert("Invalid password");
    }
    else{
        var exist = userContainer.find(user => user.email === newEmail)
        if (exist){
           alert("Email already exist");
        }else{
            var newUser ={
                name: newName,
                email:newEmail,
                pass:newPass
             }
             userContainer.push(newUser);
             localStorage.setItem('Users' , JSON.stringify(userContainer));
             window.location.href = "./index.html"
        }
       
    }
   
   }
}
if(emailNameInput){
    function loginUser(){
        var newEmail = signEmailInput.value;
        var newPass = signPassInput.value;
        if (!validateEmail(newEmail)) {
            alert("Invalid email format");
        }
        if (!validatePass(newPass)){
            alert("Invalid password");
        }
        else{
            var exist = userContainer.find(user => user.email === newEmail)
            if (exist){
               alert("Email already exist");
            }else{
                var newUser ={
                    email:newEmail,
                    pass:newPass
                 }
                 userContainer.push(newUser);
                 localStorage.setItem('Users' , JSON.stringify(userContainer));
                 window.location.href = "./home.html"
            }
           
        }
       
       }
    }
     

function validateEmail(email) {
    var emailPatterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPatterns.test(email);

}
function validateName(name) {
    return name.length >=3; 
}
function validatePass(password){
    return password.length >=8;
}

