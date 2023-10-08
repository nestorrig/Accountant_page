const questions = document.getElementsByClassName('faq__item__question')
for (const q of questions) {
    q.addEventListener('click', showOrHideAnswer)
}

function showOrHideAnswer(e) {
    const question = e.currentTarget;
    const answer = question.nextElementSibling

    // Cierra la pregunta abierta, cierra todos tecnicamente
    for (const q of questions) {
        q.classList.remove('faq__item__question__active')
        q.nextElementSibling.classList.remove('faq__item__answer__active')
    }
    // Abre la pregunta seleccionada
    question.classList.add('faq__item__question__active')
    answer.classList.add('faq__item__answer__active')

}