const quizForm = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;

    if (quizForm.q1.value === "b") {
        score = score + 1;
    }

    if (quizForm.q2.value === "c") {
        score = score + 1;
    }

    if (quizForm.q3.value === "b") {
        score = score + 1;
    }

    if (quizForm.q4.value === "d") {
        score = score + 1;
    }

    if (quizForm.q5.value === "a") {
        score = score + 1;
    }

    resultDiv.innerHTML = "Helyes válaszok: " + "5/" + score;
});