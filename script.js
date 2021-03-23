const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

//adding event listener...
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});

function calculate(event){
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '='){
        if (display.value !== ''){
            display.value = eval(display.value);
        }
    }else if (clickedButtonValue === 'AC'){
        display.value = '';
    }else if (clickedButtonValue === '⌫'){
         display.value = display.value.substring(0,display.value.length -1);
    }else {
        display.value += clickedButtonValue;
    }
}