
const quiz3Form = document.getElementById("quiz3");
const result3Div = document.getElementById("result3");
quiz3Form.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;

    if (quiz3Form.q11.value === "d") {
        score = score + 1;
    }

    if (quiz3Form.q12.value === "b") {
        score = score + 1;
    }

    if (quiz3Form.q13.value === "c") {
        score = score + 1;
    }

    if (quiz3Form.q14.value === "a") {
        score = score + 1;
    }

    if (quiz3Form.q15.value === "d") {
        score = score + 1;
    }

    result3Div.innerHTML = "Helyes válaszok: " + "5/" + score;
});
