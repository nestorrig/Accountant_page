const testimonialsBox = document.getElementById('testimonialsBox');
const testimonialsItems = document.querySelectorAll('.testimonials__item');
const positionIndicators = document.getElementById('positionIndicators');
const positionIndicatorElements = []
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

testimonialsItems.forEach((item) => {
    const indicator = document.createElement('div')
    indicator.className = 'position-indicator'
    positionIndicators.append(indicator)
    positionIndicatorElements.push(indicator)
})
positionIndicatorElements.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
    scrollToIndex(index);
    });
});
prevButton.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
});

function scrollToIndex(index) {
    // dentro del rango
    if (index >= 0 && index < positionIndicatorElements.length) {
        currentIndex = index;
        const scrollDistance = index * testimonialsBox.clientWidth;
        testimonialsBox.scrollLeft = scrollDistance;
    }
    // va al final
    if (index < 0) {
        currentIndex = positionIndicatorElements.length - 1
        const scrollDistance = positionIndicatorElements.length * testimonialsBox.clientWidth;
        testimonialsBox.scrollLeft = scrollDistance;
    }
    // regresa al inicio
    if (index === positionIndicatorElements.length) {
        currentIndex = 0
        testimonialsBox.scrollLeft = 0;
    }
}

testimonialsBox.addEventListener('scroll', () => {
    const scrollLeft = testimonialsBox.scrollLeft;

    positionIndicatorElements.forEach((indicator, index) => {
        const indicatorPosition = index * testimonialsBox.clientWidth;
        if (scrollLeft >= indicatorPosition && scrollLeft < indicatorPosition + testimonialsBox.clientWidth) {
            indicator.style.backgroundColor = '#ffb400';
            currentIndex = index
        } else {
            indicator.style.backgroundColor = '#0e2927';
        }
    });
});