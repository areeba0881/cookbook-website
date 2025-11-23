// Single Recipe Page JavaScript for Interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Single recipe page interactivity added.');

    // --- 1. Ingredient Check-off Functionality ---
    const ingredientList = document.querySelector('.ingredients-list');
    if (ingredientList) {
        const ingredients = ingredientList.querySelectorAll('li');
        ingredients.forEach(item => {
            item.addEventListener('click', function() {
                // Toggle the 'checked' class, which applies strikethrough/opacity
                this.classList.toggle('checked');
            });
        });
    }

    // --- 2. Instruction Step Highlighter ---
    const instructionSteps = document.querySelectorAll('.instructions-list li');
    if (instructionSteps.length > 0) {
        
        // Function to remove highlight from all steps
        const removeAllHighlights = () => {
            instructionSteps.forEach(s => s.classList.remove('highlighted-step'));
        };
        
        // GLOBAL LISTENER: Remove highlight when clicking anywhere on the page
        document.addEventListener('click', removeAllHighlights);
        
        instructionSteps.forEach(step => {
            step.addEventListener('click', function(e) {
                // STOP PROPAGATION: Prevent the global document listener from immediately
                // un-highlighting the step we just clicked.
                e.stopPropagation(); 
                
                // Toggle state check
                const isAlreadyHighlighted = this.classList.contains('highlighted-step');

                // Clear all highlights first
                removeAllHighlights();
                
                // If it was not already highlighted, re-add the highlight to the clicked step
                if (!isAlreadyHighlighted) {
                    this.classList.add('highlighted-step');
                }
            });
        });
    }
});