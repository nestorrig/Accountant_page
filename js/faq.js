const questions = document.getElementsByClassName('faq__item__question')
for (const q of questions) {
    q.addEventListener('click', showOrHideAnswer)
}

function showOrHideAnswer(e) {
    const question = e.currentTarget;
    const answer = question.nextElementSibling
    // console.log(answer);
    
    question.classList.toggle('faq__item__question__active')

    if (answer.classList.contains('faq__item__answer__active')) {
        answer.classList.remove('faq__item__answer__active')
    } else {
        answer.classList.add('faq__item__answer__active')
    }
}