// best_seller_products =================

best_seller_productObj = [
  {
    name: "boAt Rockerz 330",
    rating: 4.8,
    reviews: 258,
    price: 1499,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
  },

  {
    name: "boAt Airdopes 131 - Wireless Earbuds",
    rating: 4.8,
    reviews: 932,
    price: 999,
    mrp: 2990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
  },

  {
    name: "boAt Rockerz 333",
    rating: 4.9,
    reviews: 92,
    price: 1199,
    mrp: 3990,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
  },

  {
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

  document.querySelector("#best_seller > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
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

  document.querySelector("#smart_watch > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
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

  document.querySelector("#trending_wireless > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
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

  document.querySelector("#trending_wired > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
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

  document.querySelector("#trending_headphone > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
});



// gaming_productObj===============================

gaming_productObj = [
    {
        name : "boAt Immortal 700",
        rating : 4.9,
        reviews : 78,
        price : 2499,
        mrp : 6990,
        image : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993" 
    },

    {
        name : "boAt Immortal 1000D",
        rating : 4.9,
        reviews : 12,
        price : 2299,
        mrp : 5990,
        image : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159" 
    },

    {
        name : "boAt Immortal 1300",
        rating : 4.8,
        reviews : 8,
        price : 2899,
        mrp : 9990,
        image : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015" 
    },

    {
        name : "boAt Immortal 400",
        rating : 4.5,
        reviews : 2,
        price : 1999,
        mrp : 6990,
        image : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679" 
    }
]

gaming_productObj.forEach(function(elem){
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
  saving = saving.toFixed(0);

  document.querySelector("#gaming > .cards").innerHTML += `
    <div class="card">
    <span class="saving">YOU SAVE ${saving}%</span>
    <img src=${elem.image}>
    <div>
        <h4>${elem.name}</h4>
        <i class="fa-solid fa-star"><span>${elem.rating} | ${
    elem.reviews
  } reviews</span></i>
        
        <h5>₹ ${elem.price} <strike>₹ ${elem.mrp}</strike></h5>
        <p>You Save: ₹ ${elem.mrp - elem.price} (${saving}%)</p>

        <button>ADD TO CART</button>
        
    </div>
    </div>
    `;
})
