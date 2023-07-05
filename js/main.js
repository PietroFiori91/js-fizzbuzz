// CICLO 1

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//

const cardBox = document.querySelector(".card-box");
const cardSquare = 7 * 15;

for (let i = 0; i < cardSquare; i++) {
  let singleSquare = document.createElement("div");
  singleSquare.classList.add("card-square");
  singleSquare.innerHTML = i.toString();

  // append & add class

  cardBox.append(singleSquare);
  singleSquare.classList.add(
    "bg-primary",
    "text-white",
    "p-2",
    "m-2",
    "fw-bold"
  );

  // MULTIPLI 3

  if (i % 3 === 0) {
    singleSquare.classList.add("bg-success");
    singleSquare.innerHTML = "Fizz";
  }

  // MULTIPLI 5

  if (i % 5 === 0) {
    singleSquare.classList.add("bg-secondary");
    singleSquare.innerHTML = "Buzz";
  }

  // MULTIPLI 3 & 5

  if (i % 3 === 0 && i % 5 === 0) {
    singleSquare.classList.add("bg-danger");
    singleSquare.innerHTML = "FizzBuzz";
  }
}
