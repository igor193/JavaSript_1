var i = 2;
var a = 100;
var b = [];



	while(i <= a) {
	
		var n = 2;
		
		while(n < i) {
		var e = i % n;
			if(e == 0) b.push(e);
		n++;			 
		}
		console.log(i);
			
	 i++;		
	}



	




console.log("Задание 2");

var r = 0;

do {
    if (r == 0) {
        console.log(r + "-это ноль");
    } else if (r % 2 == 0) {
        console.log(r + "-четное число")
    } else {
        console.log(r + "-нечетное число");
    }

    r++;
}
while (r <= 10);

console.log("Задание 3");

for (y = 1; y < 10; console.log(y++)) { };


console.log("Задание 4");

var v = "x";
var j = 1;
console.log(v);
for (j = 1; j <= 19; j++) {
    console.log(v = v + "x");
};


console.log("Задание 5");

var basket = [400, 6000, 5000, 700];
var summBasket = 0;
basket.forEach(function (value) { summBasket += value });

console.log(summBasket);