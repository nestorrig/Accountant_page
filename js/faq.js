const questions = document.getElementsByClassName('faq__item__question')
for (const q of questions) {
    q.addEventListener('click', showOrHideAnswer, )
}

function showOrHideAnswer(e) {
    const question = e.currentTarget;
    const answer = question.nextElementSibling
    const arrowDown = question.children[1].firstElementChild
    
    question.classList.toggle('faq__item__question__active')

    if (answer.classList.contains('inactive')) {
        arrowDown.style.animation = 'rotateIcon .3s linear both'
        answer.classList.remove('inactive')
    } else {
        answer.classList.add('inactive')
        arrowDown.style.animation = 'reverseRotateIcon .3s linear both'
    }
}