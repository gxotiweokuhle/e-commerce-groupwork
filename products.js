const products = [
  {
        id: 1,
    Image: "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
    name: `Air Pods Max`,
    price: `$1000`,
    quantity: 1,
  },
  {
    id: 2,
    Image: "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
    name: `Beats by Dr Dre`,
    price: `$600`,
    quantity: 2,
  },
  {
    id: 3,
    Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
    name: `MacBook Pro`,
    price: `$1200`,
    quantity: 3,
  },
  {
    id: 4,
    Image: "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
    name: `MacBook Air`,
    price: `$700`,
    quantity: 4,
  },
  {
    id: 5,
    Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
    name: `iPhone 11`,
    price: `$500`,
    quantity: 5,
  },
  {
    id: 6,
    Image: "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
    name: `iPhone 11 Pro`,
    price: `$800`,
    quantity: 6,
  },
];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
        <img src="${product.Image}" alt="${product.name}" >
        <h3>${product.name}</h3>
        <p> R ${product.price}</p>        
        <button onclick="addToCart(${product.id})" id="addbtn">Add to cart</button>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = JSON.parse(window.localStorage.getItem("Products")) || [];

function addToCart(productId) {
  const cartContainer = document.getElementById("cart-container");
  const product = products.find((product) => product.id === productId);
  window.localStorage.setItem("Items", JSON.stringify(cart))
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

// function removeFromCart() {
//   let remove = document.getElementById('rembutton')
//   for ( let i = 0; i < remove.length; i++){
//     let rbutton =  remove[i]
//     rbutton.addEventListener("click", function(event){
//       let rbuttonClicked = event.target;
//       rbuttonClicked.remove()
//       updateCart();
//     })
//   }
// }

function updateCart() {
    const cartContainer = document.getElementById("cart-body");
    localStorage.setItem("Items", JSON.stringify(cart))
    cartContainer.innerHTML = "";
    // localStorage.setItem("Items", JSON.stringify(cart))
    cart.forEach(product => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `<span>${product.name}</span>
        <span>${product.price}</span>
        <input id="inputFeet" type="number" placeholder="1"
  oninput="lengthConverter(this.value)" onchange="lengthConverter(this.value)" min="1" width="50px" height="40px">
</p>
<p>Total $ <span id="results"></span></p>
        <button onclick="removeFromCart()" id="rembutton">✖</button>
        `
        cartContainer.appendChild(cartItem)
    }) 
}

displayProducts();

function lengthConverter(valNum) {
  document.getElementById("results").innerHTML = valNum * 1000;
}

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
