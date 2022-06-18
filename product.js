// best_seller_products =================

best_seller_productObj = [
  {
    id: "one",
    name: "boAt Rockerz 330",
    rating: 4.8,
    reviews: 258,
    price: 1499,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
  },

  {
    id: "two",
    name: "boAt Airdopes 131 - Wireless Earbuds",
    rating: 4.8,
    reviews: 932,
    price: 999,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
  },

  {
    id: "three",
    name: "boAt Rockerz 333",
    rating: 4.9,
    reviews: 92,
    price: 1199,
    mrp: 3990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
  },

  {
    id: "four",
    name: "boAt Watch Xtend‌",
    rating: 4.8,
    reviews: 115,
    price: 3199,
    mrp: 7990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_600x.png?v=1650387008",
  },
];

best_seller_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);
  //   console.log(saving);


  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem)
    carting(elem);
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#best_seller > .cards").append(card);

});

// smart watches ========================

smart_watch_productObj = [
  {
    name: "boAt Watch Wave Pro",
    rating: 5.0,
    reviews: 10,
    price: 3299,
    mrp: 6990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
  },

  {
    name: "boAt Watch Flash",
    rating: 4.8,
    reviews: 43,
    price: 2499,
    mrp: 6990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
  },

  {
    name: "boAt Storm",
    rating: 4.8,
    reviews: 912,
    price: 2499,
    mrp: 5990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_600x.png?v=1625046217",
  },

  {
    name: "boAt Watch Iris",
    rating: 5.0,
    reviews: 2,
    price: 4399,
    mrp: 11999,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
  },
];

smart_watch_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem);
    carting(elem);
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#smart_watch > .cards").append(card)

});

// trending_Wireless_productObj====================

trending_Wireless_productObj = [
  {
    name: "boAt Rockerz 235 V2",
    rating: 4.8,
    reviews: 1007,
    price: 999,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_600x.png?v=1625046105",
  },

  {
    name: "boAt Rockerz 245 V2",
    rating: 4.8,
    reviews: 169,
    price: 999,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_600x.png?v=1627276367",
  },

  {
    name: "boAt Rockerz 450",
    rating: 4.8,
    reviews: 253,
    price: 1499,
    mrp: 3990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
  },

  {
    name: "boAt Rockerz 550",
    rating: 4.8,
    reviews: 308,
    price: 1999,
    mrp: 4990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
  },
];

trending_Wireless_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem)
    carting(elem)
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#trending_wireless > .cards").append(card)

});


// Trending_Wired_productObj========================

Trending_Wired_productObj = [
  {
    name: "boAt BassHeads 100",
    rating: 4.8,
    reviews: 386,
    price: 399,
    mrp: 990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_600x.png?v=1625046105",
  },

  {
    name: "boAt BassHeads 103",
    rating: 4.8,
    reviews: 470,
    price: 369,
    mrp: 1290,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_600x.png?v=1625046259",
  },

  {
    name: "boAt BassHeads 102",
    rating: 4.8,
    reviews: 150,
    price: 449,
    mrp: 1290,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
  },

  {
    name: "boAt BassHeads 242",
    rating: 4.8,
    reviews: 330,
    price: 449,
    mrp: 1490,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
  },
];

Trending_Wired_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem)
    carting(elem)
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#trending_wired > .cards").append(card)

});


// Trending_Headphones_productObj========================

Trending_Headphones_productObj = [
  {
    name: "boAt Rockerz 333 Pro",
    rating: 4.9,
    reviews: 78,
    price: 1699,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
  },

  {
    name: "boAt Rockerz 255 Pro",
    rating: 4.8,
    reviews: 368,
    price: 1399,
    mrp: 3490,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_600x.png?v=1625045854",
  },

  {
    name: "TRebel Rockerz 235 V2",
    rating: 4.8,
    reviews: 14,
    price: 1199,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-blue_f69b43bd-1bf3-41f0-a199-837a1eebb711_600x.png?v=1614462143",
  },

  {
    name: "boAt Rockerz 333",
    rating: 4.9,
    reviews: 92,
    price: 1199,
    mrp: 3990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_600x.png?v=1641801662",
  },
];

