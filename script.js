// Função para destacar a aba ativa enquanto rola
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');

    let currentSection = "";

    // Determina qual seção está visível na tela
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Destaca o link da seção visível
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
