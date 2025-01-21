// JavaScript to randomly place molecules on the screen
document.addEventListener('DOMContentLoaded', () => {
    const moleculesContainer = document.querySelector('.molecules');
    
    // Function to generate random molecule particles
    function createMolecule() {
        const molecule = document.createElement('div');
        molecule.classList.add('molecule');
        const size = Math.random() * 5 + 5; // Random size between 5px to 10px
        molecule.style.width = `${size}px`;
        molecule.style.height = `${size}px`;
        molecule.style.left = `${Math.random() * window.innerWidth}px`;
        molecule.style.top = `${Math.random() * window.innerHeight}px`;
        
        // Random animation duration and delay for each molecule
        molecule.style.animationDuration = `${Math.random() * 15 + 10}s`;
        molecule.style.animationDelay = `${Math.random() * 5}s`;
        
        moleculesContainer.appendChild(molecule);

        // Remove molecule once its animation is complete
        setTimeout(() => molecule.remove(), 20000);
    }

    // Generate 20 molecules at once
    setInterval(createMolecule, 200);
});
