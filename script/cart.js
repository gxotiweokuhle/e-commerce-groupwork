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
  let productsCart = document.getElementById("cart-body");
  products.forEach((data) => {
    productsCart.innerHTML += `
    <div class="Cart-List" style="width:200px, text-align:center;">
      <img class="card-img-top" src="${data.Image}" alt="Card image">
      
      <div class="card-body text-center">
        <h4 class="card-title ">${data.name}</h4>
        <p class="card-price">${data.price}</p>
      </div>`;
  });
