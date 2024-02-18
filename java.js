let container = document.getElementsByClassName("container")[0];
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];
let bag = document.querySelector("#shi");
let total = document.getElementById("total");
let close = document.getElementById("Close");
let pro = document.getElementsByClassName("pro")[0];
var mode = 0;
next.onclick = function () {
  mode++;
  if (mode > 2) {
    mode = 0;
  }
  creation();
};
function minas() {
  mode--;
  if (mode < 0) {
    mode = 2;
  }
  creation();
}
bag.onclick = function () {
  document.body.classList.toggle("tran");
};
close.onclick = function () {
  document.body.classList.remove("tran");
};

let products = [
  {
    id: 0,
    image: "0.jpg",
    title: " Dell 23",
    price: 25,
    description:
      "لاب توب V15 من لينوفو، انتل كور i3-10110U، رام 4 جيجا، هارد SSD 256 جيجا، منفذ الملحقات الاضافية السريع، كارت شاشة انتل UHD مدمج، 15.6 بوصة FHD (1920x1080) 220nits مضاد للتوهج، دوس، رمادي ايرون",
  },
  {
    id: 1,
    image: "1.jpg",
    title: " Dell 45",
    price: 25,
    description:
      "لاب توب ديل فوسترو 3510-انتل كورi5-1135G7 جيل 11، ذاكرة RAM 16 جيجا، هارد HDD 1 تيرا+هارد SSD 256 جيجا، انفيديا جي فورس MX350-كارت شاشة ذاكرة GDDR5 شاشة 15.6 بوصة-HD (1920×1080)، اوبونتو-اسود كربوني",
  },
  {
    id: 2,
    image: "2.jpg",
    title: " Lenove 34",
    price: 10,
    description:
      "لاب توب 15-dw3089ne من اتش بي، انتل كور i5-1135G7 جيل 11 رام 8GB و SSD512GB انفيديا جي فورس MX350 GDDR5 2GB شاشة HD رفيعة 15.6 بوصة 250وحدة مضيئة في البيكسل 1366×768 مضادة للوهج دوس اسود قاتم",
  },
  {
    id: 3,
    image: "3.jpg",
    title: " Hp nine",
    price: 85,
    description:
      "لاب توب اتش بي 15-11th بشاشة مقاس 15.6 بوصة دقة FHD (1920 x 1080) ومعالج انتل كور 1135G7-16GB جيل 11 بذاكرة RAM 8 جيجابايت وهارد HDD 1 تيرابايت وكارت شاشة مخصص انفيديا جيفورس MX350 2 جيجابايت GDDR5",
  },
  {
    id: 4,
    image: "4.jpg",
    title: " Lenove",
    price: 89,
    description:
      "لاب توب العاب لينوفو ايديا باد 3 - انتل كور 11 i7-11370H وذاكرة RAM 16 جيجابايت وانفيديا جيفورس جي تي اكس 3050 4 جيجابايت GDDR6 و15.6 بوصة FHD (1920x1080) IPS ودوس - اسود شادو + ماوس العاب RGB",
  },
  {
    id: 5,
    image: "5.jpg",
    title: " Dell 24",
    price: 65,
    description:
      "لا بتوب العاب روج ستريكس سكار 18 G834JZ-N6022W (انتل كور i9-13980HX جيل 13، RAM 32 جيجا، هارد SSD M.2 1 تيرا، بطاقة رسومات انفيديا جيفورس RTX™ 4080 12 جيجا، شاشة 18 بوصة QHD 240 هرتز، ويندوز 11، اسود",
  },
  {
    id: 6,
    image: "6.jpg",
    title: " Dell 16",
    price: 120,
    description:
      "احدث لاب توب العاب ديل G15 5525 2022، AMD رايزن™ 7-6800H، شاشة FHD 15.6 بوصة، 512GB SSD، ذاكرة RAM 16GB، بطاقة رسومات انفيديا جيفورس RTX™ 3050 4GB، ويندوز 11 هوم، كيبورد انجليزي عربي، رمادي",
  },
  {
    id: 7,
    image: "7.jpg",
    title: " Dell 83",
    price: 65,
    description:
      "لابتوب للالعاب من ديل G15 5520 NG9E5A-سي اتش ال دي جي رمادي غامق (كور، i7-12700H 16 جيجا، 512 جيجا هارد اس اس دي RTX3050، 15 بوصة، FHD)",
  },
  {
    id: 8,
    image: "8.jpg",
    title: " Lenove",
    price: 40,
    description:
      "لاب توب للالعاب G15-5511 من ديل الجيل11 انتل كور i7 11800H ثماني نواة، رام 16 جيجا SSD 512جيجا، كارت انفيديا جي فورس RTX3060 6 جيجا GDDR6 شاشة 15.6 بوصة،120هرتز،كيبورد اضاءة خلفية Ubuntu-رمادي شادو",
  },
  {
    id: 9,
    image: "9.jpg",
    title: " Lenove Three",
    price: 40,
    description:
      "لاب توب ديل G15-5511 للالعاب، انتل كور جيل11-i7 11800H ثماني نواة، RAM‏ 16 جيجابايت هارد SSD 512 جيجا، انفيديا جيفورس RTX3050 4 جيجا GDDR6 15.6 بوصة، 120هرتز، كيبورد باضاءة خلفية، ويندوز 10، رمادي",
  },
  {
    id: 10,
    image: "10.jpg",
    title: " Tablet 23",
    price: 50,
    description:
      "لاب توب الالعاب G15 5511 - انتل كور I7-11800H - رام 16 جيجابايت - هارد 512 جيجا SSD- VGA في جي ايه انيفيديا جي فورس RTX 3050 4 جيجابايت -15.6 بوصة فل اتش دي 120 هرتز - او اس اوبونتو - رمادي غامق",
  },
  {
    id: 11,
    image: "11.jpg",
    title: " Iphone 3 max ",
    price: 70,
    description:
      "لاب توب لينوفو ايديا باد للالعاب 3 ‏15IHU6‏ لون اسود داكن، كور i7-11370H‏،‏ RAM‏ 16 جيجابايت، SSD‏ 512 جيجابايت، جيفورس RTX 3050 Ti‏، دوس",
  },
  {
    id: 12,
    image: "12.jpg",
    title: " Hp three ",
    price: 70,
    description:
      "لاب توب لينوفو ايديا باد العاب 3 رايزن 5 5600H 6 نوى RAM 16 جيجابايت هارد SSD 1 تيرابايت كارت شاشة انفيديا جي فورس RTX 3050 Ti 4GB GDDR6 15.6 بوصة 1920×1080 IPS 120 هرتز كيبورد باضاءة خلفية ويندوز 11",
  },
  {
    id: 13,
    image: "13.jpg",
    title: " Lenove 48 ",
    price: 70,
    description:
      "لاب توب العاب اتش بي فيكتوس 15-fa0025nr جيل 12 انتل كور i5-12500‏ 12 نواة/رام 8 جيجابايت/SSD ‏512 جيجابايت/انفيديا RTX3050 ‏4 جيجابايت GDDR6‏/15.6 بوصة FHD (1920×1080)/كيبورد اضاءة خلفية/فضي ميكا",
  },
  {
    id: 14,
    image: "14.jpg",
    title: " Dell 29",
    price: 80,
    description:
      "لاب توب العاب اتش بي فيكتوس 15-fa0025nr جيل 12 انتل كور i5-12500‏ 12 نواة/رام 8 جيجابايت/SSD ‏512 جيجابايت/انفيديا RTX3050 ‏4 جيجابايت GDDR6‏/15.6 بوصة FHD (1920×1080)/كيبورد اضاءة خلفية/فضي ميكا",
  },
  {
    id: 15,
    image: "15.jpg",
    title: " Hp 57 ",
    price: 90,
    description:
      "لاب توب ليجون ال 5 I711800H/16 جيجابايت/ 1 تيرابايت SSD/3070 8 جيجابايت/ بلوتوث منخفض الطاقة",
  },
  {
    id: 16,
    image: "16.jpg",
    title: " tosheba ",
    price: 37,
    description:
      "لاب توب للالعاب G15-5511 من ديل الجيل11 انتل كور i7 11800H ثماني نواة، رام 16 جيجا SSD 512جيجا، كارت انفيديا جي فورس RTX3060 6 جيجا GDDR6 شاشة 15.6 بوصة،120هرتز،كيبورد اضاءة خلفية Ubuntu-رمادي شادو",
  },
  {
    id: 17,
    image: "17.jpg",
    title: " Samsung ",
    price: 32,
    description:
      "لاب توب العاب لينوفو ايديا باد 3 - انتل كور 11 i7-11370H وذاكرة RAM 16 جيجابايت وانفيديا جيفورس جي تي اكس 3050 4 جيجابايت GDDR6 و15.6 بوصة FHD (1920x1080) IPS ودوس - اسود شادو + ماوس العاب RGB",
  },
  {
    id: 18,
    image: "18.jpg",
    title: " Oppo ",
    price: 85,
    description:
      "لاب توب لينوفو ايديا باد جيمينج 3 15IHU6، شاشة 15.6 بوصة FHD، معالج كور i5 الجيل 11 11300H بتردد 3.10 جيجاهرتز، ذاكرة RAM 8 جيجابايت، هارد SSD سعة 256 جيجابايت، انفيديا RTX 3050 4 جيجابايت، اسود شادو",
  },
];

