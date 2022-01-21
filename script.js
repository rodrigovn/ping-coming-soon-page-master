function validateEmail(val){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function errorpopup(input,btn,err,invalid){
  btn.addEventListener('click', ()=>{
  val = input.value;
  result = validateEmail(val);
  if(result == false){
    invalid.classList.remove("error-hide");
    invalid.classList.add("error-show");
    input.style.border = '1.5px solid red';
  }
  else{
    invalid.classList.remove("error-show");
    invalid.classList.add("error-hide");
    input.style.border = '1.5px solid green';
  }
  })
}

var input,btn,err,invalid,answer;
input = document.getElementById('input');
btn = document.getElementById('button-notify');
invalid = document.getElementById('invalid-email-msg');
errorpopup(input,btn,err,invalid);