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
function validButton() {
    prevButton.disabled = false
    prevButton.classList.remove('disable_button')
    nextButton.disabled = false
    nextButton.classList.remove('disable_button')
    if (currentIndex === 0) {
        prevButton.disabled = true
        prevButton.classList.add('disable_button')
    }
    if (currentIndex === positionIndicatorElements.length - 1) {
        nextButton.disabled = true
        nextButton.classList.add('disable_button')
    }
}
validButton()
prevButton.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
});

function scrollToIndex(index) {
    if (index >= 0 && index < positionIndicatorElements.length) {
    currentIndex = index;
    const scrollDistance = index * testimonialsBox.clientWidth;
    testimonialsBox.scrollLeft = scrollDistance;
    }
}

testimonialsBox.addEventListener('scroll', () => {
    const scrollLeft = testimonialsBox.scrollLeft;

    positionIndicatorElements.forEach((indicator, index) => {
        const indicatorPosition = index * testimonialsBox.clientWidth;
        if (scrollLeft >= indicatorPosition && scrollLeft < indicatorPosition + testimonialsBox.clientWidth) {
            indicator.style.backgroundColor = '#ffb400';
            currentIndex = index
            validButton()
        } else {
            indicator.style.backgroundColor = '#0e2927';
        }
    });
});