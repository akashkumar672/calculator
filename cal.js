function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const expression = display.value;
        if (expression.length === 0) {
            alert('Please enter a calculation.');
            return;
        }

        let valid = true;
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            if (!('0123456789+-*/.'.includes(char))) {
                valid = false;
                break;
            }
        }

        if (!valid) {
            alert('Invalid characters in expression.');
            clearDisplay();
            return;
        }

        const result = eval(expression);
        display.value = result;
    } catch (error) {
        alert('Invalid calculation. Please try again.');
        clearDisplay();
    }
}
