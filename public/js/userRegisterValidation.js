window.addEventListener("load", function () {
  let formulario = document.getElementById("register"); 
  formulario.addEventListener("submit", function (event) {
    function validateForm() {
      let erroresFront = document.querySelector(".errores-front")
      
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
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorFirstName.innerHTML = "Debes completar un nombre";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorFirstName.innerHTML = "";
      }
      // Más de 2 caracteres
      if(inputNombre.value.length < 2){
        eerroresFront.innerHTML = "¡Se encontraron errores!";
        errorFirstName.innerHTML = "El nombre debe tener al menos 2 caracteres";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorFirstName.innerHTML = "";
      }
    ///
      let inputApellido = formulario.elements.lastName;
      if(inputApellido.value === ""){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorLastName.innerHTML = "El apellido debe tener al menos 2 caracteres";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorLastName.innerHTML = "";
      }
      if(inputApellido.value.length < 2){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorLastName.innerHTML = "El apellido debe tener al menos 2 caracteres";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorLastName.innerHTML = "";
      }
      let inputEmail = formulario.elements.email;
      // campo vacío 
      if(inputEmail.value === ""){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "Debes ingresar un email";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      // formato válido email
      let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      if(!checkEmail.test(inputEmail.value)){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "El mail tiene que tener un formato válido";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      let inputPassword = formulario.elements.password;
      // campo vacío 
      if(inputEmail.value === ""){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorEmail.innerHTML = "Debes ingresar una contraseña";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorEmail.innerHTML = "";
      }
      // contraseña con min, may, caracter especial y num 
      let checkContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!checkContrasenia.test(inputPassword.value)){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorPassword.innerHTML = "La contraseña debe contener al menos 8 caracteres e incluir minúsculas, mayúsculas, un caracter especial y al menos un número";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorPassword.innerHTML = "";
      }
      let inputUsername = formulario.elements.username;
      // Campo vacío 
      if(inputUsername.value === ""){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorUsername.innerHTML = "Debes completar un nombre de usuario";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorUsername.innerHTML = "";
      }
      // Más de 2 caracteres
      if(inputUsername.value.length < 2){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorUsername.innerHTML = "El nombre de usuario debe tener al menos 2 caracteres";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorUsername.innerHTML = "";
      }
      let inputProfilePic = formulario.elements.profilePic;
      // campo vacío 
      if(inputProfilePic.value === ""){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorProfilePic.innerHTML = "Debes subir una imagen";
        return false
      }else{
        erroresFront.innerHTML = "";
        errorProfilePic.innerHTML = "";
      }
      // extensiones archivos 
      let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      let filePath = profilePic.value
      if (!allowedExtensions.exec(filePath)){
        erroresFront.innerHTML = "¡Se encontraron errores!";
        errorProfilePic.innerHTML = "La imagen debe tener formato JPG, JPEG, GIF o PNG";
        return false
      } else {
        erroresFront.innerHTML = "";
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

