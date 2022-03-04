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
        typeof n,
        typeof bigInt,
        typeof str,
        typeof age,
        typeof id,
        typeof age
    ]
    alert(arr.join('\n'))
}
document.querySelector('.btnQuestion').addEventListener('click', showMessage1)