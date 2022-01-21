function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var hello = getGreeting('Damien');
console.log(hello);

function addAndMultiplyBy5(num1, num2) {
  var sum = num1 + num2;
  return sum * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('result is', result);

function multiplyAndDivideBy5(num1, num2) {
  var product = num1 * num2;
  return product / 5;
}

var divisionResult = multiplyAndDivideBy5(35, 10);
console.log('The result is', divisionResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('the difference is', difference);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('The cicumference is ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Damien', 'Martinez');
console.log('Full name', fullName);

function cube(number) {
  return number ** 3;
}

var cubeResult = cube(5);
console.log('The cube result is', cubeResult);
