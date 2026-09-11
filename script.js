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
