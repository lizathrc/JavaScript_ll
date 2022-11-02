/*1. Haga un programa que reciba como entrada la edad actual de Elena, y debe
imprimir la edad de Lucía dentro de siete años, siendo que la edad de Lucía
es la tercera parte de la de Elena */

const elena = Number (prompt('write elena age'));
const lucia = Number (parseInt((elena/3)+7));
alert ('lucia would have ' + lucia);


// 2. Cree un programa que calcule la posible edad de una persona en un año
// específico. El usuario debe ingresar el año en que se encuentra y el año con
// el que desea hacer el cálculo, este segundo parámetro no puede ser menor
// al año actual del usuario. Ejemplo: Si el usuario está en el año 2022 no puede
// ingresar un valor menor a dicho año para hacer el cálculo de la edad.

const currentAge = Number (prompt('write your current age'));
const currentYear = Number (prompt('write your current year'));
const anotherYear = Number(prompt('write another year older than the current year'));
const result = (anotherYear-currentYear) + currentAge;

if (anotherYear <= currentYear) {
  alert ('the year has to be older than the current year');
};
alert ('you would have ' + result + ' years old');

