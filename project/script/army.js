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
      position:"Chief of Staff of the Army",
      leaderName: "General Randy A. Goerge",
      imageUrl:
      "https://www.army.mil/e2/images/rv7/leaders/official/george_575.jpg"
    },
    {
      position:"Vice Chief of Staff of the Army",
      leaderName:"General James J. Mingus",
      imageUrl:
      "https://www.army.mil/e2/images/rv7/leaders/official/mingus_575.jpg"
    },
    {
      position:"Secetary of the Army",
      leaderName:"Hon. Christine Wormuth",
      imageUrl:
      "https://www.army.mil/e2/images/rv7/leaders/official/wormuth_575.jpg"
    },
    {
      position:"Sergeant Major of the Army",
      leaderName:"Michael R. Weimer",
      imageUrl:
      "https://www.army.mil/e2/images/rv7/leaders/official/weimer_575.jpg"
    },
    {
      position:"Under Secetary of the Army",
      leaderName:"Hon Gabe Camarillo",
      imageUrl:"https://www.army.mil/e2/images/rv7/leaders/official/camarillo_575.jpg"
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