// Hent table-elementet
const table = document.querySelector(".booking-oversigt table");

// Hent booking-data fra backend
fetch("http://localhost:8080/booking")
    .then(res => res.json())
    .then(bookings => {
        bookings.forEach(booking => {
            const row = document.createElement("tr");

            const bookingId = document.createElement("td");
            bookingId.textContent = booking.id;

            const filmNavn = document.createElement("td");
            filmNavn.textContent = booking.show.film.navn;

            const filmTid = document.createElement("td");
            filmTid.textContent = `${booking.show.dato} kl. ${booking.show.tid}`;

            const navn = document.createElement("td");
            navn.textContent = booking.navn;

            const tlf = document.createElement("td");
            tlf.textContent = booking.tlf_nr;

            const antal = document.createElement("td");
            antal.textContent = booking.antal;


            //Slet knappen. Hedder delete td (table data), fordi den ikke kun kan hedde delete, da det er en funktion i js
            const deleteTd = document.createElement("td");
            const deleteKnap = document.createElement("button");
            deleteKnap.textContent = "Slet";
            deleteKnap.addEventListener("click", () => {
                if (confirm("Er du sikker på, at du vil slette denne booking?")) {
                    fetch(`http://localhost:8080/booking/delete/${booking.id}`, {method: "DELETE"})
                        .then(response => {
                            if (response.ok) {
                                row.remove(); // fjerner rækken fra tabellen
                            }
                        });
                }
            });
            deleteTd.appendChild(deleteKnap);

            row.appendChild(bookingId);
            row.appendChild(filmNavn);
            row.appendChild(filmTid);
            row.appendChild(navn);
            row.appendChild(tlf);
            row.appendChild(antal);
            row.appendChild(deleteTd);

            table.appendChild(row);
        });

    });

