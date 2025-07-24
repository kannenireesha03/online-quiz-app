document.getElementById("quizForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Collect answers from form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value || "",
        q2: document.querySelector('input[name="q2"]:checked')?.value || "",
        q3: document.querySelector('input[name="q3"]:checked')?.value || ""
    };

    // Send to Flask backend
    const response = await fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answers)
    });

    const result = await response.json();
    document.getElementById("result").innerText = `Your Score: ${result.score}`;
});
