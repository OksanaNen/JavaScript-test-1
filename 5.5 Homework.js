function calculateFormula() {
  const value1 = 10;
  const value2 = Math.floor(Math.random() * 100);
  const result = value1 + value2 / 5 + 17;

  console.log(`Результат: ${result}`);
}

calculateFormula();

/*
У операторов в JS приоритет как в математике: сначало скобки, потом умножение/деление, затем вычитание/сложение. 
*/
