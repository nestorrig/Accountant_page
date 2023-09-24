const texts = []
const lettersFromTexts = []
const spanWords = document.getElementById('OffersWords')
let textIndex = 0;
let letterIndex = 0;



for (const text of document.getElementsByClassName('--card')) {
    texts.push(text.outerText);
}
for (let i = 0; i < texts.length; i++) {
    lettersFromTexts.push(Array.from(texts[i]));
}

function typeText() {
    const currentLetter = lettersFromTexts[textIndex][letterIndex];

    if (currentLetter) {
        spanWords.textContent += currentLetter;
        letterIndex++;
        setTimeout(typeText, 100); // Espera antes de mostrar la siguiente letra
    } else {
        // Si se completa una oración, pasa a la siguiente
        setTimeout(() => {
            spanWords.classList.add('complete_sencence') //añado efecto de borrado
        }, 2500);
        setTimeout(() => {
            spanWords.classList.remove('complete_sencence') // retiro efecto de borrado
        }, 3000);
        setTimeout(() => {
            spanWords.textContent = "";
            letterIndex = 0;
            textIndex = (textIndex + 1) % texts.length; // Circula por los textos
            setTimeout(typeText, 1000); // Espera antes de comenzar el siguiente texto
        }, 3000);
    }
}

// Comienza el proceso
typeText();