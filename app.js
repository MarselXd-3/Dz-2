var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28];

console.log("Четные числа из массива:");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

var cinema = {
  films: {
    "Фильм 1": {
      genre: "Драма",
      premiereDate: "2024-02-15",
      duration: 120,
      mainActors: ["Актер 1", "Актер 2"],
      ticketPrice: 10,
      dimension: "2D",
    },
    "Фильм 2": {
      genre: "Комедия",
      premiereDate: "2024-03-20",
      duration: 105,
      mainActors: ["Актер 3", "Актер 4"],
      ticketPrice: 12,
      dimension: "3D",
    },
  },
};

var userInput = prompt("Введите число до 15:");
var number = parseInt(userInput);

if (!isNaN(number) && number >= 1 && number <= 15) {
  var romanNumeral;

  switch (number) {
    case 1:
      romanNumeral = "I";
      break;
    case 2:
      romanNumeral = "II";
      break;
    case 3:
      romanNumeral = "III";
      break;
    case 4:
      romanNumeral = "IV";
      break;
    case 5:
      romanNumeral = "V";
      break;
    case 6:
      romanNumeral = "VI";
      break;
    case 7:
      romanNumeral = "VII";
      break;
    case 8:
      romanNumeral = "VIII";
      break;
    case 9:
      romanNumeral = "IX";
      break;
    case 10:
      romanNumeral = "X";
      break;
    case 11:
      romanNumeral = "XI";
      break;
    case 12:
      romanNumeral = "XII";
      break;
    case 13:
      romanNumeral = "XIII";
      break;
    case 14:
      romanNumeral = "XIV";
      break;
    case 15:
      romanNumeral = "XV";
      break;
    default:
      romanNumeral = "Вне диапазона";
      break;
  }

  console.log(`${number} -> ${romanNumeral}`);
} else {
  console.log("Введите корректное число от 1 до 15.");
}
