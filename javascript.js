*document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.getElementById('carousel-content');
    let currentIndex = 0;

    function moveCarousel() {
        const sectionWidth = document.querySelector('.carousel-section').offsetWidth;
        currentIndex = (currentIndex + 1) % carouselContent.children.length;
        const translateValue = -currentIndex * sectionWidth + 'px';
        carouselContent.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(moveCarousel, 1800); // velocidade do carrossel se precisar só trocar (em milissegundos)
});
