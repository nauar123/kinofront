// Find formen via id (vi tilføjer et id til formen i HTML
const form = document.getElementById("add-booking");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop siden i at reloade

    // Hent værdier fra inputfelter
    const booking = {
        navn: document.getElementById("navn").value,
        tlfNr: document.getElementById("tlfNr").value,
        antal: parseInt(document.getElementById("antal").value)
    };

    // Send til backend
    fetch("http://localhost:8080/booking/addBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
    })

});
