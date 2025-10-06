//Først skal vi finde den rigtige HTML fill via id'et
const form = document.getElementById("add-film");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const film =
        {
            titel: document.getElementById("titel").value,
            beskrivelse: document.getElementById("beskrivelse").value,
            spilleTid: document.getElementById("spilleTid").value,
            udgivelsesAar: parseInt(document.getElementById("udgivelsesaar").value),
            alderGraense: parseInt(document.getElementById("aldergraense").value),
        };

    fetch("http://localhost:8080/film/addFilm",{
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(film)
    })
    // Tilbage knap

    const tilbageKnap = document.createElement("button");
    tilbageKnap.textContent = "Tilbage";

    tilbageKnap.addEventListener("click", () => {
        history.back();
    });

    const container = document.getElementById("tilbage-knap-container");
    container.appendChild(tilbageKnap);




});



