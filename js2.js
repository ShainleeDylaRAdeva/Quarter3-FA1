const firstname = prompt("Enter your first name: ");
const lastname = prompt("Enter your last name: ");
const birthyear = prompt("Enter your birth year: ");
const currentyear = 2025;

const age = currentyear - Number(birthyear);

document.getElementById("output").innerText = `Hello ${firstname} ${lastname}! How does it feel to be ${age} years old?`;