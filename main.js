/*1. Haga un programa que reciba como entrada la edad actual de Elena, y debe
imprimir la edad de Lucía dentro de siete años, siendo que la edad de Lucía
es la tercera parte de la de Elena */

// let elena;
// elena = prompt ('put elena age');

// let lucia;

// while (lucia = parseInt(elena/3)+7) {
//   alert('lucia has ' + lucia)
//   break;
// };


// 2. Cree un programa que calcule la posible edad de una persona en un año
// específico. El usuario debe ingresar el año en que se encuentra y el año con
// el que desea hacer el cálculo, este segundo parámetro no puede ser menor
// al año actual del usuario. Ejemplo: Si el usuario está en el año 2022 no puede
// ingresar un valor menor a dicho año para hacer el cálculo de la edad.

// let year;
// year = prompt('write your actual year');
// let year2;
// year2 = prompt ('write a year');
// let result = year - year2;

// if (year2 <= year) {
//   alert('you need to write a higher year')
// } 
// else if (year2>year) {
//   alert('the age is ' + result)
// };

// 3. Haga un programa que reciba como entrada el año de matrimonio del abuelo
// de Alberto. Encontrar la edad de la abuela de Alberto a hoy, si es 7 años
// menor que el abuelo de Alberto, y en el año del matrimonio, el abuelo tenía
// 25 años.Debe imprimir la edad de la abuela de Alberto.

// let marriage = prompt('enter a year');

// let grandma;
// grandma =  (25 - 7) + marriage;

// alert('grandma');

// 4. Cree un programa que le permita al usuario convertir grados Fahrenheit a
// Celsius o viceversa. El programa debe recibir el tipo de conversión que se
// desea realizar, siendo la letra “F” para Fahrenheit y “C” para Celsiu, y el valor
// a convertir. El programa no recibirá el valor a convertir hasta que se haya
// ingresado correctamente el tipo de conversión que se desea realizar. Debe
// imprimir mostrando el resultado de la conversión: N°C/F = N°C/F. Si el tipo de
// conversión no es válido debe imprimir: “Tipo de conversión no reconocido”
// Fórmula Celsius a Fahrenheit
// (n°C × 9/5) + 32
// Fórmula Fahrenheit a Celsius
// ((n°F - 32) × 5) / 9

// const Option = Number(prompt('1. Celsius to Fahrenheit, 2. Fahrenheit to Celsius'));
//           n1 = prompt('Write a number');

// let value1 = parseInt(n1);

//     if (Option == 1) {
//       let resultado = (n1 * 9/5) + 32;
//       alert('Celsius to Fahrenheit : ' + resultado + 'F');
//   } else if (option == 2) {
//       let resultado = ((n1 - 32) * 5) / 9;
//       alert('Fahrenheit to Celsius : ' + resultado + 'C');
//   };


// 5. Haga un programa que reciba el nombre de un producto, el precio de este y
// cantidad a comprar, si la persona compra 3 se le aplicará un descuento de
// 10%, si lleva 5 o más un descuento de 20%. Debe imprimir una tabla con el

// nombre del producto, cantidad, subtotal, descuento a aplicar y el precio final a
// pagar.

// let Product = prompt('write a product')
// let Price = parseInt (prompt('write a price'))
// let Amount = parseInt (prompt('write the amount'))

//  if (Amount >= 3){
//       Amount -= (Amount * 0.10);
//  }
//   else if (Amount > 5){
//       Amount -= (Amount * 0.20);
//  }
//  else{
//   Amount = Amount;
//  }

//  alert ('you have to pay ' + Product + ' for ' + Amount * Price + ' your discount is ' + Amount +'% ' + 'total ' + Amount + Price + ' discount');

// 6. Haga un programa que reciba las notas de tres exámenes realizados por un
// estudiante en un curso, el primer examen tiene un valor de 25% de la nota
// del curso, el segundo examen un valor de 35% y el examen final 40%. Para
// aprobar el estudiante debe tener 70 como nota del curso y no debe tener
// menos de 50 en cada examen. Si el estudiante obtuvo menos de 70 y mayor
// a 59 en el curso debe de ir a ampliación. Si el estudiante obtuvo más de 70
// en el curso, pero uno de los exámenes tuvo nota menor a 50 debe ir a
// ampliación. Si el estudiante obtuvo nota menor a 60 reprueba el curso.


// let = Min = (0)
// let = Max = (100)

// let  Average;
// Average = prompt("Write your score");

// if (Average == 0 && Average < 65)
// {alert("extension ")}
// else if (Average >= 65 && Average < 70) 
// {alert("made it ")}
// else if (Average > 70 && Average <= 85) 
// {alert("not bad ")}
// else if (Average > 85 && Average <= 99) 
// {alert("very good ")}
// else if (Average == 100 ) 
// {alert("excelent ")}; 
