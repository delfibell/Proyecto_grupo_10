function removeItem(index) {
    if (cart.length > 1) {
      cart.splice(index, 1);
      products.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById(`row${index}`).remove();
    } else {
      localStorage.removeItem("cart");
      products = [];
      setCarritoVacio();
    }
  
    document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
      products
    )}`;
  
    toastr.success("Se borro el item del carrito");
  }
  
  function setCarritoVacio() {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes productos en el carrito</div></td>
    </tr>            
    `;
  }
  function vaciarCarrito() {
    localStorage.removeItem("cart");
  }
  
  function calcularTotal(products) {
    return products.reduce(
      (acum, product) => (acum += product.price * product.quantity),
      0
    );
  }
  
  let cartRows = document.querySelector(".cartRows");
  let products = [];
  
  if (localStorage.cart && localStorage.cart != "[]") {
    cart = JSON.parse(localStorage.cart);
    cart.forEach((item, index) => {
      fetch(`/api/products/:${product.id}`)
        .then((res) => res.json())
        .then((product) => {
          if (product) {
            cartRows.innerHTML += `
              <tr id="row${index}">
                  <th scope="row">${index + 1}</th>
                  <td>${product.productDetail.name}</td>
                  <td>$ ${product.productDetail.price}</td>
                  <td class="text-center">${item.quantity}</td>
                  <td class="text-center">$ ${parseFloat(
                    product.productDetail.price * item.quantity,
                    2
                  ).toFixed(2)}</td>
                  <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
              </tr>            
              `;
            products.push({
              productId: product.productDetail.id,
              name: product.productDetail.name,
              price: product.productDetail.price,
              quantity: item.quantity,
            });
          } else {
            cart.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(cart));
          }
        })
        .then(() => {
          document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
            products
          )}`;
        });
    });
  } else {
    setCarritoVacio();
  }
  
