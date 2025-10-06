const container = document.getElementById("film-container");

fetch("http://localhost:8080/film/allFilm")
    .then(res => res.json())
    .then(films => {
        films.forEach(film => {
            const kort = document.createElement("div");
        kort.classList.add("film-card");

            // Hardcode stien til billederne ud fra filmId eller titel
            let imgSrc = "";
            switch (film.titel) {
                case "Avatar":
                    imgSrc = "images/Avatar.jpeg";
                    break;
                case "Avengers":
                    imgSrc = "images/Avengers.webp";
                    break;
                case "Jurassic":
                    imgSrc = "images/jurassic.jpg";
                    break;
                case "The Batman":
                    imgSrc = "images/The batman.jpg";
                    break;
                case "Titanic":
                    imgSrc = "images/titanic.png";
                    break;
                default:
                    imgSrc = "images/default.jpg"; // fallback
            }

            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = film.titel;

            const titel = document.createElement("h3");
            titel.textContent = film.titel;

            const beskrivelse = document.createElement("p");
            beskrivelse.textContent = film.beskrivelse;

            const buttonBook = document.createElement("button");
            buttonBook.textContent = "Book film";
            buttonBook.onclick = () => {
                window.location.href = `booking.html?filmId=${film.filmId}`;
            };

           kort.appendChild(img);
           kort.appendChild(titel);
           kort.appendChild(beskrivelse);
           kort.appendChild(buttonBook);

            container.appendChild(kort);
        });
    });

