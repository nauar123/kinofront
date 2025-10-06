// Find formen via id
const form = document.getElementById("add-booking");

// Hent shows fra backend og fyld dropdown
fetch("http://localhost:8080/shows")
    .then(res => res.json())
    .then(shows => {
        const select = document.getElementById("show");
        shows.forEach(show => {
            const option = document.createElement("option");
            option.value = show.id; // send showId til backend
            option.textContent = `${show.dato} kl. ${show.tid}`;
            select.appendChild(option);
        });
    });

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop siden i at reloade

    // Hent værdier fra inputfelter inkl. valgt show
    const booking = {
        navn: document.getElementById("navn").value,
        tlfNr: document.getElementById("tlfNr").value,
        antal: parseInt(document.getElementById("antal").value),
        showId: parseInt(document.getElementById("show").value) // tilføjet
    };

    // Send til backend
    fetch("http://localhost:8080/booking/addBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
    });
});

