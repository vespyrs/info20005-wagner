var countryInput = document.getElementById('country');
var firstNameInput = document.getElementById('fname');
var lastNameInput = document.getElementById('lname');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('add1');
var suburbInput = document.getElementById('suburb');
var stateInput = document.getElementById('state');

countryInput.addEventListener('keyup', validateCountry);
firstNameInput.addEventListener('keyup', validateFirstName);
lastNameInput.addEventListener('keyup', validateLastName);
phoneInput.addEventListener('keyup', validatePhone);
addressInput.addEventListener('keyup', validateAddress);
suburbInput.addEventListener('keyup', validateSuburb);
stateInput.addEventListener('keyup', validateState);

function markAsValid(target){
  target.classList.add("valid");
  target.classList.remove("invalid");
}

function markAsInvalid(target){
  target.classList.add("invalid");
  target.classList.remove("valid");
}

function validateTextValue(target,value) {
  if(value !== ''){
    markAsValid(target);
  } else {
    markAsInvalid(target);
  }
}

function validatePhoneValue(target,value) {
  var patt = new RegExp("(\\(+61\\)|\\+61|\\(0[1-9]\\)|0[1-9])?( ?-?[0-9]){6,9}");
  if(value.match(patt)){
    markAsValid(target);
  } else {
    markAsInvalid(target);
  }
}

function validateCountry() {
  var target = countryInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateFirstName() {
  var target = firstNameInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateLastName() {
  var target = lastNameInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validatePhone() {
  var target = phoneInput;
  var targetValue = target.value;
  validatePhoneValue(target,targetValue)
}

function validateAddress() {
  var target = addressInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateSuburb() {
  var target = suburbInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateState() {
  var target = stateInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateForm() {
    if(countryInput.classList.contains("valid") || 
    firstNameInput.classList.contains("valid") || 
    lastNameInput.classList.contains("valid") || 
    phoneInput.classList.contains("valid") ||
    addressInput.classList.contains("valid") ||
    suburbInput.classList.contains("valid") ||
    stateInput.classList.contains("valid")) {
        document.getElementById("contact-info-form").submit();
    }
    else {
        return false; 
    }
}