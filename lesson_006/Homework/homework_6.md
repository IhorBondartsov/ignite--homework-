# Homework 

###Задача 1 

Есть дерево из тегов ul и li.

Напишите код, который для каждого элемента li выведет:
* Текст непосредственно в нём указанный (без подразделов).
* Количество всех вложенных в него элементов li.

Код списка для задачи: 
```
  <ul>
    <li>Животные
      <ul>
        <li>
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>

        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
```

###Задача 2 

Напишите функцию insertAfter(elem, refElem),
которая добавит elem после узла refElem.
```
<div>Это</div>
<div>Элементы</div>

<script>
  var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент</b>';

  function insertAfter(elem, refElem) { /* ваш код */ }

  var body = document.body;

  // вставить elem после первого элемента
  insertAfter(elem, body.firstChild); // <--- должно работать

  // вставить elem за последним элементом
  insertAfter(elem, body.lastChild); // <--- должно работать
</script>
``` 
###Задача 3 
Метод elem.closest(css) для поиска ближайшего родителя,
 удовлетворяющего селектору css, не поддерживается
 некоторыми браузерами, например IE11-.
Создайте для него полифилл.

