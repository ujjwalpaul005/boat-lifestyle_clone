document.querySelector("form").addEventListener("submit",dikshant);
let arr=JSON.parse(localStorage.getItem("subscribe"))||[];
function dikshant(event){
    event.preventDefault();
    let nameOfSubscribe={
         myEmail:document.querySelector("#Email").value
    }
    arr.push(nameOfSubscribe);
    localStorage.setItem("subscribe",JSON.stringify(arr))
}