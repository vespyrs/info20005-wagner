
var cardInput = document.getElementById('cardnum');
var cardNameInput = document.getElementById('cname');
var expirationInput = document.getElementById('expiry');
var securityInput = document.getElementById('security');

cardInput.addEventListener('keyup', validateCard);
cardNameInput.addEventListener('keyup', validateCardName);
expirationInput.addEventListener('keyup', validateExpiry);
securityInput.addEventListener('keyup', validateSecurity);

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

function validateCardValue(target,value) {
  var patt = new RegExp("\\d{16}");
  if(value.match(patt)){
    markAsValid(target);
  } else {
    markAsInvalid(target);
  }
}

function validateSecurityValue(target,value) {
  var patt = new RegExp("\\d{3}");
  if(value.match(patt)){
    markAsValid(target);
  } else {
    markAsInvalid(target);
  }
}

function validateExpiryValue(target,value) {
  var patt = new RegExp("^(0[1-9]|1[0-2])\\/?([0-9]{2})$");
  if(value.match(patt)){
    markAsValid(target);
  } else {
    markAsInvalid(target);
  }
}

// function validateExpiryValue {
    
// }


function validateCard() {
  var target = cardInput;
  var targetValue = target.value;
  validateCardValue(target,targetValue)
}

function validateCardName() {
  var target = cardNameInput;
  var targetValue = target.value;
  validateTextValue(target,targetValue)
}

function validateExpiry() {
  var target = expirationInput;
  var targetValue = target.value;
  validateExpiryValue(target,targetValue)
}

function validateSecurity() {
  var target = securityInput;
  var targetValue = target.value;
  validateSecurityValue(target,targetValue)
}

function validateFormPayment() {
    if(cardInput.classList.contains("valid") || 
    cardNameInput.classList.contains("valid") || 
    expirationInput.classList.contains("valid") || 
    securityInput.classList.contains("valid")) {
        document.getElementById("contact-info-form").submit();
    }
    else {
        return false; 
    }
}