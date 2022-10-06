let num1;
num1 = parseInt (prompt("digite el primer numero"));
let num2;
num2 = parseInt(prompt("digite el segundo numero"));
let num3;
num3 = parseInt(prompt("digite el tercer numero"));

for (let num1 = 0; num1 < num2 && num1 < num3; num1++) {
  console.log("el menor es " + num1);
};

for (let num2 = 0; num2 < num1 && num2 < num3; num2++) {
  console.log("el menor es " + num2);
};

for (let num3 = 0; num3 < num1 && num3 < num2; num3++) {
  console.log("el menor es " + num3);
};

for (let num1 = 0; num1 > num2 && num1 > num3; num1++) {
  console.log("el mayor es " + num1);
};

for (let num2 = 0; num2 > num1 && num2 > num3; num2++) {
  console.log("el mayor es " + num2);
};

for (let num3 = 0; num3 > num1 && num3 > num2; num3++) {
  console.log("el mayor es " + num3);
};