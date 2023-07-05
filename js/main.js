for (let i = 0; i <= 100; i++) {
  console.log(i);
}

const cardBox = document.querySelector(".card-box");
const cardSquare = 7 * 15;

for (let i = 0; i < cardSquare; i++) {
  // const singleSquare = '<div class="card-square"></div>';
  // cardBox.innerHTML += singleSquare;
  let singleSquare = document.createElement("div");
  singleSquare.classList.add("card-square");
  singleSquare.innerHTML = i.toString();

  cardBox.append(singleSquare);
  singleSquare.classList.add(
    "bg-primary",
    "text-white",
    "p-2",
    "m-2",
    "fw-bold"
  );

  if (i % 3 === 0) {
    singleSquare.classList.add("bg-success");
    singleSquare.innerHTML = "Fizz";
  }

  if (i % 5 === 0) {
    singleSquare.classList.add("bg-secondary");
    singleSquare.innerHTML = "Buzz";
  }

  if (i % 3 === 0 && i % 5 === 0) {
    singleSquare.classList.add("bg-danger");
    singleSquare.innerHTML = "FizzBuzz";
  }
}
