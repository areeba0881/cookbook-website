// About page animation
function animateAboutPage() {
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage && aboutContent) {
        // Check if elements are in viewport
        const elementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        // Animate when in viewport
        if (elementInViewport(aboutImage)) {
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0)';
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateX(0)';
        }
    }
}

// Run animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Initial check
    animateAboutPage();
    
    // Check on scroll
    window.addEventListener('scroll', animateAboutPage);
});