const laserKnapp = document.querySelector("#laser-knapp");
const laserText = document.querySelector("#laser-text");
const laserRaknare = document.querySelector("#laser-raknare");

let antalSkott = 0;

laserKnapp.addEventListener("click", function () {
    laserText.textContent = "PEW PEW! 🔴🔴 Konkurrensen är utplånad.";

    antalSkott = antalSkott + 1;
    laserRaknare.textContent = "Antal laserskott: " + antalSkott;
});

const btn = document.getElementById('invertBtn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('inverted');
    
    if (document.body.classList.contains('inverted')) {
        btn.textContent = 'Dark Mode';
    } else {
        btn.textContent = 'Light Mode';
    }
});
