const email = document.getElementById('email')
const alertmessage = document.getElementById('alertmessageid');
const red_color = alertmessage.style.color

function test() {
    ValidateEmail(email)
}

function ValidateEmail(input) {

    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (input.value.match(validRegex)) {
  
      alertmessage.textContent = "Nice"
      alertmessage.style.color = 'green'
  
      return true;
  
    } else {

      alertmessage.textContent = "L'adresse email est invalide"
      alertmessage.style.color = red_color
  
      return false;
  
    }
  
  }