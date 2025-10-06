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

            row.appendChild(bookingId);
            row.appendChild(filmNavn);
            row.appendChild(filmTid);
            row.appendChild(navn);
            row.appendChild(tlf);
            row.appendChild(antal);

            table.appendChild(row);
        });
    })
    .catch(err => console.error("Fejl ved hentning af bookinger:", err));
