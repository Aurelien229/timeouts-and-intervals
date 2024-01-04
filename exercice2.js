let time = 0;


// Sélectionne l'élément div dans lequel le texte sera affiché
const outputElement = document.getElementById("output");
outputElement.innerText = time;

function timer() {
    outputElement.innerText = time;
    time++;
    if (time === 60) {
        outputElement.innerText ="Vous venez de perdre une minute de votre vie...";
    }
    else
        if (time === 120) {
            outputElement.innerText ="et une de plus...";
        }
        else
        if (time === 180) {
            outputElement.innerText ="ta vie est de plus en plus courte...";
        }
}
setInterval(timer, 1000);