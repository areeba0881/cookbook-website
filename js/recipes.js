// Smart Recipe Filter with Page Load Animations Only
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    let hasInteracted = false;

    // Function to animate cards on page load
    function animateCardsOnLoad() {
        recipeCards.forEach((card, index) => {
            // Set initial state
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            // Staggered animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Function to filter recipes (no animations)
    function filterRecipes(filterValue) {
        recipeCards.forEach(card => {
            const shouldShow = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
            
            if (shouldShow) {
                // Instant show - no animation
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'none';
            } else {
                // Instant hide - no animation
                card.style.display = 'none';
                card.style.transition = 'none';
            }
        });

        // Restore hover transitions after filtering
        setTimeout(() => {
            recipeCards.forEach(card => {
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });
        }, 50);
    }

    // Initialize page with animations
    animateCardsOnLoad();

    // Add click events to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mark that user has interacted
            if (!hasInteracted) {
                hasInteracted = true;
            }

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter with no animations
            filterRecipes(filterValue);
        });
    });
    
    // Save recipe functionality
    const saveButtons = document.querySelectorAll('.save-recipe-btn');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('saved');
            this.innerHTML = this.classList.contains('saved') ? 
                '<i class="fas fa-bookmark"></i>' : 
                '<i class="far fa-bookmark"></i>';
        });
    });
});