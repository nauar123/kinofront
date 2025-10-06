
const table = document.querySelector(".show-oversigt table");

// Hent shows fra backend
fetch("http://localhost:8080/show/AllShows")
    .then(res => res.json())
    .then(shows => {
        shows.forEach(show => {
            const row = document.createElement("tr");

            // Dato
            const dato = document.createElement("td");
            dato.textContent = show.dato;

            // Tid
            const tid = document.createElement("td");
            tid.textContent = show.tid;

            // Tilføj td’er til tr
            row.appendChild(dato);
            row.appendChild(tid);

            // Tilføj tr til table
            table.appendChild(row);
        });
    })
    .catch(err => console.error("Fejl ved hentning af shows:", err));
