/*
Опишите кнопку отправки сообщений в чат с помощью конструктора класса, кнопка должна иметь определенный размер - ширина и высота числовое значение, 
тип кнопки (type = button), цвет кнопки (green), создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 
// console.log(this.props) выводим все пропертиес

не забудьте создать экземпляр класса button - передать аргументы в наш конструктор класса. А также, проверьте в отдельной функции testButton(), 
что свойства этого экземпляра класса соответствуют заданным.
*/

class MessageButton {
  type;
  colour;
  height;
  weight;

  constructor(type, colour, height, weight) {
    this.type = type;
    this.colour = colour;
    this.height = height;
    this.weight = weight;
  }

  onClick() {
    console.log(this.type, this.colour, this.height, this.weight);
  }

  testButton(type, colour, height, weight) {
    console.log(
      colour === this.colour &&
        type === this.type &&
        height === this.height &&
        weight === this.weight
    );
  }
}

const button = new MessageButton("button", "green", 200, 400);

button.onClick();
button.testButton("button", "green", 200, 400);
button.testButton("button", "green", 200, 500);
button.testButton("button", "green", 100, 400);
button.testButton("button", "yellow", 100, 400);
button.testButton("text", "green", 200, 400);
