const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

console.log(answer.classList);
button.addEventListener("click", () => {
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    button.textContent = "Show answer";
  } else {
    button.textContent = "Hide answer";
  }
});
