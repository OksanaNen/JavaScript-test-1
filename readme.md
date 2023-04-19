[Типы операторов в JavaScript](#Типы-операторов-в-JavaScript)

[Динамическая типизация данных](#Динамическая-типизация-данных)


# Типы операторов в JavaScript


## Операторы присваивания в JavaScript 


Операторы присваивания позволяют присваивать переменным и константам значения, то есть нужны для инициализации. 


Оператор|Название|Использование|
|-|-|-|
|**=**|Присваивание|x = 7|
|**+=**| Присиваивание со сложением	|x += 5 // Смысл: x = x + 5
|**-=**|	Присваивание с вычитанием |x -= 2 // Смысл: x = x - 2
|**\*=**|	Присваивание с умножением	|x *= 3 // Смысл: x = x * 3
|**/=**|	Присваивание с деленеим	x |/= 6 // Смысл: x = x / 6
|**%=**|	Присваивание по модулю	|x %= 2 // Смысл: x = x % 6


## Арифметические операторы в JavaScript
Арифметические операторы выполняют математические операции.


**Список арифметических операторов**

Оператор| Название |  Использование   | 
|-|-|-|
|    **+**    |     Сложение	   |      x + y        |
|**-**	|Вычитание	|x - y|
|**\***|	Умножение	|x * y|
|**/**|	Деление	|x / y|
|**%**|	Взятие остатка от деления	|x % y|
|**++**|Инкремент (увеличивает на 1)	|++x или x++|
|**--**|Декремент (уменьшает на 1)|	--x или x--|
|**\*\***	|Возведение в степень	|x**y|

## Операторы сравнения в JavaScript
Операторы сравнения позволяют сравнивать два значения. В качестве результата они возвращают *true*, если значения равны, или *false* в противном случае. 


**Список операторов сравнения**
Оператор	|Описание	|Использование|
|-|-|-|
|**==**	|Равно: возвращает *true*, если операнды равны. В остальных случаях *false*.	|x == y|
|**!=**	|Не равно: возвращает *true*, если операнды не равны. В остальных случаях *false*.	|x != y|
|**===**|	Строгое равно: возвращает *true*, если операнды равны и принадлежат одному типу. В остальных случаях *false*.|	x === y|
|**!==**|	Строгое не равно: возвращает *true*, если операнды не равны, или равны, но принадлежат разным типам. В остальных случаях *false*.	|x !== y|
|**>**|	Больше чем: возвращает *true*, если правый операнд больше, чем левый. В остальных случаях *false*.|	x > y|
|**>=**	|Больше или равно: возвращает *true*, если правый операнд больше левого или равен ему. В остальных случаях *false*.|x >= y|
|**<**|	Меньше чем: возвращает *true*, если правый операнд меньше, чем левый. В остальных случаях *false*.	|x < y|
|**<=**|Меньше или равно: возвращает *true*, если правый операнд меньше левого или равен ему. В остальных случаях *false*.	|x <= y|


## Логические операторы в JavaScript
Логические операторы выполняют логические операции и возвращают логическое значение **true** или **false**.


**Список логических операторов**
Оператор|	Описание|	Использование|
|-|-|-|
|**&&**|**Логическое И**: возвращает true, если оба операнда *true*. В остальных случаях *false*. |x && y|
| \|\| |	**Логическое ИЛИ**: возвращает *false*, если оба операнда *false*. В остальных случаях *true*. |x \|\| y|
|**!**|	**Логическое НЕ**: возвращает true, если операнд *false*. Возвращает *false*, если операнд *true*. |	!x |


## Побитовые операторы в JavaScript
Побитовые операторы выполняют операции над числами в их двоичном представлении.

**Список логических операторов**
Оператор|	Описание|	Использование|
|-|-|-|
|**&**	|**Побитовое И**: возвращает единицу в каждой битовой позиции, для которой соответствующие биты обеих операндов являются единицами.	|a & b|
|\||	**Побитовое ИЛИ**: возвращает единицу в каждой битовой позиции, для которой один из соответствующих битов или оба бита операндов являются единицами.	|a \| b|
|**^**|	**Исключающее ИЛИ**: возвращает единицу в каждой битовой позиции, для которой только один из соответствующих битов операндов является единицей.|	a ^ b|
|**~**|**Побитовое НЕ**: заменяет биты операнда на противоположные.	|a ~ b|
|**<<**	|**Сдвиг влево**: сдвигает *a* в двоичном представлении на *b* бит влево, добавляя справа нули|	a << b|
|**>>**	|**Сдвиг вправо с переносом знака**: сдвигает *a* в двоичном представлении на *b* бит вправо, отбрасывая сдвигаемые биты.	|a >> b|
|**>>>**|	**Сдвиг вправо с заполнением нулями**: сдвигает *a* в двоичном представлении на *b* бит вправо, отбрасывая сдвигаемые биты и добавляя слева нули.	|a >>> b|


## Строковые операторы в JavaScript
Со строками можно использовать операторы сравнения и оператор **конкатенации +**. Он позволяет объединяет две строки и возвращает третью строку — объединение двух строк-операндов.


## Другие полезные операторы в JavaScript


|Оператор|	Описание|	Использование|
|-|-|-|
|**,**|Вычисляет несколько операндов и возвращает значение последнего операнда.	|let a = (1, 3 , 4); // 4|
|**?:**	|Возвращает заданное значение в зависимости от условия.	|(5 > 3) ? "верно" : "неверно"; // "верно"|
|**delete**|	Удаляет объект, свойство объекта, или элемент массива с заданным индексом. 	|delete x|
|**typeof**|Возвращает строку обозначающую тип невычисленного операнда. 	|typeof 3 // "number"|
|**void**	|Определяет выражение, которое должно быть вычислено без возвращения результата. |	void(x)|
|**in**|	Возвращает *true*, если указанный объект имеет указанное свойство.	|propNameOrNumber in objectName|
|**instanceof**|Возвращает *true*, если заданный объект является объектом указанного типа. 	|objectName instanceof objectType|


# Динамическая типизация данных
Это возможность одного типа данных превращаться в другой.
  >Например, число может стать строкой
```javascript
let number = 10; //число
number = String(number); //преобразует число в строку
console.log(typeof(number)); //выведет string
``` 

____________________
Источники: 

<https://codechick.io/tutorials/javascript/js-operators>

<https://www.webpupil.ru/javascript_view.php?id=238>


