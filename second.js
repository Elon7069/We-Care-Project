<script>
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
</script>
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle visibility of the current answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Hide other open answers
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.nextElementSibling.style.display = 'none';
            }
        });
    });
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

