document.querySelector("form").addEventListener("submit", cardValidation);

let totalPrice = 0;
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

cartList.forEach(function (elem) {
    totalPrice += elem.price*elem.quantity;
  });

let cart = document.querySelector("#cart_value");
cart.innerText = "Total Cart Value is ₹" + totalPrice;


function cardValidation(e){
    e.preventDefault();

    let card = document.querySelector("#card").value;
    let cvv = document.querySelector("#cvv").value;
    let date = document.querySelector("#date").value;
    let name = document.querySelector("#name").value;

    if(card == 1234123412341234 && cvv == 123 && date == "2022-12" && name !== ""){
        alert("OTP Send. Please Enter the OTP");
        window.location.href = "otp.html"
    }else{
        alert("error")
    }
}