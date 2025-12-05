document.addEventListener('DOMContentLoaded', function () {

    // WhatsApp Form Submission
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let nome = document.getElementById('nome').value;
            let email = document.getElementById('email').value;
            let telefone = document.getElementById('telefone').value;
            let mensagem = document.getElementById('mensagem').value;

            let numeroWhatsapp = "5521972802652";

            let textoMensagem = `Novo Lead!
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Mensagem: ${mensagem}`;

            let mensagemCodificada = encodeURIComponent(textoMensagem);

            let url = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

            window.open(url, '_blank');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-up');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused'; // Pause initially
        observer.observe(el);
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
