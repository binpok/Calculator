document.getElementById('calculator').addEventListener('click', function (event) {
    if (event.target.matches('button')) {
      handleButtonClick(event.target.innerText);
    }
  });

  function handleButtonClick(value) {
    const display = document.getElementById('display');
    if (value === '=') {
      let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
      display.value = eval(expression);
    } else if (value === 'C') {
      display.value = '';
    } else if (value === 'Erase') {
      eraseLast();
    } else {
      display.value += value;
    }
  }

  function eraseLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }