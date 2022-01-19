var person = {
  firstName: 'Damien',
  lastName: 'Martinez',
  hobby: 'programming'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's full name is: ", fullName);

person.job = 'unemployed';
console.log("The person's current job is: ", person.job);

person.previousJob = 'recruiter';
console.log("The person's previous job is: ", person.previousJob);

console.log(person);
