document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('header-scrolled', window.scrollY > 50);
        });
    }

    const formOrcamento = document.querySelector('#form-orcamento');

    if (formOrcamento) {
        formOrcamento.addEventListener('submit', function(e) {
            const nome = document.querySelector('#nome');
            const mensagem = document.querySelector('#mensagem');

            // reset visual
            nome.style.border = '';
            mensagem.style.border = '';

            if (nome.value.trim().length < 3) {
                e.preventDefault();
                nome.style.border = '2px solid red';
                nome.focus();
                return;
            }

            if (mensagem.value.trim().length < 10) {
                e.preventDefault();
                mensagem.style.border = '2px solid red';
                mensagem.focus();
                return;
            }
        });
    }

    const images = document.querySelectorAll('.img-expand');

    images.forEach(image => {
        image.addEventListener('click', function (e) {
            e.stopPropagation();

            images.forEach(img => img.classList.remove('active'));

            this.classList.add('active');
        });
    });

    document.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('active'));
    });

});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(el => observer.observe(el));