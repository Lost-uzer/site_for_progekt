//alert('Вариант 1')

// Думаю мне стоит сообщить о том что я не появлялся на уроках, то 
// авария то болею, в общем код Java пишу (и вижу) первый раз в жизни :/
// Было бы хорошо иметь учебник или хоть какой то материал =)
// В общем вникал в язык на форумах и сайте майкрософт. Если нужно 
// было использовать определённые метоты, то увы, я эксперементировал 
// со всем чем мог, и почти все задания выполнены по разному

// С уважением Леонид Юрьевич

// тест
function slojenie() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    if (isNaN(a) == true) a = 0;
    if (isNaN(b) == true) b = 0;

    var c = a + b;

    document.getElementById("result").innerHTML = a + " + " + b + " = " + c;
}
// Задание 1        1.22.а
function one_twenty_two__a() {
    var x = parseInt(document.getElementById("x").value); // Берёт значение "id" из HTML и вносит его в переменную "var ... = (и тд)"
    if (isNaN(x) == true) x = 0; // При ошибке в работе с переменной даёт ей значение "0" необязательно но так не будет выводиться Na
    var c = (7 * (x ** 2)) - (3 * x) + 6;
    document.getElementById("result_1").innerHTML = c; // Вносит в переменную "id" значение указанное в .innerHTML = ...;
}
// Задание 2        1.25
function one_twenty_five() {
    var storona = parseInt(document.getElementById("storona").value);
    if (isNaN(storona) == true) storona = 0;
    var c = storona * 4;
    document.getElementById("result_2").innerHTML = c;
}
// Задание 3        1.29
function one_twenty_nine() {
    var radius = parseInt(document.getElementById("radius").value);
    if (isNaN(radius) == true) radius = 0;
    var c = radius * 2;
    var c_1 = 3.14 * c;
    document.getElementById("result_3").innerHTML = "Длинна: " + c;
    document.getElementById("result_3_1").innerHTML = "Площадь: " + c_1.toFixed(2);

}
// Задание 4        1.31
function one_thirty_nine() {
    var chislo_1 = parseInt(document.getElementById("chislo_1").value);
    var chislo_2 = parseInt(document.getElementById("chislo_2").value);
    if (isNaN(radius) == true) radius = 0;
    var c = (chislo_1 + chislo_2) / 2;
    document.getElementById("result_4").innerHTML = c;
}
// Задание 5        1.23
function two_three() {
    var massa = parseInt(document.getElementById("massa").value);
    if (isNaN(massa) == true) massa = 0;
    var c = massa / 1000
    document.getElementById("result_5").innerHTML = c.toFixed();
}
// Задание 6    2.6
function two_six() {
    var sec = parseInt(document.getElementById("sec").value);
    var c = sec / 3600;
    var c_1 = sec / 60;
    var c_2 = sec % 60;
    document.getElementById("result_6").innerHTML = "Часы: " + c.toFixed();
    document.getElementById("result_6_1").innerHTML = "Минуты: " + c_1.toFixed();
    document.getElementById("result_6_2").innerHTML = "Секунды: " + c_2.toFixed();
}
// Задание 7    2.28 // оценка 3
function two_twenty_eight() {
    const chislo_3 = "543";
    const characters = chislo_3.split(''); //Делим объект на части
    c = characters.splice(1, 1); // Удаляем первый элемент из списка и заносим его в с
    characters.unshift(c); // Добавляем значение переменной с в начало списка
    const combinedString = characters.join(''); // Объединяем все элементы списка в один объект
    document.getElementById("result_7").innerHTML = combinedString; // Выводим результат
}
// Задание 8    4.16.б
function four_sixteen() {
    var a_1_1 = parseInt(document.getElementById("a_1").value);
    var a_1 = Math.sqrt(a_1_1)
    var r_1_1 = parseInt(document.getElementById("r_1").value);
    var r_1 = (r_1_1 / 3.14 / 2) * 2
    c = Math.sqrt(2 * a_1)
    if (c <= r_1) {
        document.getElementById("result_8").innerHTML = "Квадрат поместится";
    } else {
        document.getElementById("result_8").innerHTML = "Квадрат не поместится";
    }
}
// Задание 9    4.28.а
function compareDigits() {
    var number = document.getElementById("numberInput").value;
    const list_1 = number.split('');
    if (list_1[0] > list_1[2]) {
        document.getElementById("result_9").innerHTML = 'Первая цифра больше второй';
    } else if (list_1[0] < list_1[2]) {
        document.getElementById("result_9").innerHTML = 'Первая цифра меньше второй';
    }
}
// Задание 10   4.33.б 
function four_thirty_three(){ // Использовал просто условие if, если правильно понял то составное условие это: if-elif-else
    var number_1 = document.getElementById("number_1").value;
    if (number_1 % 2 == 0){
        document.getElementById("result_10").innerHTML = true;
    }
    if (number_1 % 2 != 0){
        document.getElementById("result_10").innerHTML = false;
    }
}
// Задание 11   4.59.а
function four_fifty_nine(){
    var a = document.getElementById("number_2").value;
    list_2 = a.split('');
    var index = list_2.indexOf('4');
    if (index != -1){
        document.getElementById("result_11").innerHTML = "Число найдено";
    } else {
        document.getElementById("result_11").innerHTML = "Число не найдено";
    }
}
// Задание 12   4.57.б
function four_fifty_seven(){
    var a = document.getElementById("number_3").value;
    var b = document.getElementById("number_4").value;
    list_2 = a.split('');
    var index = list_2.indexOf(b);
    if (index != -1){
        document.getElementById("result_12").innerHTML = "Число найдено";
    } else {
        document.getElementById("result_12").innerHTML = "Число не найдено";
    }
}
// Задание 13   4.104 // оценка 4
function four_thirteen(){
    
}
// Задание 14   5.13
// Задание 15   5.27.б
// Задание 16   5.48
// Задание 17   6.22.а,в,е
// Задание 18   6.54 (делайте с четырехзначным) // оценка 5
// Задание 19   7.2
// Задание 20   7.3