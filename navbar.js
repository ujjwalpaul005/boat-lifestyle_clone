function showLogin() {
    let box = document.createElement("div")
    box.setAttribute("id", "showLogIn")
    let headline = document.createElement("div")
    let boatHead = document.createElement("h3")
    boatHead.innerText = "Hey boAthead!"

    let button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteOption);

    let loginbtn = document.createElement("button")
    loginbtn.innerText = "Log in"
    loginbtn.addEventListener("click", function () {
        window.location.href = "login.html";
    })

    headline.append(boatHead, button)
    box.append(headline, loginbtn)
    document.querySelector("body").append(box)


}

function deleteOption() {
    document.querySelector("#showLogIn").remove();
} 



    


    // 1
   let wirelessbuds=document.querySelector("#wirelessEarbuds");
   wirelessbuds.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay",("Wireless Earbuds"));
    localStorage.setItem("categoryFilter",("WIRELESS EARBUDS"));
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734")
    window.location.href="products.html"
   });
   
    
       
       
   
//    2
   let wirelessHeadphones=document.querySelector("#wirelessHeadphones");
   wirelessHeadphones.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Wireless Headphones");
    localStorage.setItem("categoryFilter","BLUETOOTH EARPHONES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683")
    window.location.href="products.html"
   }) 
   
//    3
   let SmartWatches=document.querySelector("#SmartWatches");
   SmartWatches.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Smart Watches");
    localStorage.setItem("categoryFilter","SMART WATCHES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smart-Watch_Catgry-web.jpg?v=1634717240");
    window.location.href="products.html";
   }) 
//    4
   let WiredEarphones=document.querySelector("#WiredEarphones");
   WiredEarphones.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Wired Earphones");
    localStorage.setItem("categoryFilter","WIRED EARPHONES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143");
    window.location.href="products.html";
   }) 
//    5
   let WirelessSpeakers=document.querySelector("#WirelessSpeakers");
   WirelessSpeakers.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Wireless Speakers");
    localStorage.setItem("categoryFilter","BLUETOOTH SPEAKERS");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-Speakers_Catgry-web_5ddac427-ef95-4cc3-bcd7-5f08ab93359d.jpg?v=1634903645");
    window.location.href="products.html";
   }) 
//    6
   let HomeTheatreSystemsSoundbars=document.querySelector("#HomeTheatreSystemsSoundbars");
   HomeTheatreSystemsSoundbars.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Home Theatre Systems & Soundbars");
    localStorage.setItem("categoryFilter","HOME THEATRE & SOUND BARS");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Aavante_category_web_1.jpg?v=1634903645");
    window.location.href="products.html";
   }) 
//    7
   let MobileAccessories=document.querySelector("#MobileAccessories");
   MobileAccessories.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Mobile Accessories");
    localStorage.setItem("categoryFilter","MOBILE ACCESSORIES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mobile_Accessories_web.jpg?v=1634903645");
    window.location.href="products.html";
   }) 
//    8
   let TRebel=document.querySelector("#TRebel");
   TRebel.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","TRebel");
    localStorage.setItem("categoryFilter","AUDIOWEAR FOR WOMEN");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_Category_Web.jpg?v=1634903645");
    window.location.href="products.html";
   }) 
//    9
   let LimitedEdition=document.querySelector("#LimitedEdition");
   LimitedEdition.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Limited Edition");
    localStorage.setItem("categoryFilter","LIMITED EDITION");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Limited_edition_cat_web.jpg?v=1634903645");
    window.location.href="products.html";
   }) 
//    10
   let MisfitBestTrimmerforMen=document.querySelector("#MisfitBestTrimmerforMen");
   MisfitBestTrimmerforMen.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Misfit - Best Trimmer for Men");
    localStorage.setItem("categoryFilter","MISFIT BY boAt");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/MISFIT-T200_Catgry_Web.jpg?v=1634806683");
    window.location.href="products.html";
   }) 
//    11
   let ImmortalGaming=document.querySelector("#ImmortalGaming");
   ImmortalGaming.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Immortal Gaming");
    localStorage.setItem("categoryFilter","WIRELESS EARBUDS");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-Catgry_web.jpg?v=1634903645");
    window.location.href="products.html";
   }) 



