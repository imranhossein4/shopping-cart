// update input
function updateInput(product, price, isAdding) {
    const inputValue = document.getElementById(product + '-input');
    const inputNumber = parseInt(inputValue.value);
    if (isAdding == true) {
        inputValue.value = inputNumber + 1;
    }
    else if (inputNumber > 0) {
        inputValue.value = inputNumber - 1;
    }
    const totalTag = document.getElementById(product + '-total');
    const getTotal = totalTag.innerText;
    const total = inputValue.value * price;
    totalTag.innerText = total;
    const subTotal = document.getElementById('sub-total');
    const addTotal = calculate();
    subTotal.innerText = addTotal;
}
// calculate subtotal
function calculate() {
    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');
    const subtotal = parseFloat(phoneTotal.innerText) + parseFloat(caseTotal.innerText);
    return subtotal;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateInput('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInput('phone', 1219, false);
})
// case button
document.getElementById('case-plus').addEventListener('click', function () {
    updateInput('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateInput('case', 59, false);
})