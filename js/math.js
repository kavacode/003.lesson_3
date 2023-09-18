let firstNumber = parseFloat(prompt('Please, enter first number:'));
let secondNumber = parseFloat(prompt('Please, enter second number:'));
if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {

	let sum = firstNumber + secondNumber;
	let diff = firstNumber - secondNumber;
	let prod = firstNumber * secondNumber;
	let quot = firstNumber / secondNumber;

	alert(firstNumber + " + " + secondNumber + " = " + sum);
	alert(firstNumber + " - " + secondNumber + " = " + diff);
	alert(firstNumber + " * " + secondNumber + " = " + prod);
	alert(firstNumber + " / " + secondNumber + " = " + quot);
}
else {
	alert('Please, try again');
}