let img = document.querySelector(".img");
let menu = JSON.parse(localStorage.getItem("products"));

let user = new URLSearchParams(window.location.search);
let youssef = user.get('id') ;
console.log(youssef);

let id = localStorage.getItem("id");
let desc = document.querySelector(".desc");
desc.innerHTML = `
<div class="impor">
<div class="imga">
<img src="${menu[id].image}" class="img">
</div>
<h1 class="montag">${menu[id].title}</h1>
<p class="descrip">${menu[id].description}</p>
<button class="price"> add to cart
<span class="price1">${menu[id].price} </span> </button>
</div>
`;
