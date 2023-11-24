const words = ["Alessandro", "Emanuele", "Federico", "Federico", "Francesco", "Andrea",
            "Tommaso", "Mattia", "Sofia", "Aurora", "Giulia", "Vittoria", "Martina",
            "Chiara", "Anna", "Sara", "Federica", "Francesca", "Emma", "Luigi", "Gennaro"]

const dynamicText = document.querySelector("span[id*='typing-names']");

//inizializzo variabili
let wordIndex = Math.floor(Math.random() * 21);
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // scrivi il carattere
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // rimuovi carattere
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // cambia parola
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? Math.floor(Math.random() * words.length) : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
