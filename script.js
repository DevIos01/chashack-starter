const laserKnapp = document.querySelector("#laser-knapp");
const laserText = document.querySelector("#laser-text");

laserKnapp.addEventListener("click", function () {
    laserText.textContent = "PEW PEW! 🔴🔴 Konkurrensen är utplånad.";
});
