function showLogin() {
  let box = document.createElement("div");
  box.setAttribute("id", "showLogIn");
  let headline = document.createElement("div");
  let boatHead = document.createElement("h3");
  boatHead.innerText = "Hey boAthead!";

  let button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteOption);

  let loginbtn = document.createElement("button");
  loginbtn.innerText = "Log in";
  loginbtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });

  headline.append(boatHead, button);
  box.append(headline, loginbtn);
  document.querySelector("body").append(box);
}

function deleteOption() {
  document.querySelector("#showLogIn").remove();
}
