# Создание строк в JavaScript

## Введение
Строки в JavaScript представляют собой последовательности символов, используемые для хранения и манипулирования текстом.

## Создание строк

### 1. Использование двойных кавычек
```javascript
let string1 = "Это строка";
```
### 2. Использование одинарных кавычек
```javascript
let string2 = 'Это тоже строка';
```
### 3. Использование обратных кавычек (шаблонные строки)
```javascript
let string3 = `Это строка с переменной: ${string1}`;
```


## Методы работы со строками в JavaScript


### 1. Длина строки
* length(): Возвращает количество символов в строке.
```javascript
let text = "Привет, мир!";
let length = text.length;
console.log(length); // Выводит 12
```
### 2. Извлечение символов
* charAt(): Возвращает символ по указанному индексу.
```javascript
let char = text.charAt(0);
console.log(char); // Выводит "П"
```
* charCodeAt(): Возвращает код символа по указанному индексу.
```javascript 
let code = text.charCodeAt(0);
console.log(code); // Выводит 1055
```

### 3. Извлечение подстроки
* slice(): Извлекает часть строки и возвращает новую строку.
```javascript
let part = text.slice(0, 6);
console.log(part); // Выводит "Привет"
```
* substring(): Похож на slice, но не принимает отрицательные значения. 
```javascript
let part = text.substring(0, 6);
console.log(part); // Выводит "Привет"
```

### 4. Поиск подстроки
* indexOf(): Возвращает индекс первого вхождения подстроки.
```javascript
let index = text.indexOf("мир");
console.log(index); // Выводит 8
```
* includes(): Проверяет, содержит ли строка указанную подстроку.
```javascript
let contains = text.includes("мир");
console.log(contains); // Выводит true
```

### 5. Изменение регистра
* toUpperCase(): Преобразует строку в верхний регистр.
```javascript
let upper = text.toUpperCase();
console.log(upper); // Выводит "ПРИВЕТ, МИР!"
```
* toLowerCase(): Преобразует строку в нижний регистр.
```javascript
let lower = text.toLowerCase();
console.log(lower); // Выводит "привет, мир!"
```
### 6. Замена подстроки
* replace(): Заменяет указанную подстроку на новую.
```javascript
let newText = text.replace("мир", "JavaScript");
console.log(newText); // Выводит "Привет, JavaScript!"
```
### 7. Разделение строки
* split(): Разделяет строку на массив подстрок.
```javascript
let words = text.split(" ");
console.log(words); // Выводит ["Привет,", "мир!"]
```

## Методы работы с числами в JavaScript
### 1. toString()
* toString(): Преобразует число в строку.
```javascript
let num = 123;
let str = num.toString();
console.log(str); // Выводит "123"
```

### 2. toExponential()
* toExponential(): Возвращает строку, представляющую число в экспоненциальной нотации.
```javascript
let num = 9.656;
console.log(num.toExponential(2)); // Выводит "9.66e+0"
```
### 3. toFixed()
* toFixed(): Возвращает строку, представляющую число с фиксированным количеством десятичных знаков.
```javascript
let num = 9.656;
console.log(num.toFixed(2)); // Выводит "9.66"
```
### 4. toPrecision()
* toPrecision(): Возвращает строку, представляющую число с указанной точностью.
```javascript
let num = 9.656;
console.log(num.toPrecision(4)); // Выводит "9.656"
```
### 5. valueOf()
* valueOf(): Возвращает примитивное значение числа.
```javascript
let num = 123;
console.log(num.valueOf()); // Выводит 123
```
### 6. Number()
* Number(): Преобразует значение в число.
```javascript
let num = 123;
let str = num.toString();
console.log(str); // Выводит "123"
```
### 7. parseFloat()
* parseFloat(): Преобразует строку в число с плавающей точкой.
```javascript
let str = "9.656";
let num = parseFloat(str);
console.log(num); // Выводит 9.656
```

### 8. parseInt()
* parseInt(): Преобразует строку в целое число.
```javascript
let str = "9.656";
let num = parseInt(str);
console.log(num); // Выводит 9
```
