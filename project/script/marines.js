const year= document.getElementById("currentyear").textContent = new Date().getFullYear();
let today = document.getElementById("lastmodified").textContent = new Date();

const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('show')
  hamButton.classList.toggle('show')
})

const leaders = [
    {
      position:"Commandant of the Marine Corps",
      leaderName: "Eric M. Smith",
      imageUrl:
      "https://media.defense.gov/2021/Oct/19/2002875882/-1/-1/0/211012-M-SG166-1001.JPG"
    },
    {
      position:"Assistant Commandant of the Marine Corps",
      leaderName:"Christopher J. Mahoney",
      imageUrl:
      "https://media.defense.gov/2023/Nov/30/2003349401/-1/-1/0/231130-M-MO231-0001.JPG"
    },
    {
      position:"Sergeant Major of the Marine Corps",
      leaderName:"Carlos A. Ruiz",
      imageUrl:
      "https://media.defense.gov/2023/Aug/10/2003278646/-1/-1/0/230804-M-SG166-1002.JPG"
    }
    
]    
  
createCards(leaders)
  
function createCards(leaderList) {
    const container = document.querySelector(".leaders");
    leaderList.forEach(function (leader)
    {
      container.innerHTML += `<div class="leader-card">
      <h2>${leader.leaderName}</h2>
      <ul>
        <li><strong><span class="list-title">Position:</span></strong> ${leader.position}</li>
      </ul>
      <figure>
        <img src="${leader.imageUrl}" alt= "${leader.leaderName} Leader" loading="lazy" width="400" height="400">
      </figure>
    </div>`
}
)};