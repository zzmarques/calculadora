const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
const buttons = document.querySelectorAll('.btn');
const allClear = document.getElementById('all-clear');
const clear =  document.getElementById('clear');
const del = document.getElementById('delete')
const result  = document.querySelector('.resul')
const posNeg = document.querySelector('.pn')
const operands = document.querySelectorAll('.op')

allClear.addEventListener('click', () => {
    previousOperand.innerText = ''
    currentOperand.innerText = ''
});

clear.addEventListener('click', () => {
    currentOperand.innerText = ''
});

del.addEventListener('click', () => {
    currentOperand.innerHTML =
    currentOperand.innerHTML.slice(0, -1)
});

posNeg.addEventListener('click', () => {
    const num1 = Number(currentOperand.innerText)
    if (currentOperand.innerText === '') {
        return
    }
    currentOperand.innerHTML = num1 * -1
})

result.addEventListener('click', () => {
    const num1 = Number(previousOperand.innerText.split(' ')[0])
    const num2 = Number(currentOperand.innerText)
    const previousValue = previousOperand.innerText.split(' ')[1]
    
    switch(previousValue) {
        case '+':
            adic(num1, num2)
            break
        case '-':
            sub(num1, num2)
            break
        case '/':
            div(num1, num2)
            break
        case '*':
            mult(num1, num2)
            break
    }
    
})

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === '.') {
            addDisplay(value)
        } else {
            processOperation(value)
        }
    });
});

operands.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const operation = e.target.innerText;
        changeOperation(operation)
    });
});

function addDisplay(value) {
    if (value === '.' && currentOperand.innerHTML.includes('.')){
        return
    }
    currentOperand.innerHTML += value;
}

function processOperation(value) {
    if (currentOperand.innerText === '' && previousOperand.innerText === '' ||      previousOperand.innerText !== '') {
        return
    }
    previousOperand.innerHTML = currentOperand.innerText + ' ' + value
    currentOperand.innerText = ''
}

function changeOperation(operation) {
    if (previousOperand.innerText != '') {
        previousOperand.innerText =
        previousOperand.innerText.slice(0, -1) + operation
    }
    
}

function adic(n1, n2) {
    currentOperand.innerHTML = n1 + n2
    previousOperand.innerHTML = ''
}

function sub(n1, n2) {
    currentOperand.innerHTML = n1 - n2
    previousOperand.innerHTML = ''
}

function div(n1, n2) {
    currentOperand.innerHTML = n1 / n2
    previousOperand.innerHTML = ''
}

function mult(n1, n2) {
    currentOperand.innerHTML = n1 * n2
    previousOperand.innerHTML = ''
}
