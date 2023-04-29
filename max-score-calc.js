/*Тестовые данные - массив  объектов players, выведите в консоль игрока с максимальным значением scorePoints 
(Используйте цикл, обращение к свойству через точку и метод глобального объекта Math, позволяющий найти большее число из всех возможных).

Для этого создайте пустой массив для хранения очков, используя цикл, заполните его значениями из данного вам массива.

Изучите spread опреатор (...), позволяющий развернуть данные из результирующего массива всех очков игроков в метод объекта Math.
*/

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let bestPlayer = null;
const scores = [];
for (let player of players) {
  if (bestPlayer) {
    bestPlayer =
      bestPlayer.scorePoints < player.scorePoints ? player : bestPlayer;
  } else {
    bestPlayer = player;
  }

  scores.push(player.scorePoints);
}

console.log(`Максимальное значение среди игроков: ${Math.max(...scores)}`);
console.log(`Игрок с максимальным значением: ${bestPlayer.name}`);
