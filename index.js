// carousel function start ==============

let imgArray = [
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_2000x.jpg?v=1655189587",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner_2000x.png?v=1655295150",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_2000x.jpg?v=1654670966",
];

let carousalImg = document.getElementById("car_img");
var i = 0;
carousalImg.src = imgArray[i];
setInterval(function () {
  i++;
  if (i > 3) {
    i = 0;
  }
  // console.log(i);
  carousalImg.src = imgArray[i];
}, 5000);

document.getElementById("prev").addEventListener("click", function () {
  prev(i);
});
document.getElementById("next").addEventListener("click", function () {
  next(i);
});

function prev() {
  i--;
  if (i < 0) {
    i = 3;
  }
  carousalImg.src = imgArray[i];
}
function next() {
  i++;
  if (i > 3) {
    i = 0;
  }
  carousalImg.src = imgArray[i];
}

// carousel function end ================
