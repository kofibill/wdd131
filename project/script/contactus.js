const year= document.getElementById("currentyear").textContent = new Date().getFullYear();
let today = document.getElementById("lastmodified").textContent = new Date();

const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('show')
  hamButton.classList.toggle('show')
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store data in local storage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);

    // Display a message or clear the form
    alert('Your message has been saved!');
    document.getElementById('contactForm').reset();
});
