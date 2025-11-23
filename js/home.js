// Home Page JavaScript (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Add any home page specific JavaScript here
    console.log('Home page loaded');
    
    // Example: Smooth scroll for "Explore Recipes" button
    const exploreBtn = document.querySelector('.cta-button');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Scroll to recipes section if it exists on this page
            const recipesSection = document.getElementById('recipes');
            if (recipesSection) {
                recipesSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Redirect to recipes page if not on single page
                window.location.href = 'recipes.html';
            }
        });
    }
});