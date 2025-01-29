let nickname = "Shain";
let heightInches = 62;  
let weightKg = 50;  

let heightFeet = Math.floor(heightInches / 12);
let heightRem = heightInches % 12;

let weightLbs = weightKg * 2.20462;

alert(`Name: ${nickname}\nHeight: ${heightFeet}'${heightRem}"\nWeight: ${weightLbs.toFixed(3)} lbs`);
