window.addEventListener("load", function () {
    let formulario = document.getElementById("edit-product"); 
    formulario.addEventListener("submit", function (event) {
      function validateForm() {
        let erroresFront = document.querySelector(".errores-front")
        
        let errorProductName = document.querySelector(".errorProductName")
        let errorProductDescription = document.querySelector(".errorProductDescription")
        let errorImage = document.querySelector(".errorImage")
       
      ///
        let inputProductName = formulario.elements.name;
        // Campo vacío 
        if(inputProductName.value === ""){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorProductName.innerHTML = "Debes completar un nombre";
          return false
        }else{
          erroresFront.innerHTML = "";
          errorProductName.innerHTML = "";
        }
        // Más de 2 caracteres
        if(inputProductName.value.length < 5){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorProductName.innerHTML = "El nombre debe tener al menos 5 caracteres";
          return false
        }else{
          erroresFront.innerHTML = "";
          errorProductName.innerHTML = "";
        }
      ///
        let inputProductDescription = formulario.elements.description;
        if(inputProductDescription.value === ""){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorProductDescription.innerHTML = "Debes completar una descripción";
          return false
        }else{
          erroresFront.innerHTML = "";
          errorProductDescription.innerHTML = "";
        }
        if(inputProductDescription.value.length < 20){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorProductDescription.innerHTML = "La descripción debe tener al menos 20 caracteres";
          return false
        }else{
          erroresFront.innerHTML = "";
          errorProductDescription.innerHTML = "";
        }
  
        let inputImage = formulario.elements.image;
        // campo vacío 
        if(inputImage.value === ""){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorImage.innerHTML = "Debes subir una imagen";
          return false
        }else{
          erroresFront.innerHTML = "";
          errorImage.innerHTML = "";
        }
        // extensiones archivos 
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        let filePath = inputImage.value
        if (!allowedExtensions.exec(filePath)){
          erroresFront.innerHTML = "¡Se encontraron errores!";
          errorImage.innerHTML = "La imagen debe tener formato JPG, JPEG, GIF o PNG";
          return false
        } else {
          erroresFront.innerHTML = "";
          errorImage.innerHTML = "";
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
  
  