window.addEventListener("load", function () {
    let formulario = document.querySelector("form"); 
  
    formulario.addEventListener("submit", function (e) {
      let errores = [];
      let ulerrores = document.querySelector("#errores");
      ulerrores.innerHTML = "";
  
      let nombre = document.querySelector("#first-name");
      if (nombre.value == "") {
        errores.push("Debes escribir un nombre");
      }
      if (nombre.value.length < 2) {
        errores.push("Debes escribir más de 2 caracteres");
      }
  
      let apellido = document.querySelector("#last-name");
      if (apellido.value == "") {
        errores.push("Debes escribir un apellido");
      }
      if (apellido.value.length < 2) {
        errores.push("Debes escribir más de 2 caracteres");
      }
  
      let email = document.querySelector("#email");
      if (email.value == "") {
        errores.push("Debes escribir un mail");
      }

      let password = document.querySelector("#password");
      if (password.value == "") {
        errores.push("Debes escribir una contraseña");
      }

      let nombreUsuario = document.querySelector("#username");
      if (nombreUsuario.value == "") {
        errores.push("Debes escribir un nombre de usuario");
      }
      if (nombre.value.length < 2) {
        errores.push("Debes escribir más de 2 caracteres");
      }
  
      if (errores.length > 0) {
        e.preventDefault();
  
        for (let i = 0; i < errores.length; i++) {
          ulerrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
      }
    });
  });
 
 
 
 //   let profilePic = document.querySelector("#profile-pic")

   // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //  let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
   // let filePath = profilePic.value
//else if (!(email.value.match(validRegex))) {
           // errores.push("Tenés que ingresar un email válido")
       // }
        //if (!allowedExtensions.exec(filePath)){
          //  errores.push("Tu imagen de perfil debe ser un archivo JPEG, JPG, PNG o GIF")
      //  }

