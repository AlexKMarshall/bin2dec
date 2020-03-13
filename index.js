const BINARY_REGEX = /^[01]*$/;

const validateBinary = (binary) => BINARY_REGEX.test(binary);
const binaryToDecimal = (binary) => parseInt(binary, 2);

const binaryInput = document.getElementById('binary-input');
const resultContainer = document.getElementById('result-container');
const decimalResult = document.getElementById('result-value');
const errorContainer = document.getElementById('error-container');



binaryInput.addEventListener('input', (event) => {
  const binary = binaryInput.value;
  if (!validateBinary(binary)) {
    clearResult();
    showError();
    return;
  }
  hideError();
  showResult(binaryToDecimal(binaryInput.value));
})

function showResult(value) {
  decimalResult.innerText = value;
  resultContainer.classList.add('show');
}

function clearResult() {
  decimalResult.innerText = null;
  hideResult();
}

function hideResult() {
  resultContainer.classList.remove('show');
}

function showError() {
  errorContainer.classList.add('show');
}

function hideError() {
  errorContainer.classList.remove('show');
}
