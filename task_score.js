//общая сумма баллов по модулю "Введение"
function averagePoints(points) {
  if (!points || !points.length) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < points.length; i += 1) {
    sum += points[i];
  }

  return (sum / points.length).toFixed(2); //возвращает строчку
}

function showAverageScore() {
  const userName = "Оксана";
  const userSurname = "Ненашева";
  const pointsIntroductionHomeWork = [20, 30, 15, 15, 30]; // баллы за каждое домашнее задание по модулю "Введение" (взяла эти баллы с неба, тк не нашла их в курсе)
  const pointsGitHomeWork = [
    20, 20, 30, 30, 15, 15, 30, 20, 10, 10, 20, 50, 7, 5, 10, 70, 7, 50,
  ]; // баллы за каждое домашнее задание по модулю Git
  const pointsJSHomeWork = [10, 30, 30, 25, 25, 35, 35, 35, 35]; // баллы за каждое домашнее задание по модулю JS
  const introAverage = averagePoints(pointsIntroductionHomeWork);
  const gitAverage = averagePoints(pointsGitHomeWork);
  const jsAverage = averagePoints(pointsJSHomeWork);
  const sliceUserName = userName.slice(0, 1); // обрезка имени до первой буквы

  console.log(
    `Студент ${sliceUserName}.${userSurname}. Средний балл по модулю "Введение": ${introAverage}`
  );

  console.log(
    `Студент ${sliceUserName}.${userSurname}. Средний балл по модулю "Git": ${gitAverage}`
  );

  console.log(
    `Студент ${sliceUserName}.${userSurname}. Средний балл по модулю "JS": ${jsAverage}`
  );
}

showAverageScore();
