
/* ЗАДАНИЕ 1 */

console.log("Задание 1");

var digit = 68;
console.log( namberCheng(digit) );

function namberCheng(nambers) {
	var citizen = {
		unit: 0,
		tens: 0,
		hundred: 0
	};
	
	if (nambers < 100) {
		citizen.unit = Math.floor( (nambers / 10) % 10);
		citizen.tens = Math.floor( (nambers / 1) % 10);
	} else if (100 <= nambers && nambers <= 999) {
		citizen.unit = Math.floor( (nambers / 1) % 10);
		citizen.tens = Math.floor( (nambers / 10) % 10);
		citizen.hundred = Math.floor( (nambers / 100) % 10);
	} 
	else console.log("Число не соответсвует диапозону чисел программы");
	
	return citizen;
};


/* ЗАДАНИЕ 2 */

console.log("Задание 2");

var name = " ";
var price = 0;
basket(name, price);

function basket(name, price) {
	var basket = [
		{
			name:"Миксер",
			price: 200
		},
		{
			name:"Ноутбук",
			price: 1200
		},
		{
			name:"Телевизор",
			price: 800
		}
	];
if(name != " " && price != 0) {
	basket.push({
		name: name,
		price: price
	});
}
var arrPrice = [];


for(i = 0; i < basket.length; i++) {
arrPrice.push(basket [i].price);
};

var summPrices = 0;
arrPrice.forEach(function (value) {summPrices += value});
console.log(summPrices);
};