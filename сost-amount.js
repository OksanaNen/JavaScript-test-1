function testSum() {
  let expencesExamples = 
  [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390 ]    },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200 ] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000 ] },
  ];

  expencesExamples.forEach(function (example) {
    getSum(example.yearlyExpences);
    getMonth(example.yearlyExpences);
  });
}

function getSum(expenses) {
  sum = 0;
  expenses.forEach((expense) => {
    sum += expense > 1000 ? expense : 0;
  });
  console.log(`Общая сумма затрат (суммы выше 1000р за месяц): ${sum}`);
}

function getMonth(expenses) {
  console.log(`Затраты <= 1000:`);

  for (let monthIndex = 0; monthIndex < expenses.length; monthIndex++) {
    
    let sum = expenses[monthIndex];
    
    if (sum > 1000) {
      continue;  
    }

    let date = new Date(2023, monthIndex);
    const options = {month: 'long'};
    let month = date.toLocaleDateString('ru-ru', options);
    
    console.log(`${month}: ${sum}`);
    
  }
}

testSum();