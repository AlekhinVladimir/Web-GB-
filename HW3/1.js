var celsius = prompt("Введите температуру в градусах Цельсия");
var fahrenheit = Math.round((9 / 5) * celsius + 32);
fahrenheit = Math.round(fahrenheit * 100) / 100;
alert("Цельсий: " + celsius + ", Фаренгейт: " + fahrenheit);
//