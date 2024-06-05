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
      position:"Chief of Naval Operations",
      leaderName: "Adm. Lisa Franchetti",
      imageUrl:
      "https://media.defense.gov/2024/Mar/08/2003409220/600/400/0/240306-D-IF881-4002.JPG"
    },
    {
      position:"Vice Chief of Naval Operations",
      leaderName:"James W. Kilby",
      imageUrl:
      "https://media.defense.gov/2024/Jan/05/2003369258/600/400/0/240105-N-RU810-1002.JPG"
    },
    {
      position:"Secetary of the Navy",
      leaderName:"Carlos Del Toro",
      imageUrl:
      "https://media.defense.gov/2021/Aug/13/2002831192/600/400/0/210813-N-JI086-0001.JPG"
    },
    {
      position:"Chief of Naval Personnel",
      leaderName:"Rick Cheeseman",
      imageUrl:
      "https://media.defense.gov/2022/Jun/03/2003011280/600/400/0/220603-N-NO101-903.JPG"
    },
    {
      position:"Under Secetary of the Navy",
      leaderName:"Erik K. Raven",
      imageUrl:"https://media.defense.gov/2022/Apr/13/2002976544/600/400/0/220413-N-NO101-900.JPG"
    },
    {
        position:"Master Chief Petty Officer",
        leaderName:"James M. Honea",
        imageUrl:"https://media.defense.gov/2022/Sep/13/2003075222/600/400/0/220912-N-NO101-902.JPG"
    },
    {
        position:"Energy, Installations, and Environment/Chief Sustainability Officer",
        leaderName:"Meredith Berger",
        imageUrl:"https://media.defense.gov/2022/Aug/10/2003053396/600/400/0/220810-N-NO101-900.JPG"
    },
    {
        position:"Manpower & Reserve Affairs",
        leaderName:"Franklin R. Parker",
        imageUrl:"https://media.defense.gov/2023/Apr/24/2003206777/600/400/0/230215-N-RU810-1008.JPG"
    },
    {
        position:"Research, Development and Acquisition",
        leaderName:"Nickolas H. Guertin",
        imageUrl:"https://media.defense.gov/2024/Apr/04/2003429554/600/400/0/240404-N-RU810-1001.JPG"
    },
    {
        position:"Financial Management & Comptroller",
        leaderName:"Russell Rumbaugh",
        imageUrl:"https://media.defense.gov/2023/Jan/25/2003149906/600/400/0/230120-N-TY650-1003.JPG"
    },
    {
        position:"General Counsel, Department of the Navy",
        leaderName:"John P. Coffey",
        imageUrl:"https://media.defense.gov/2022/Jun/09/2003014815/600/400/0/220609-N-NO999-0001.JPG"
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