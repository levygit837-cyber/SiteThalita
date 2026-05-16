document.addEventListener('DOMContentLoaded', () => {
    
    // Header scroll effect
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-glass', 'bg-graphite/80');
                header.classList.remove('bg-graphite/40');
            } else {
                header.classList.remove('shadow-glass', 'bg-graphite/80');
                header.classList.add('bg-graphite/40');
            }
        });
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-group');
    revealElements.forEach(el => observer.observe(el));


    // Procedimentos Accordion
    const procedimentoCards = document.querySelectorAll('.procedimento-card .accordion-input');
    procedimentoCards.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                procedimentoCards.forEach(other => {
                    if (other !== input) other.checked = false;
                });
            }
        });
    });

    // Timeline logic
    const timelineContainer = document.getElementById('timeline-container');
    const timelineProgress = document.getElementById('timeline-progress');

    if(timelineContainer && timelineProgress) {
        window.addEventListener('scroll', () => {
            const rect = timelineContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Start drawing when top of container hits middle of screen
            const startPoint = rect.top - (windowHeight / 2); 
            const height = rect.height;
            
            let percentage = 0;
            if (startPoint < 0) {
                // Calculate percentage
                percentage = (Math.abs(startPoint) / height) * 100;
                if(percentage > 100) percentage = 100;
            }
            
            timelineProgress.style.height = `${percentage}%`;
        });
    }
});
