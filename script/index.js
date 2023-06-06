let team = [
  {
    id: 1,
    img: "https://i.postimg.cc/nr5SNxdq/meezaan.jpg",
    name: "Meezaan Davids",
    role: "Project Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/XY8BH0sB/C12-Okuhle-Gwotiwe-1.jpg",
    name: "Okuhle Gxotiwe",
    role: "Team Leader",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/1ts3jCbs/C12-Cheslyn-Herman-1.jpg",
    name: "Cheslyn Herman",
    role: "Styling Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/yd963mqg/C12-C1-Ethan-Lesar-3.jpg",
    name: "Ethan Lesar",
    role: "Script Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/R0tWmqfW/C12-C1-Caryn-Lodewyk-2.jpg",
    name: "Caren Jane Lodeweyk",
    role: "Styling Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/PJxtKBFh/C12-Ayesha-Galant-Class1-1.jpg",
    name: "Ayesha Galant",
    role: "Script Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/8PqFx1RN/C12-Taahirah-Ismail-1.jpg",
    name: "Taahirah Ismail",
    role: "Styling Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 8,
    img: "https://i.postimg.cc/prrHK4sj/C12-C2-Lyle-Kepky-1.jpg",
    name: "Lyle Kepkey",
    role: "Script Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
  {
    id: 9,
    img: "https://i.postimg.cc/Nj5KQPY5/Waydin-Jochem-C12-C1-25-Apr23-2.jpg",
    name: "Wayden Jochem",
    role: "Script Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim possimus provident ut accusamus eum quis, voluptas ex cupiditate, laudantium incidunt, voluptatem ipsam reprehenderit iste placeat deserunt nisi corporis dolor.",
  },
];

let teamPlayers = document.getElementById("team-players");
team.forEach((data) => {
  teamPlayers.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${data.img}" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">${data.role}</h3>
    <p class="card-text">${data.desc}</p>
  </div>
</div>
    `;
});
