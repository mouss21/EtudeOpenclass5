const slides = [
    {
       "image":"slide1.jpg",
       "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
       "image":"slide2.jpg",
       "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
       "image":"slide3.jpg",
       "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
       "image":"slide4.png",
       "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let numero = 0;

// Fonction pour les points 
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour les image et les texte
function updateCarousel(index, direction) {
    if (numero === -1 && direction === 'left') {
        numero = slides.length - 1;
    } 
    else if (numero === slides.length && direction === 'right') {
        numero = 0;
    }

    // les image
    const imagePath = `assets/images/slideshow/${slides[numero].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${numero + 1}`;

    // les texte
    const tagLine = slides[numero].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    numero = (numero - 1);
    updateCarousel(numero, 'left');
    updateDots(numero); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    numero = (numero + 1) ;
    updateCarousel(numero, 'right');
    updateDots(numero); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
updateCarousel(numero, 'démarrage');
updateDots(numero); // Mettez à jour les points indicateurs pour la première diapositive