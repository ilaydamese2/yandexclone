
const inputField = document.querySelector('#translator-input');

const outputField = document.querySelector('#translated');


inputField.addEventListener('input', translateText);


function translateText() {
 
  const inputText = inputField.value;

  const outputText = reverseText(inputText);
  
  outputField.textContent = outputText;
}

function reverseText(text) {
  return text.split('').reverse().join('');
}
