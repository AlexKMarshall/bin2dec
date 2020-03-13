const BINARY_REGEX = /^[01]*$/;

const validateBinary = (binary) => BINARY_REGEX.test(binary);
const binaryToDecimal = (binary) => parseInt(binary, 2);

const binaryInput = document.getElementById('binary-input');
const decimalResult = document.getElementById('decimal-result');


binaryInput.addEventListener('input', (event) => {
  const binary = binaryInput.value;
  if (!validateBinary(binary)) {
    console.log("not valid");
    decimalResult.innerText = null;
  }
  decimalResult.innerText = binaryToDecimal(binaryInput.value);
})
