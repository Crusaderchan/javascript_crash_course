alert('Some alert message');
const age = prompt('Enter your age:');

alert(`Your age is ${age}`); 

const radius = prompt('Please, enter the radius of circle');
alert(`Area of the circle is ${3.14 * (radius * radius)} `);

const distance = prompt('Enter the distance in km between two cities ');
const time = prompt('Enter the amount of time need to reach the destination');
alert(`You need speed to arrive on time: ${distance / time} `);


const rate = 1.09;
const dollars = prompt('Enter the dollar amount');
alert(`Your the dollar amount in euros ${dollars / rate} `);


const size_flash = prompt('Enter the size of your flash drive in GB');
alert(`You can save an 820MB file ${(size_flash * 1024) / 820} times on this flash drive`);