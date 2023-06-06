let products = [
  {
    id: 1,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 1,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 2,
    quantity: 2,
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 3,
    quantity: 3,
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 4,
    quantity: 4,
  },
  {
    id: 5,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 5,
    quantity: 5,
  },
  {
    id: 6,
    image:
      "https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
    name: "",
    desc: "",
    price: 6,
    quantity: 6,
  },
];

function displayProducts() {
  let ourProducts = document.getElementById("products");
  products.forEach((product) => {
    let productElement = document.createElement("div");
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" >
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <p> R ${product.price}</p>        
          <button onclick="addToCart(${product.id})" >Add to cart</button>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = [];

function addToCart(productId) {
  let cartContainer = document.getElementById("cart-container");

  let product = products.find((product) => product.id === productId);
  localStorage.setItem("Products", JSON.stringify(cart));

  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function updateCart() {
  let cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";
  //  locaorage.getItem("Products", JSON.stringify(cart));lSt
  cart.forEach((product) => {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `<span>${product.name}</span>
          <span>${product.price}</span>
          `;
    cartContainer.appendChild(cartItem);
  });
}

// function setItem() {
//   localStorage.setItem("Products", JSON.stringify(cart));
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

displayProducts();
