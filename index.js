const binaryToDecimal = (binary) => parseInt(binary, 2);

const binaryInput = document.getElementById('binary-input');
const decimalResult = document.getElementById('decimal-result');

binaryInput.addEventListener('input', (event) => {
  decimalResult.innerText = binaryToDecimal(binaryInput.value);
})