localStorage.setItem("products", JSON.stringify(products));
creation();
function creation() {
  if (mode == 0) {
    container.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      container.innerHTML += `
            <div  class="card">
            <div onclick="descri(${i})">
            <img class="card-img"  src="${products[i].image}">
            <h1 class="card-title">${products[i].title} </h1>
            <p class="card-description">${products[i].description}</p>
            </div>
       
            <button class="btn" onclick ="addtocart(${i})" type="button"> buy for<br>${products[i].price}</button>
        </div>`;
    }
  } else if (mode == 1) {
    container.innerHTML = "";
    for (let j = 6; j < 12; j++) {
      container.innerHTML += `
        <div onclick="descri(${j})" class="card">
        <img class="card-img " src="${products[j].image}">
        <h1 class="card-title ">${products[j].title} </h1>
        <p class="card-description">${products[j].description}</p>
        <button class="btn" onclick ="addtocart(${j})" type="button"> buy for<br>${products[j].price}</button>
    </div>`;
    }
  } else {
    container.innerHTML = "";
    for (let x = 12; x < 18; x++) {
      container.innerHTML += `
      <div onclick="descri(${x})"class="card">
      <img class="card-img " src="${products[x].image}">
      <h1 class="card-title">${products[x].title} </h1>
      <p class="card-description ">${products[x].description}</p>
      <button class="btn" onclick ="addtocart(${x})" type="button"> buy for<br>${products[x].price}</button>
  </div>
  `;
    }
  }
}


let product = [];
function addtocart(i) {
  if (product[i] == null) {
    product[i] = JSON.parse(JSON.stringify(products[i]));
    product[i].quantity = 1;
  }
  createproducts();
}
var totalprice;
function createproducts() {
  totalprice = 0;
  pro.innerHTML = "";
  product.forEach(function (value /*  products العناصر التى بداخلها */, key) {
    totalprice += value.price;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
  <div><img src="${value.image}"/></div>
  <div> ${value.title} </div>
  <div> ${value.price} </div>
  <div class="quan">
          <button id="min" onclick =" changequan(${key},${
        value.quantity - 1
      })">-</button>
          <p class="count">${value.quantity}</p>
          <button  onclick ="changequan(${key},
            ${value.quantity + 1})"id="blath">+</button>
      </div>`;
      pro.appendChild(newDiv);
    }
  });
  total.innerHTML = totalprice + " $ ";
}
function changequan(key, quantity) {
  if (quantity == 0) {
    delete product[key];
  } else {
    product[key].quantity = quantity;
    product[key].price = quantity * products[key].price;
  }
  createproducts();
}
function descri(i) {
  localStorage.setItem("id", i);
  location.href = `index1.html?id=${i}`;
}
