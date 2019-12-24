/**
 * Form Validation using JS
 * 
 */

var form = document.getElementById('register-details');
var fullName = document.getElementById('name');
var email = document.getElementById('email');
var gender = document.getElementById('gender');

// Event Listener

form.addEventListener('submit', validateForm);
fullName.addEventListener('keyup', nameValidate);
fullName.addEventListener('kedown', nameValidate);
email.addEventListener('keyup', emailValidate);
gender.addEventListener('focus', genderValidate);

function validateForm(e) {
    e.preventDefault();
    var fullName = document.getElementById('name');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');

    console.log(gender);

    if (fullName.value.trim() == '') {
        document.getElementById('spanName').hidden = false;
        document.getElementById('spanName').style.color = '#FF0000';
        document.getElementById('spanName').textContent = "Please enter name";
        // return false
    }

    if (email.value.trim() == '' || !validateEmail(email.value)) {
        // console.log("13")
        document.getElementById('spanEmail').hidden = false;
        document.getElementById('spanEmail').style.color = '#FF0000';
        document.getElementById('spanEmail').textContent = "Please enter valid email";
        // return false
    }

    if (gender.selectedIndex < 1) {
        // console.log(gender.selectedIndex);
        document.getElementById('spanGender').hidden = false;
        document.getElementById('spanGender').style.color = '#FF0000';
        document.getElementById('spanGender').textContent = "Please Select Gender";
        // return false
    }

    // return true   

}

function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


function nameValidate(e) {
    nameValue = e.target.value;
    if (nameValue.trim() == '') {
        document.getElementById('spanName').hidden = false;
        document.getElementById('spanName').style.color = '#FF0000';
        document.getElementById('spanName').textContent = "Please enter name";
    } else {
        document.getElementById('spanName').hidden = true;
    }

}

function emailValidate(e) {
    email = e.target.value;
    if (email.trim() == '' || !validateEmail(email.value)) {
        // console.log("13")
        document.getElementById('spanEmail').hidden = false;
        document.getElementById('spanEmail').style.color = '#FF0000';
        document.getElementById('spanEmail').textContent = "Please enter valid email";
        // return false
    } else {
        document.getElementById('spanEmail').hidden = true;
    }
}

function genderValidate(e) {
    if (e.target.selectedIndex < 1) {
        document.getElementById('spanGender').hidden = false;
        document.getElementById('spanGender').style.color = '#FF0000';
        document.getElementById('spanGender').textContent = "Please Select Gender";
    }
    else{
        document.getElementById('spanGender').hidden = true
    }

}