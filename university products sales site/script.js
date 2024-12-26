window.addEventListener('scroll', function() {
    var cardContainer = document.querySelector('.card-container');
    var rect = cardContainer.getBoundingClientRect();

    // Kart konteynerinin görünür olup olmadığını kontrol et
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        document.querySelector('.left-card').classList.add('animate-left');
        document.querySelector('.center-card').classList.add('animate-center');
        document.querySelector('.right-card').classList.add('animate-right');
    }
});

let currentCardIndex = 0;
const productCards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Başlangıçta ilk ürünü göster
function showCard(index) {
productCards.forEach((card, i) => {
    card.classList.remove('visible'); // Tüm kartları gizle
    if (i === index) {
    card.classList.add('visible'); // Sadece geçerli kartı göster
    }
});
}

prevBtn.addEventListener('click', function() {
currentCardIndex = (currentCardIndex > 0) ? currentCardIndex - 1 : productCards.length - 1;
showCard(currentCardIndex);
});

nextBtn.addEventListener('click', function() {
currentCardIndex = (currentCardIndex < productCards.length - 1) ? currentCardIndex + 1 : 0;
showCard(currentCardIndex);
});

// İlk kartı göster
showCard(currentCardIndex);