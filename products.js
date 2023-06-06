const products = [
    {
      id: 1,
      image:"https://i.postimg.cc/jSHZ1BFG/device-mockup-gradient-laptop-mockup-laptop.jpg",
      name: "A name of a laptop",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit necessitatibus alias dicta, nobis provident, adipisci recusandae dolorem ipsam tempora architecto consectetur deserunt aliquam error reprehenderit officiis quibusdam est dolorum laudantium!",
      price: "$1300",
      quantity: 1,
    },
    {
      id: 2,
      image:"https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
      name: "MacBook Air",
      desc: "The MacBook Air is Apple's ultra-portable laptop, renowned for its thin and lightweight design, making it ideal for users on the go. With a long battery life, brilliant Retina display, and powerful M1 chip, it offers a seamless and efficient computing experience for everyday tasks and productivity.",
      price: "$700",
      quantity: 2,
    },
    {
      id: 3,
      image:"https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
      name: "Air Pods Max",
      desc: "AirPods Max are Apple's premium over-ear headphones, combining high-fidelity audio with advanced features such as active noise cancellation, spatial audio, and seamless integration with Apple devices, offering a luxurious and immersive listening experience.",
      price: "$1000",
      quantity: 3,
    },
    {
      id: 4,
      image:"https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
      name: "Beats by Dr Dre",
      desc: "Beats by Dr. Dre are renowned headphones and audio products known for their stylish design, powerful sound quality, and deep bass. With their signature Beats sound, they offer a dynamic and immersive listening experience for music enthusiasts and professionals alike.",
      price: "$600",
      quantity: 4,
    },
    {
      id: 5,
      image:"https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
      name: "iPhone 11",
      desc: "The iPhone 11 is a powerful and feature-packed smartphone from Apple, featuring a dual-camera system, A13 Bionic chip, and an immersive Liquid Retina display. With its impressive performance, advanced photography capabilities, and all-day battery life, it delivers a premium iPhone experience at a more affordable price point.",
      price: "$500",
      quantity: 5,
    },
    {
      id: 6,
      image:"https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
      name: "Macbook Pro",
      desc: "The MacBook Pro is Apple's flagship laptop, known for its powerful performance, sleek design, and cutting-edge features. With its high-resolution Retina display, advanced processors, and innovative Touch Bar, it offers professionals and creative individuals a versatile and efficient computing experience.",
      price: "$1200",
      quantity: 6,
    },
  ];
  
  function displayProducts() {
    const ourProducts = document.getElementById("products");
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" id="product-imgs" >
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <p>${product.price}</p>        
          <button onclick="addToCart(${product.id})" id="addbtn" >Add to cart</button>`;
      ourProducts.appendChild(productElement);
    });
  }
  
  const cart = [];
  
  function addToCart(productId) {
    const cartContainer = document.getElementById("cart-container");
    const product = products.find((product) => product.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
    }
  }
  
  function updateCart() {
      const cartContainer = document.getElementById("cart-container");
      cartContainer.innerHTML = "";
  
      cart.forEach(product => {
          const cartItem = document.createElement("div")
          cartItem.innerHTML = `<span>${product.name}</span>
          <span>${product.price}</span>
          `
          cartContainer.appendChild(cartItem)
      }) 
  }
  
  displayProducts();