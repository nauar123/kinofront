
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

            //Slet knappen. Hedder delete td (table data), fordi den ikke kun kan hedde delete, da det er en funktion i js
            const deleteTd = document.createElement("td");
            const deleteKnap = document.createElement("button");
            deleteKnap.textContent = "Slet";
            deleteKnap.addEventListener("click", () => {
                if (confirm("Er du sikker på, at du vil slette dette show?")) {
                    fetch(`http://localhost:8080/show/delete/${show.id}`, {method: "DELETE"})
                        .then(response => {
                            if (response.ok) {
                                row.remove(); // fjerner rækken fra tabellen
                            }
                        });
                }
            });
            deleteTd.appendChild(deleteKnap);

            // Tilføj td’er til tr
            row.appendChild(dato);
            row.appendChild(tid);
            row.appendChild(deleteTd);

            // Tilføj tr til table
            table.appendChild(row);
        });
    });

