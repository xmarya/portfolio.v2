

export default function navigateToSection(sectionId) {
    // Update the URL hash
    window.location.hash = `#${sectionId}`;

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({behavior: "smooth"});
}