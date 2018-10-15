alert("Задание 1.");

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2  сначало происходит исполнение операции увеличения значения переменной а на 1, а потом вывод ее нового значения.
d = b++; alert(d); // 1 сначало вывод значения переменной, а потом увеличение ее значения на 1
c = (2+ ++a); alert(c); // 5 Увеличение значения а на 1 затем сложение с 2
d = (2+ b++); alert(d); // 4 сложение с 2 неизменного значения b а потом увеличение значения b
alert(a); // 3 так как два раза была опрерация ++
alert(b); // 3 так как два раза была операция ++

alert("Задание 2.");

значение х будет равно 5


alert("Задание 3.");
var a = 10;
var b = -1;
var g;
if (a >= 0 && b >= 0)
alert(g = a - b);

else if (a < 0 && b < 0)
alert(g = a * b);

else (a < 0 || b < 0)
alert(g = a + b);




alert("Задание 4.");
var k = 14;
alert("Вывод чисел с " + k + " по 15");
var c = 1;
switch(k){

case c:
alert(c);

case ++c:
alert(c++);

case ++c:
alert(c++);

case c++:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

case ++c:
alert(c++);

break;

}




alert("Задание 5.");


function plus(a, b) {
    g = a + b;
    return g;
}

function mines(a, b) {
    g = a - b;
    return g;
}

function mult(a, b) {
    g = a * b;
    return g;
}

function divis(a, b) {
    g = a / b;
    return g;
}

alert("Задание 6.");

var operation = "умножение";
var math = mathOpiration(2, 3, operation);

alert("Операция " + operation + " равна " + math);
function mathOpiration(arg1, arg2, operation) {

var result;

switch (operation){

case "сложение":
result = plus(arg1, arg2);
break;
case "вычетание":
result = mines(arg1, arg2);
break;

case "умножение":
result = mult(arg1, arg2);
break;

case "деление":
result = divis(arg1, atg2);
break;
}

return result;

}

alert("Задание 8.");




function power(val, pow){
     
    
  return (pow != 1) ? val*power(val, pow-1) : val;
 
   

}

alert( power(2, 4) );