Trending_Headphones_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem)
    carting(elem)
    
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#trending_headphone > .cards").append(card)

});


// gaming_productObj===============================

gaming_productObj = [
  {
    name: "boAt Immortal 700",
    rating: 4.9,
    reviews: 78,
    price: 2499,
    mrp: 6990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
  },

  {
    name: "boAt Immortal 1000D",
    rating: 4.9,
    reviews: 12,
    price: 2299,
    mrp: 5990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
  },

  {
    name: "boAt Immortal 1300",
    rating: 4.8,
    reviews: 8,
    price: 2899,
    mrp: 9990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
  },

  {
    name: "boAt Immortal 400",
    rating: 4.5,
    reviews: 2,
    price: 1999,
    mrp: 6990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
  },
];

gaming_productObj.forEach(function (elem) {
  let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  let card = document.createElement("div")
  card.setAttribute("class", "card");

  let span = document.createElement("span");
  span.setAttribute("class", "saving");
  span.innerText = "YOU SAVE " + saving + "%";

  let image = document.createElement("img");
  image.src = elem.image;

  let details = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = elem.name;

  let star = document.createElement("i");
  star.setAttribute("class", "fa-solid fa-star");
  let rate = document.createElement("span");
  rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
  star.append(rate);

  let price = document.createElement("h5");
  price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`

  let saves = document.createElement("p");
  saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.addEventListener("click", function(){
    console.log(elem)
    carting(elem)
    document.querySelector("#cart").style.display = "block";
  })

  details.append(name, star, price, saves, btn);

  card.append(span, image, details);

  document.querySelector("#gaming > .cards").append(card)

});


// new launches ===================

carousel_productObj = [
  {
    name: "boAt Airdopes 175",
    price: 1699,
    category: "Wireless Earbuds",
    description:
      "Experience calling like never before with Airdopes 175 that sends across your voice without ambient disturbances via quad mics with ENx™️ Technology. Immerse in the sound of 10mm drivers for 35 hours straight with its massive battery backup. Experience the best sound!",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_dde24c57-aa19-4a19-ab08-64fbd375ef2e.jpg?v=1653469965",
  },

  {
    name: "boAt Wave Connect | Bluetooth Calling Smartwatch",
    price: 3499,
    category: "Smartwatch",
    description:
      "Take calls from your watch using boAt Wave Connect — our newest bluetooth calling smartwatch. Choose from 60+ sports modes using a larger than life 1.69” HD display. Dial up and #StayConnected!",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_43c46150-2889-4f7b-bd06-719a0046fddb.jpg?v=1654591342",
  },

  {
    name: "boAt Airdopes 135",
    price: 799,
    category: "Bluetooth Speakers",
    description:
      "Fits your pocket, matches your vibe! Stone 135— super portable Bluetooth Speaker is here with its 5W RMS playing nonstop for 11HRS! Be the life of the party as you double the fun with its TWS Functionality!",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-2.png?v=1655208846",
  },
];

let new_i = 0;
newLaunchesChange(new_i);
setInterval(function () {
  new_i++;
  if (new_i > 2) {
    new_i = 0;
  }

  newLaunchesChange(new_i);
}, 5000);

function newLaunchesChange(new_i) {
  let newLaunches = document.querySelector("#content");

  newLaunches.innerHTML = `
<p class="newTag">New</p>
<img
  src=${carousel_productObj[new_i].image}
/>

<div class="details">
  <img
    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Vector_Smart_Object_6085a897-ef0f-41c5-9690-3de81a71112f.png?v=1642419136"
  />
  <h5>${carousel_productObj[new_i].category}</h5>
  <h4>${carousel_productObj[new_i].name}</h4>
  <h5>Special Launch Price</h5>
  <h2>Rs. ${carousel_productObj[new_i].price}</h2>
  <p>Description</p>
  <p class="text">
  ${carousel_productObj[new_i].description}
    <span class="readmore" onMouseover="readmore()">Read More...</span>
  </p>
  <div>
    <button>EXPLORE MORE</button>
  </div>
</div>
`;
}


let left = document.querySelector("#left");
left.addEventListener("click", left_pdt);

let right = document.querySelector("#right");
right.addEventListener("click", right_pdt);

function left_pdt() {
  new_i--;
  if (new_i < 0) {
    new_i = 2;
  }

  newLaunchesChange(new_i);
}

function right_pdt() {
  new_i++;
  if (new_i > 2) {
    new_i = 0;
  }

  newLaunchesChange(new_i);
}

// celeb_reviews ====================
celeb_obj = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fierce_-Flamboyant_-Fearless_jpg_563x.jpg?v=1651227694",
    name: "K L Rahul",
    tags: "Firce. Flamboyant. fearless.",
    description:
      "When you hear the crowd roar, be assured that it’s KL Rahul making his way to the field. Our hardcore boAthead, KL Rahul, hits it with his performance as well as his fashion statement. On or off field, Rahul always makes #MoveOfTheChampions.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Radiant_-Rebel_-Trailblazer_jpg_563x.jpg?v=1651227770",
    name: "RASHMIKA MANDANNA",
    tags: "Radiant. Rebel. Trailblazer.",
    description:
      "The Queen of sass & hearts, Rashmika Mandanna is the newly on-board boAthead. Do you know what our boAthead Rashmika & boAt have in common? They both leave you speechless with their mind-boggling performance.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bold_-Fashionista_-Hustler_jpg_563x.jpg?v=1651227807",
    name: "KIARA ADVANI",
    tags: "Bold. Fashionista. Hustler.",
    description:
      "A powerhouse who doesn’t believe in backing down - Kiara is a fierce hustler. No wonder why Kiara is our passionate boAthead. The hustler in her has gotten the whole film industry on its toes. So rock your style as you hustle to the top just like the boAt & Kiara way!",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Energetic_-Charming_-Free-Spirit_jpg_563x.jpg?v=1651227851",
    name: "KARTIK AARYAN",
    tags: "Energetic. Charming. Free Spirit.",
    description:
      "The cool & confident Kartik Aaryan adds a pinch of sass to the boAthead tribe. His energetic aura suits the boAt vibe just perfectly. So get ready to immerse yourself in surreal sound & experience magic the boAt way!",
  },
];

let celeb_i = 0;
celebReview(celeb_i);

setInterval(function () {
  celeb_i++;
  if (celeb_i > 2) {
    celeb_i = 0;
  }

  celebReview(celeb_i);
}, 5000);

function celebReview(celeb_i) {
  let celeb = document.querySelector("#celeb");
  celeb.innerHTML = `
<img
  src=${celeb_obj[celeb_i].image}
/>

<div class="celeb_details">
  <h2>Meet the bo<span>A</span>theads</h5>
  <h4>${celeb_obj[celeb_i].name}</h4>
  <h3>${celeb_obj[celeb_i].tags}</h3>
  <p>${celeb_obj[celeb_i].description}</p>
</div>
`;
}

let c_left = document.querySelector("#celeb_left");
c_left.addEventListener("click", left_celeb);

let c_right = document.querySelector("#celeb_right");
c_right.addEventListener("click", right_celeb);

function left_celeb() {
  celeb_i--;
  if (celeb_i < 0) {
    celeb_i = 3;
  }

  celebReview(celeb_i);
}

function right_celeb() {
  celeb_i++;
  if (celeb_i > 3) {
    celeb_i = 0;
  }

  celebReview(celeb_i);
}



// cart function=================

function carting(elem){
  let cList = JSON.parse(localStorage.getItem("cart")) || [];

  let obj = {
    name : elem.name,
    price : elem.price,
    image : elem.image,
    quantity : 1,
  }

  cList.push(obj);

  localStorage.setItem("cart", JSON.stringify(cList))
}
