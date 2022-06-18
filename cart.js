cartFunc()
function cartFunc() {
  console.log("done")
  let totalPrice = 0;
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartList.length < 1) {
    document.getElementById("cart_pdt").innerHTML = `
        <div class="empty">
            <p>Your cart is empty</p>
            <button class="empty_btn" id="shopping">Start Shopping</button>
        </div>
        `;
    
    document.getElementById("shopping").addEventListener("click", function(){
      window.location.href = "products.html"
    });


  } else {
    let cart = document.getElementById("cart_pdt");
    cart.innerText = "";

    cartList.forEach(function (elem, index) {
      let card = document.createElement("div");

      let image = document.createElement("img");
      image.src = elem.image;

      let details = document.createElement("div");

      let name = document.createElement("h4");
      name.innerText = elem.name;

      let price = document.createElement("h3");
      price.innerText = "Rs. " + elem.price;

      let decrement = document.createElement("button");
      decrement.innerText = "-";
      decrement.addEventListener("click", function () {
        // decre(elem,index);
        let quant = cartList[index].quantity;
        quant--;
        if (quant < 1) {
          quant = 1;
        }
        quantity.innerText = quant;
        cartList[index].quantity = quant;
        localStorage.setItem("cart", JSON.stringify(cartList));
        cartFunc();
      });

      let quantity = document.createElement("span");
      quantity.innerText = elem.quantity;

      let increment = document.createElement("button");
      increment.innerText = "+";
      increment.addEventListener("click", function () {
        // incre(elem,index)
        let quant = cartList[index].quantity;
        quant++;
        quantity.innerText = quant;
        cartList[index].quantity = quant;
        localStorage.setItem("cart", JSON.stringify(cartList));
        cartFunc();
      });

      let deletePdt = document.createElement("img");
      deletePdt.src =
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107";

      deletePdt.addEventListener("click", function () {
        deleteIt(elem, index);
      });

      details.append(name, price, decrement, quantity, increment, deletePdt);

      card.append(image, details);

      cart.append(card);
    });
  }

  cartList.forEach(function (elem) {
    totalPrice += elem.price*elem.quantity;
  });

  let total = document.getElementById("total_price");
  total.innerText = totalPrice;

  function deleteIt(elem, index) {
    let cartList = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    cartFunc();
  }

  
}



document.getElementById("cartOpen").addEventListener("click", function(){
  cartFunc();
  document.querySelector("#cart").style.display = "block";
});

document
  .querySelectorAll(".cards > div > div > button")
  .forEach(function (elem) {
    elem.addEventListener("click", cartFunc);
  });







