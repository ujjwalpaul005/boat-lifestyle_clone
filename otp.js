document.querySelector("form").addEventListener("submit", checkOTP);

function checkOTP(e){
    e.preventDefault();

    let otp = document.querySelector("#otp").value;

    if(otp == 1234){
        alert("payment successful")
        window.location.href = "index.html"
    }else{
        alert("wrong otp. please enter again.")
        window.location.reload();
    }
}