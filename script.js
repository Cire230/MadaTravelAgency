// Hero Slider
const heroSlides = [
    {
        title: "L'Aventure Malgache : Lémuriens & Baobabs Sacrés",
        desc: "Plongez au cœur d'une biodiversité unique au monde. De la danse des lémuriens dans les canopées à la majesté silencieuse de l'Allée des Baobabs, vivez une épopée inoubliable sur l'Île Rouge.",
        price: "À partir de 1350 € / Personne",
        bgImage: "assets/img/bandeau (2).jpg"
    },
    {
        title: "Nosy Be & Archipels : Paradis Tropicaux Préservés",
        desc: "Plages de rêve, eaux cristallines et nature luxuriante vous attendent.",
        price: "À partir de 1500 € / Personne",
        bgImage: "assets/img/bandeau (3).jpg"
    },
    {
        title: "Antananarivo : Cœur Vibrant de Madagascar, Entre Histoire et Authenticité",
        desc: "Antananarivo, la capitale animée de Madagascar, mêle histoire coloniale, marchés colorés et panoramas spectaculaires. Une ville vibrante où tradition et modernité se rencontrent.",
        price: "partir de 1650 € / Personne (circuit plus technique)",
        bgImage: "assets/img/bandeau (1).jpg"
    },
    {
        title: "La Foret de la Tsiribihina : Immersion Fluviale Authentique",
        desc: "Naviguez à travers des paysages sauvages et une biodiversité fascinante.",
        price: "À partir de 1100 € / Personne (expérience plus rustique)",
        bgImage: "assets/img/bandeau (4).jpg"
    }
];

let currentSlide = 0;
const heroSection = document.querySelector('.hero-slide');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroPrice = document.getElementById('hero-price');
const heroDots = document.querySelectorAll('.hero-dot');

function updateHeroSlide() {
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroSlides[currentSlide].bgImage}')`;
    heroTitle.textContent = heroSlides[currentSlide].title;
    heroDesc.textContent = heroSlides[currentSlide].desc;
    heroPrice.textContent = heroSlides[currentSlide].price;
    
    // Update dots
    heroDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
            dot.classList.remove('opacity-50');
        } else {
            dot.classList.remove('active');
            dot.classList.add('opacity-50');
        }
    });
    
    // Add fade-in animation
    heroTitle.classList.add('fade-in');
    heroDesc.classList.add('fade-in');
    heroPrice.classList.add('fade-in');
    
    setTimeout(() => {
        heroTitle.classList.remove('fade-in');
        heroDesc.classList.remove('fade-in');
        heroPrice.classList.remove('fade-in');
    }, 1000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHeroSlide();
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot navigation
heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-index'));
        updateHeroSlide();
    });
});

// Mobile menu toggle (would need more implementation)
document.querySelector('.md\\:hidden').addEventListener('click', () => {
    // Implement mobile menu toggle functionality here
    console.log('Mobile menu clicked');
});

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 320; // px
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function zoomImage(src) {
    document.getElementById('zoomedImage').src = src;
    document.getElementById('zoomModal').classList.remove('hidden');
}

function closeZoom() {
    document.getElementById('zoomModal').classList.add('hidden');
}

function toggleDropdown(card) {
    const dropdown = card.querySelector('.dropdown-content');
    dropdown.classList.toggle('open');
}
