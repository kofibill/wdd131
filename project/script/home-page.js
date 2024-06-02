const year= document.getElementById("currentyear").textContent = new Date().getFullYear();
let today = document.getElementById("lastmodified").textContent = new Date();

const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})
