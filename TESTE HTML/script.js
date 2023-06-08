// Abrir links do rodapé em uma nova aba do navegador
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach(link => {
    link.setAttribute('target', '_blank');
});
