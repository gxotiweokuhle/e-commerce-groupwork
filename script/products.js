const products = [
  {
    id: 1,
    Image: "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
    name: "Air Pods Max",
    price: "1000",
    quantity: 5,
  },
  {
    id: 2,
    Image: "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
    name: "Beats by Dr Dre",
    price: "600",
    quantity: 5,
  },
  {
    id: 3,
    Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
    name: `MacBook Pro`,
    price: `1200`,
    quantity: 5,
  },
  {
    id: 4,
    Image: "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
    name: `MacBook Air`,
    price: `700`,
    quantity: 5,
  },
  {
    id: 5,
    Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
    name: `iPhone 11`,
    price: `500`,
    quantity: 5,
  },
  {
    id: 6,
    Image: "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
    name: `iPhone 11 Pro`,
    price: `800`,
    quantity: 5,
  }
  
];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${product.Image}" alt="${product.name}" id="product-imgs">
      <h3>${product.name}</h3>
      <p>${product.price}</p>        
      <button onclick="addToCart(${product.id})" class="addbtn">Add to cart</button>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = JSON.parse(localStorage.getItem("Products")) || [];

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function removeFromCart(index) {
  let removedProduct = cart.splice(index, 1)[0];
  removedProduct.quantity++;
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-body");
  localStorage.setItem("Products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <span>${product.name}</span>
      <span>${product.price}</span>
      <input type="number" placeholder="1" min="1" width="50px" height="40px">
      <p>Total $ ${product.price}</p>
      <button onclick="removeFromCart(${index})" class="rembutton">✖</button>
    `;
    cartContainer.appendChild(cartItem);
  });
    calculateTotal();
}

function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0 
  cart.forEach(item => {
    total +=  eval(item.price)
  })
  // let total = cart.reduce((accumulate, product) => {
  //   let price = Number(product.price.replace("$", ""));
  //   return accumulate = price * quantity;
  // }, 0);
  totalElement.textContent = `$${total}`;
}

displayProducts();

updateCart();
