const quiz2Form = document.getElementById("quiz2");
const result2Div = document.getElementById("result2");
quiz2Form.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;

    if (quiz2Form.q6.value === "b") {
        score = score + 1;
    }

    if (quiz2Form.q7.value === "d") {
        score = score + 1;
    }

    if (quiz2Form.q8.value === "a") {
        score = score + 1;
    }

    if (quiz2Form.q9.value === "d") {
        score = score + 1;
    }

    if (quiz2Form.q10.value === "d") {
        score = score + 1;
    }

    result2Div.innerHTML = "Helyes válaszok: " + "5/" + score;
});