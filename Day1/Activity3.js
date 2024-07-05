// Activity3

const today = new Date();
const birthday = new Date('1982-03-23');
const difInMil = birthday - today;
const difInDays = Math.ceil(difInMil / (1000 * 60 * 60 * 24));

console.log(`There are ${difInDays} days left until your birthday.`);