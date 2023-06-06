let products = [
  {
    id: 1,
    Image: "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
    name: `Air Pods Max`,
    price: `$1000`,
  },
  {
    id: 2,
    Image: "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
    name: `Beats by Dr Dre`,
    price: `$600`,
  },
  {
    id: 3,
    Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
    name: `MacBook Pro`,
    price: `$1200`,
  },
  {
    id: 4,
    Image: "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
    name: `MacBook Air`,
    price: `$700`,
  },
  {
    id: 5,
    Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
    name: `iPhone 11`,
    price: `$500`,
  },
  {
    id: 6,
    Image: "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
    name: `iPhone 11 Pro`,
    price: `$800`,
  },
];
let productsCart = document.getElementById("products");
products.forEach((data) => {
  productsCart.innerHTML += `
  <div class="Cart-List" style="width:200px, text-align:center;">
    <img class="card-img-top" src="${data.Image}" alt="Card image">
    <div class="card-body text-center">
      <h4 class="card-title">${data.name}</h4>
      <p class="card-price">${data.price}</p>
      <button onclick="addToCart(${data.id})" id="addbtn">Add to cart</button>
    </div>`;
    
});
  
  let cart = [];
  
  function addToCart(productId) {
    let cartContainer = document.getElementById("cart-body");
    cartContainer = ""
    let product = products.find((product) => product.id === productId);
    localStorage.setItem("Products", JSON.stringify(cart));
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
    }
  }
  
  function updateCart() {
      let cartContainer = document.getElementById("cart-body");
      cartContainer.innerHTML = "";
  
      cart.forEach(product => {
          let cartItem = document.createElement("div")
          cartItem.innerHTML = `<span>${product.name}</span>
          <span>${product.price}</span>
          `;
    cartContainer.appendChild(cartItem);
  });
}

// function setItem() {
 //localStorage.setItem("Products", JSON.stringify(cart));
// }

function loadItems() {
  let loadProducts = localStorage.getItem("Products");
  if (loadProducts) {
    cart = JSON.parse(loadProducts);
    updateCart();
  }
}

window.addEventListener("load", function () {
  loadItems();
});

// displayProducts();
