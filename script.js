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

    skjutKonfetti();
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

const antalKonfetti = 40;
const falltidSekunder = 2;
const villHaLugnSida = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function skjutKonfetti() {
    if (villHaLugnSida) {
        return;
    }

    for (let i = 0; i < antalKonfetti; i++) {
        const bit = document.createElement("div");
        bit.classList.add("konfetti");

        if (Math.random() < 0.3) {
            bit.classList.add("vit");
        }

        const fordrojning = Math.random() * 0.5;
        bit.style.left = Math.random() * 100 + "vw";
        bit.style.animationDuration = falltidSekunder + "s";
        bit.style.animationDelay = fordrojning + "s";
        document.body.appendChild(bit);

        setTimeout(function () {
            bit.remove();
        }, (falltidSekunder + fordrojning) * 1000);
    }
}

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
