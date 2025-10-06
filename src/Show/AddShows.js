const form = document.getElementById("add-show");


form.addEventListener("submit", function(e){
    e.preventDefault();


    const show = {


        film: document.getElementById("film").value,
        dato: document.getElementById("dato").value,
        tid: document.getElementById("tid").value
    };


    fetch("http://localhost:8080/show/addShow",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(show)
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
