// Doctoralia Reviews Integration
class DoctoraliaReviews {
    constructor() {
        this.reviewsContainer = document.querySelector('.testimonial-slider');
        this.doctoraliaUrl = 'https://www.doctoralia.es/beatriz-jimenez-canet/medico-de-familia/motril';
        this.fallbackReviews = [
            {
                text: "La Dra. Beatriz es maravillosa. No solo es una gran profesional, sino que te hace sentir escuchado y comprendido. Su consulta transmite mucha paz.",
                author: "María G.",
                rating: 5,
                date: "2024-01-15"
            },
            {
                text: "Me realizó una ecografía en la misma visita y me ahorró mucha incertidumbre. Un trato excelente y muy cercano.",
                author: "Carlos R.",
                rating: 5,
                date: "2024-01-10"
            }
        ];
    }

    // Method 1: Using Doctoralia API (if available)
    async fetchDoctoraliaReviews() {
        try {
            // Doctoralia doesn't have a public API, but we can try web scraping
            // This would require a backend proxy due to CORS
            const response = await fetch('/api/doctoralia-reviews');
            const reviews = await response.json();
            return this.formatReviews(reviews);
        } catch (error) {
            console.log('Doctoralia API not available, using fallback');
            return null;
        }
    }

    // Method 2: Web scraping with backend proxy
    async scrapeDoctoraliaReviews() {
        try {
            const response = await fetch('/api/scrape-doctoralia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: this.doctoraliaUrl,
                    selector: '.review-item, .opinion-item'
                })
            });
            const reviews = await response.json();
            return this.formatReviews(reviews);
        } catch (error) {
            console.log('Scraping failed, using fallback');
            return null;
        }
    }

    // Method 3: Google Reviews API (alternative)
    async fetchGoogleReviews() {
        try {
            // Using Google Places API
            const placeId = 'YOUR_GOOGLE_PLACE_ID';
            const apiKey = 'YOUR_GOOGLE_API_KEY';
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
            );
            const data = await response.json();
            return this.formatGoogleReviews(data.result.reviews);
        } catch (error) {
            console.log('Google Reviews not available, using fallback');
            return null;
        }
    }

    // Method 4: Manual JSON file (recommended for now)
    async fetchLocalReviews() {
        try {
            const response = await fetch('data/reviews.json');
            const reviews = await response.json();
            return this.formatReviews(reviews);
        } catch (error) {
            console.log('Local reviews not found, using fallback');
            return null;
        }
    }

    formatReviews(reviews) {
        return reviews.map(review => ({
            text: review.text || review.comment || review.opinion || 'Excelente profesional.',
            author: review.author || review.patient_name || 'Paciente',
            rating: review.rating || review.stars || 5,
            date: review.date || new Date().toISOString().split('T')[0],
            source: review.source || 'Doctoralia'
        }));
    }

    formatGoogleReviews(reviews) {
        return reviews.map(review => ({
            text: review.text,
            author: review.author_name,
            rating: review.rating,
            date: new Date(review.time * 1000).toISOString().split('T')[0],
            source: 'Google'
        }));
    }

    renderReviews(reviews) {
        if (!this.reviewsContainer) return;

        // Create carousel structure
        this.reviewsContainer.innerHTML = `
            <div class="testimonial-track">
                ${reviews.map(review => this.createReviewCard(review)).join('')}
            </div>
            <div class="testimonial-controls">
                <button class="testimonial-btn prev-btn" aria-label="Previous review">‹</button>
                <div class="testimonial-indicators">
                    ${reviews.map((_, index) => `<div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('')}
                </div>
                <button class="testimonial-btn next-btn" aria-label="Next review">›</button>
            </div>
            <div class="testimonial-autoplay">
                <button class="autoplay-btn active">⏸ Pausar</button>
            </div>
        `;

        this.initCarousel(reviews.length);
    }

    createReviewCard(review) {
        const stars = this.generateStars(review.rating);
        const formattedDate = this.formatDate(review.date);
        const source = review.source || 'Doctoralia'; // Default to Doctoralia if undefined

        return `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-stars">${stars}</div>
                    <div class="testimonial-source">${source}</div>
                </div>
                <p class="testimonial-text">"${review.text}"</p>
                <div class="testimonial-footer">
                    <cite class="testimonial-author">- ${review.author}</cite>
                    <time class="testimonial-date">${formattedDate}</time>
                </div>
            </div>
        `;
    }

    initCarousel(totalReviews) {
        this.currentIndex = 0;
        this.totalReviews = totalReviews;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;

        const track = this.reviewsContainer.querySelector('.testimonial-track');
        const prevBtn = this.reviewsContainer.querySelector('.prev-btn');
        const nextBtn = this.reviewsContainer.querySelector('.next-btn');
        const indicators = this.reviewsContainer.querySelectorAll('.indicator');
        const autoplayBtn = this.reviewsContainer.querySelector('.autoplay-btn');

        // Navigation functions
        const goToSlide = (index) => {
            this.currentIndex = index;
            const offset = -index * 100;
            track.style.transform = `translateX(${offset}%)`;
            
            // Update indicators
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });

            // Update button states
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === totalReviews - 1;
        };

        const nextSlide = () => {
            const nextIndex = (this.currentIndex + 1) % totalReviews;
            goToSlide(nextIndex);
        };

        const prevSlide = () => {
            const prevIndex = (this.currentIndex - 1 + totalReviews) % totalReviews;
            goToSlide(prevIndex);
        };

        // Button event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Indicator event listeners
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        // Autoplay functionality
        const startAutoplay = () => {
            this.autoPlayInterval = setInterval(nextSlide, 5000);
            this.isAutoPlaying = true;
            autoplayBtn.textContent = '⏸ Pausar';
            autoplayBtn.classList.add('active');
        };

        const stopAutoplay = () => {
            clearInterval(this.autoPlayInterval);
            this.isAutoPlaying = false;
            autoplayBtn.textContent = '▶ Reproducir';
            autoplayBtn.classList.remove('active');
        };

        const toggleAutoplay = () => {
            if (this.isAutoPlaying) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        };

        autoplayBtn.addEventListener('click', toggleAutoplay);

        // Pause autoplay on hover
        this.reviewsContainer.addEventListener('mouseenter', () => {
            if (this.isAutoPlaying) {
                clearInterval(this.autoPlayInterval);
            }
        });

        this.reviewsContainer.addEventListener('mouseleave', () => {
            if (this.isAutoPlaying) {
                startAutoplay();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === ' ') {
                e.preventDefault();
                toggleAutoplay();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.reviewsContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.reviewsContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        });

        // Initialize
        goToSlide(0);
        startAutoplay();
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star">★</span>';
        }
        if (hasHalfStar) {
            stars += '<span class="star half">☆</span>';
        }
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
            stars += '<span class="star empty">☆</span>';
        }

        return stars;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }

    async init() {
        // Try different methods in order of preference
        let reviews = null;

        // Method 1: Try local JSON file first (recommended)
        reviews = await this.fetchLocalReviews();

        // Method 2: Try Doctoralia scraping (if backend available)
        if (!reviews) {
            reviews = await this.scrapeDoctoraliaReviews();
        }

        // Method 3: Try Google Reviews (if API key available)
        if (!reviews) {
            reviews = await this.fetchGoogleReviews();
        }

        // Method 4: Use fallback reviews
        if (!reviews) {
            reviews = this.fallbackReviews;
        }

        this.renderReviews(reviews);
    }
}

// Initialize reviews when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const doctoraliaReviews = new DoctoraliaReviews();
    doctoraliaReviews.init();
});
