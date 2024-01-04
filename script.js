// Définition du tableau contenant les caractères de "Wilson-3"
const wilson = ["W", "i", "l", "s", "o", "n", "-", "3"];
let index = 0; // Initialise l'index qui sera utilisé pour parcourir le tableau

// Sélectionne l'élément div dans lequel le texte sera affiché
const outputElement = document.getElementById("output");

// Fonction de la machine à écrire
function typewriter() {
    // Met à jour le contenu de l'élément avec les caractères jusqu'à l'index actuel
    outputElement.textContent = wilson.slice(0, index).join("");
    index++; // Incrémente l'index pour afficher le caractère suivant
    
    // Arrête la machine à écrire une fois que tous les caractères ont été affichés
    if (index > wilson.length) {
        clearInterval(typewriterInterval);
    }
}

// Définit l'intervalle de temps pour la fonction de la machine à écrire
const typewriterInterval = setInterval(typewriter, 1000);


