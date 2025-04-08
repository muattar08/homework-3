let num1 = parseFloat(prompt("Введите первое число:")); 
let operator = prompt("Введите оператор (+, -, *, /):");  
let num2 = parseFloat(prompt("Введите второе число:"));  

switch (operator) {
case '+':  
alert(num1 + num2); 
break;

case '-': 
alert(num1 - num2); 
break;

case '*':  
alert(num1 * num2); 
break;

case '/':  
if (num2 !== 0) {
alert(num1 / num2); 
} else {
alert('Ошибка: деление на ноль'); 
}
break;

default:  
alert('Неверный оператор. Введите +, -, *, или /'); 
}
