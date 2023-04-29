/*
Получаем посылку в постамате.
тестовые данные: пользователь имеет - сумма 100р на счете
Код для получения посылки пришел в смс оповещении A001DFX0
Текст из смс… ваша посылка находится в ячейке под номером 4

Постамат имеет вид - [null, null, null, “4 - ваша посылка” , null]

В условии проверьте, если наш код равен коду из смс, то выведем в 
консоль данные о нашей посылке, и спишем со счета 100р в формате 
“Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”
*/

class Postamat {
  cells = [null, null, null, "Подарок от Оксаны :)", null];
  codesToCells = new Map([["A001DFX0", 3]]);

  checkCode(code) {
    if (this.codesToCells.has(code)) {
      return true;
    } else {
      console.log("Неверный код.");
      return false;
    }
  }

  giveParcel(user) {
    const code = user.getCode();
    const isValid = this.checkCode(code);

    if (!isValid) {
      return;
    }

    const parcelValue = 100;

    let money = user.giveMoney(parcelValue);

    if (money < parcelValue) {
      console.log("Не хватает денег на счёте.");
      return;
    }

    const cellIndex = this.codesToCells.get(code);

    const parcel = this.cells[cellIndex];

    console.log(
      `Вы получили посылку "${parcel}" из ячейки ${
        cellIndex + 1
      } и ваш счёт составляет: ${parcelValue}р. Баланс: ${user.getBalance()}р.`
    );
  }
}

class User {
  #balance = 100;
  #code = "A001DFX0";

  getCode() {
    return this.#code;
  }

  getBalance() {
    return this.#balance;
  }

  giveMoney(sum) {
    if (this.#balance >= sum) {
      this.#balance -= sum;
      return sum;
    } else {
      return this.#balance;
    }
  }
}

class Program {
  run() {
    const postamat = new Postamat();
    const user = new User();

    postamat.giveParcel(user);
  }
}

const program = new Program();

program.run();
