function init() {
    alert(typeof 1n) // "bigint"
    alert(typeof true) // "boolean"
    alert(typeof "foo") // "string"
    alert(typeof Symbol()) // "symbol"
    alert(typeof {}) // "object"
}
function init2() {
    alert(0) // "number"
    alert(typeof n)
    alert(typeof bigInt)
    alert(typeof n)
    alert(typeof n)
}

function showMessage() {
    let arr = [
        "Площадь квадрата со стороной 4 см?",
        "Сколько дней мучился?",
        "Какая скорость самолёта при взлёте?",
        "Сколько дней в неделе?",
        "Сколько цветов в букете?"
    ],
    app1 = document.querySelector('#app1')
    
    if (this.textContent == 'Показать теcт') {
        app1.style.display = 'block'
        app1.innerHTML = arr.join('<br>')
        this.textContent = 'Скрыть тест'
    }
    else {
        app1.style.display = 'none'
        this.textContent = 'Показать теcт'
    }
}
document.querySelector('.showTest').addEventListener('click', showMessage)

function showMessage1() {
var n = 123;
const bigInt = 1234567890123456789012345678901234567890n;
var str = "World";
var age = null;
let id = Symbol();
var user = { name: "Вася" };
    let arr = [
        'n = ' + n + ' - ' + typeof n,
        'bigInt = ' + bigInt + ' - ' + typeof bigInt,
        'str = ' + str + ' - ' + typeof str,
        'age = ' + age + ' - ' + typeof age,
        'id = ' + 'Symbol - ' + typeof id,
        'user = ' + user + ' - ' + typeof user
    ]
    alert(arr.join('\n'))
}
document.querySelector('.btnQuestion').addEventListener('click', showMessage1)

function showNum(){
var n1 = 76;
var n2 = 76
var s2
    let ar = [
        'n1 = ' + n1,
        'n2 = ' + n2,,
        'n1 == n2   |  ' + (n1 == n2),
        'n1 < n2     |  ' + (n1 < n2),
        'n1 <= n2   |  ' + (n1 <= n2),
        'n1 > n2     |  ' + (n1 > n2),
    ]
    alert(ar.join('\n'))
}
document.querySelector('.btnNum').addEventListener('click', showNum)

function showAge(){
    let age = prompt('Введите возраст:', '');
    if (age >= 18){
        if (age >= 30) alert( 'Для всех возрастов' );
        else alert( 'Для молодежи' );
    } else if (age > 0) alert( 'Для детей' );
    
    // Более упрощенный вариант
    // let age1 = prompt('Возраст?', 18);
    // let message = (age1 < 1) ? '...' :
    // (age1 < 18) ? 'Для детей' :
    //   (age1 < 31) ? 'Для молодежи' :
    //   'Для всех возрастов' ;
    // alert( message );
}
document.querySelector('.btnAge').addEventListener('click', showAge)

function showCheWhile(){
    let i = 0;
    let ar1 = [];
    while (i <= 50) { // выводит 0, затем 1, затем 2
        if(i%2) ar1.push(i)
        i++;
    }
    alert(ar1.join('\n'));
}
document.querySelector('.btnNeChetnie').addEventListener('click', showCheWhile)