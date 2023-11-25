let currentSectionIndex = 1;
const sections = ["intro", "materiali", "collegamenti", "codice"];

function scrollToElement() {
    const nextSectionId = sections[currentSectionIndex];
    const nextSectionElement = document.getElementById(nextSectionId);
    nextSectionElement.scrollIntoView({behavior: "smooth", block: "start"});    
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
}