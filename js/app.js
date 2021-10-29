    
    document.addEventListener("DOMContentLoaded", () => {
    let id = (id) => document.getElementById(id);
    let classes = (clases) => document.getElementsByClassName(clases);
    
    const nameField = id("name"),
          surnameField = id("surname"),
          emailField = id("email"),
          passwordField = id("password"),
          form = id("form"),
          btn = id("btn");
    const errorMsg = classes("errorMsg");

    let heart = (id, number, message) => {
            if (id.value.trim() === "") {
                errorMsg[number].innerHTML = message;
                id.classList.add("error","error-icon");
                
            }else{
                errorMsg[number].innerHTML = "";
                id.classList.remove("error","error-icon")
            }
        };


    btn.addEventListener("click", function () {
        heart(nameField,0,"First Name cannot be empty");
        heart(surnameField,1,"Last Name cannot be empty");
        heart(emailField,2,"Looks like this is not an email");
        heart(passwordField,3,"Password cannot be empty");
    });

    

 
});

