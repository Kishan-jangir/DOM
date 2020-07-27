

/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
var row1 = document.querySelectorAll('.row')[0];
var label1 = document.createElement("label");
label1.innerHTML = "Username : ";
row1.prepend(label1);

var row1 = document.querySelectorAll('.row')[1];
var label1 = document.createElement("label");
label1.innerHTML = "Password : ";
row1.prepend(label1);

var row1 = document.querySelectorAll('.row')[2];
var label1 = document.createElement("label");
label1.innerHTML = "Confirm password : ";
row1.prepend(label1);
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an
  error message next to the entry if it does not have any
  text entered.

*/


const form = document.querySelector('#registrationForm');
var userName = document.querySelector('.col #username');
var userNameBox = document.querySelectorAll('.col')[0];
var password = document.querySelector('.col #password');
var passwordBox = document.querySelectorAll('.col')[1];
var confirmPassword = document.querySelector('.col #confirmPassword');
var confirmPasswordBox = document.querySelectorAll('.col')[2];

form.onsubmit = function(event){
  event.preventDefault();
  const textValue = userName.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if(textValue === ''){
    var reqText = document.createElement("p");
    reqText.innerHTML =  "Username can't be empty !";
    userNameBox.append(reqText);
  }
  else if(passwordValue === ''){
    var reqText = document.createElement("p");
    reqText.innerHTML =  "Username can't be empty !";
    passwordBox.append(reqText);
  }

  else if(confirmPasswordValue === ''){
    var reqText = document.createElement("p");
    reqText.innerHTML =  "Username can't be empty !";
    confirmPasswordBox.append(reqText);
  }
  
  else if(passwordValue != confirmPasswordValue){
    window.alert("Password Doesn't match !")
  }

}




/*

  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

function checkform()
{
    var f = document.forms["registrationForm"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) {
          cansubmit = false;
        }
    }

    if (cansubmit) {
        document.getElementById('submitbutton').disabled = false;
    }

    else {
        document.getElementById('submitbutton').disabled = 'disabled';
    }
}



/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
