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
      position:"Ssecetary of the Air Force",
      leaderName: "Frank Kendall",
      imageUrl:
      "https://media.defense.gov/2021/Aug/13/2002831000/1200/1200/0/210811-F-JJ904-007.JPG"
    },
    {
      position:"Under Sec. Of the Air Force",
      leaderName:"Melissa G. Dalton",
      imageUrl:
      "https://media.defense.gov/2024/Jun/05/2003478824/1200/1200/0/240605-F-AF100-1001.JPG"
    },
    {
      position:"Chief of Staff of the Air Force",
      leaderName:" David W. Allvin",
      imageUrl:
      "https://media.defense.gov/2023/Nov/14/2003339893/1200/1200/0/231114-F-AF000-1055.JPG"
    },
    {
      position:"Vice Chief of Staff of the Air",
      leaderName:"James C. Jim Slife",
      imageUrl:
      "https://media.defense.gov/2023/Dec/27/2003366057/1200/1200/0/231227-F-AF000-1001.JPG"
    },
    {
        position:"Chief Master Sergeant",
        leaderName:"David A. Flosi",
        imageUrl:"https://media.defense.gov/2024/Mar/08/2003409711/1200/1200/0/240227-F-DQ193-9013.JPG"
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