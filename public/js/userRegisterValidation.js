

window.addEventListener("load", function () {
  let formulario = document.getElementById("register"); 
  formulario.addEventListener("submit", function (event) {
    function validateForm() {
      let encontreErrores = document.querySelector(".encontreErrores")
      
      let errorFirstName = document.querySelector(".errorFirstName")
      let errorLastName = document.querySelector(".errorLastName")
      let errorEmail = document.querySelector(".errorEmail")
      let errorPassword = document.querySelector(".errorPassword")
      let errorUsername = document.querySelector(".errorUsername")
      let errorProfilePic = document.querySelector(".errorProfilePic")
     
    ///
      let inputNombre = formulario.elements.firstName;
      // Campo vacío 
      if(inputNombre.value === ""){
        inputNombre.classList.remove("goodBorder");
        inputNombre.classList.add("errorBorder");
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorFirstName.innerHTML = "Debes completar un nombre";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorFirstName.innerHTML = "";
      }
      // Más de 2 caracteres
      if(inputNombre.value.length < 2){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorFirstName.innerHTML = "El nombre debe tener al menos 2 caracteres";
        return false
      }else{
        inputNombre.classList.remove("errorBorder");
        inputNombre.classList.add("goodBorder")
        encontreErrores.innerHTML = "";
        errorFirstName.innerHTML = "";
      }
    ///
      let inputApellido = formulario.elements.lastName;
      if(inputApellido.value === ""){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorLastName.innerHTML = "El apellido debe tener al menos 2 caracteres";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorLastName.innerHTML = "";
      }
      if(inputApellido.value.length < 2){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorLastName.innerHTML = "El apellido debe tener al menos 2 caracteres";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorLastName.innerHTML = "";
      }
      let inputEmail = formulario.elements.email;
      // campo vacío 
      if(inputEmail.value === ""){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "Debes ingresar un email";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      // formato válido email
      let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      if(!checkEmail.test(inputEmail.value)){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "El mail tiene que tener un formato válido";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      let inputPassword = formulario.elements.password;
      // campo vacío 
      if(inputEmail.value === ""){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "Debes ingresar una contraseña";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      // contraseña con min, may, caracter especial y num 
      let checkContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!checkContrasenia.test(inputPassword.value)){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorPassword.innerHTML = "La contraseña debe contener minúsculas, mayúsculas, un caracter especial y al menos un número";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorPassword.innerHTML = "";
      }
      let inputUsername = formulario.elements.username;
      // Campo vacío 
      if(inputUsername.value === ""){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorUsername.innerHTML = "Debes completar un nombre de usuario";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorUsername.innerHTML = "";
      }
      // Más de 2 caracteres
      if(inputUsername.value.length < 2){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorUsername.innerHTML = "El nombre de usuario debe tener al menos 2 caracteres";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorUsername.innerHTML = "";
      }
      let inputProfilePic = formulario.elements.profilePic;
      // campo vacío 
      if(inputProfilePic.value === ""){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorProfilePic.innerHTML = "Debes subir una imagen";
        return false
      }else{
        encontreErrores.innerHTML = "";
        errorProfilePic.innerHTML = "";
      }
      // extensiones archivos 
      let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      let filePath = profilePic.value
      if (!allowedExtensions.exec(filePath)){
        encontreErrores.innerHTML = "¡Se encontraron errores!";
        errorProfilePic.innerHTML = "La imagen debe tener formato JPG, JPEG, GIF o PNG";
        return false
      } else {
        encontreErrores.innerHTML = "";
        errorProfilePic.innerHTML = "";
      }
      ///
      return true
    }
    if (validateForm()) {
      formulario.submit();
  } else {
      event.preventDefault();
  }
  })
})

