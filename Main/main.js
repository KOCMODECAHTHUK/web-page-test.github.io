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

function show(){
    alert('Ты забыл прописать пути');
}
document.querySelector('.btn').addEventListener('click', show)

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
        'n2 = ' + n2,
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

function showWhile(){
    let i = 0;
    let arr = [];
    while (i <= 50) { // выводит 0, затем 1, затем 2
        if(i%2) arr.push(i)
        i++;
    }
    alert(arr.join('\n'));
}
document.querySelector('.btnNeWhile').addEventListener('click', showWhile)

function showNeFor(){
    let arr = [];
    for (let i = 0; i <= 50; i++) {
        if(i%2) arr.push(i)
    }
    alert(arr.join('\n'));
}
document.querySelector('.btnNeFor').addEventListener('click', showNeFor)

function showNeForIn(){
    let arr = [];
    for(any in document) arr.push(any);
    alert(arr.join('\n'));
}
document.querySelector('.btnNeForIn').addEventListener('click', showNeForIn)

function showMinMax(){
    let arr = [];
    let i = prompt('Введите максимальное число:', '100');
    for(let j = 0; j<10; j++) arr.push(getRandomInt(i))
    alert(arr.join('\n'));
}
document.querySelector('.btnMinMax').addEventListener('click', showMinMax)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showAss(){
    let arr = [
        ['Пушкин: '], ['Сказка о рыбаке и рыбке', 'Сказка о золотом петушке', 'Капитанская дочка'],
        ['Есенин: '], ['Кобыльи корабли', 'Москва кабацкая', 'Чёрный человек']
    ];
    alert(arr.map(f => f.join(" - ")).join("\n"));
}
document.querySelector('.btnAss').addEventListener('click', showAss)

function showSwapMinMax(){
    let array = [];
    for(let j = 0; j<10; j++) array.push(getRandomInt(10))
    let min1 = array[0]; let max2 = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < min1) {
            min1 = array[i];
            minIndex = i;
        }
        if(max2 < array[i]) {
            max2 = array[i];
            maxIndex = i;
        }
    }
    mxI = maxIndex + 1;
    miI = minIndex + 1;
    alert(array.join('\n') +'\nMin:\n' + min1 + ' - ' + miI + '\nMax:\n' + max2 + ' - ' + mxI);
    array[minIndex] = max2;
    array[maxIndex] = min1;
    alert(array.join('\n') +'\nMin*:\n' + max2 + ' - ' + miI + '\nMax*:\n' + min1 + ' - ' + mxI);
}
document.querySelector('.btnSwapMinMax').addEventListener('click', showSwapMinMax)

// Оболочка ввода данных для функций
function showH() {
    let a = prompt("Введите текст");
    let b = prompt("Вводите размер шрифта");
    let c = document.createElement("span");   // Создаем объект span
    c.innerHTML = a;                          // Вставляем html текст в span
    c.style.fontSize = parseInt(b)+"px";      // Выбираем размер шрифта 
	document.body.appendChild(c);             // Добавляем элемент в конец страницы
}
document.querySelector('.btnH').addEventListener('click', showH)

function showHtml() {
	let a = prompt("Введите поля таблицы через запятую");
    let b = a.split(","); // Разделяем полученную через prompt строку в массив
    if (b.length==4) { // Проверяем получили ли мы 4 элемента массива 
	    let e = document.createElement("table");   // Создаем объект table
        e.innerHTML = "<tr><td>"+b[0]+"</td><td>"+b[1]+"</td><td>"+b[2]+"</td><td>"+b[3]+"</td></tr>"; // Вставляем html каркас в table
	    document.body.appendChild(e);             // Добавляем элемент в конец страницы  
    } else alert("Вы должны ввести 4 поля");
}
document.querySelector('.btnHtml').addEventListener('click', showHtml)
