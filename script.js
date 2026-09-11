const laserKnapp = document.querySelector("#laser-knapp");
const laserText = document.querySelector("#laser-text");
const laserRaknare = document.querySelector("#laser-raknare");

let antalSkott = Number(localStorage.getItem("antalSkott"));
laserRaknare.textContent = "Antal laserskott: " + antalSkott;

laserKnapp.addEventListener("click", function () {
    laserText.textContent = "PEW PEW! 🔴🔴 Konkurrensen är utplånad.";

    antalSkott = antalSkott + 1;
    localStorage.setItem("antalSkott", antalSkott);
    laserRaknare.textContent = "Antal laserskott: " + antalSkott;
});

document.getElementById('invertBtn').addEventListener('click', () => {
    document.body.classList.toggle('inverted');
});
const loggaKnapp = document.querySelector("#logga-knapp");
const fahhLjud = new Audio("fahh.mp3");

loggaKnapp.addEventListener("click", function () {
    fahhLjud.currentTime = 0;
    fahhLjud.play();
});

const skamt = document.querySelector("#skamt");
const nyttSkamtKnapp = document.querySelector("#nytt-skamt");

function hamtaSkamt() {
    skamt.textContent = "Laddar ett skämt...";

    fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
    })
        .then(function (svar) {
            if (!svar.ok) {
                throw new Error("Fel från API:et");
            }
            return svar.json();
        })
        .then(function (data) {
            skamt.textContent = data.joke;
        })
        .catch(function () {
            skamt.textContent = "Kunde inte hämta ett skämt just nu. Testa igen om en stund.";
        });
}

nyttSkamtKnapp.addEventListener("click", hamtaSkamt);
hamtaSkamt();
