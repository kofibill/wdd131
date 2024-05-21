const year= document.getElementById("currentyear").textContent = new Date().getFullYear();
let today = document.getElementById("lastmodified").textContent = new Date();

const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('show')
  hamButton.classList.toggle('show')
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
  }
];

createCards(temples)

function createCards(templeList) {
  const container = document.querySelector(".temples");
  templeList.forEach(function (temple)
  {
    container.innerHTML += `<div class="temple-card">
    <h2>${temple.templeName}</h2>
    <ul>
      <li><strong><span class="list-title">Location:</span></strong> ${temple.location}</li>
      <li><strong><span class="list-title">Dedicated:</span></strong> ${temple.dedicated}</li>
      <li><strong><span class="list-title">Size:</span></strong> ${temple.area}</li>
    </ul>
    <figure>
      <img src="${temple.imageUrl}" alt= "${temple.templeName} Temple" loading="lazy" width="400" height="400">
    </figure>
  </div>`
}
)};

document.querySelector(".homebutton").addEventListener('click', function() {
  document.querySelector(".title").textContent = "Home"
  let container = document.querySelector(".temples")
  container.innerHTML = '';
  createCards(temples);
})
document.querySelector(".oldbutton").addEventListener('click', function() {
  document.querySelector(".title").textContent = "Old"
  let container = document.querySelector(".temples")
  container.innerHTML = '';
  const oldTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900);
  createCards(oldTemples);
})
document.querySelector(".newbutton").addEventListener('click', () => {
  document.querySelector(".title").textContent = "New"
  let container = document.querySelector(".temples")
  container.innerHTML = '';
  const newTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000);
  createCards(newTemples);
})
document.querySelector(".largebutton").addEventListener('click', () => {
  document.querySelector(".title").textContent = "Large"
  let container = document.querySelector(".temples")
  container.innerHTML = '';
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  createCards(largeTemples);
})
document.querySelector(".smallbutton").addEventListener('click', () => {
  document.querySelector(".title").textContent = "Small"
  let container = document.querySelector(".temples")
  container.innerHTML = '';
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createCards(smallTemples);
})
