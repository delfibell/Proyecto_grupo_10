window.addEventListener('load', function(){
    let barraBuscador = document.querySelector('.search')
    barraBuscador.addEventListener("focus", function(){
        barraBuscador.style.borderColor = "#d8ffd2"
    })
    barraBuscador.addEventListener("blur", function(){
        barraBuscador.style.borderColor = "white"
    })

})