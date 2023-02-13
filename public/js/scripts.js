window.addEventListener("load", function () {

    /* Toastr Initialization */
    toastr.options = {
      positionClass: "toast-bottom-right",
      fadeIn: 300,
      fadeOut: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
    };
  
    /* Selecciono todos los productos de la página */
    let products = document.querySelectorAll(".comprar");
  
    /* Creo un event listener por cada boton */
    products.forEach((product) => {
      product.addEventListener("click", function (e) {
        if (localStorage.cart) {
          let cart = JSON.parse(localStorage.cart);
          let index = cart.findIndex((product) => product.id == e.target.dataset.id);
          if (index != -1) {
            cart[index].quantity = cart[index].quantity + 1;
          } else {
            cart.push({ id: e.target.dataset.id, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          localStorage.setItem(
            "cart",
            JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
          );
        }
        toastr.success("Se agregó este producto al carrito");
      });
    });
  });