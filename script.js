document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const observerOptions = {
        root: null, // Sleduje celé okno
        rootMargin: '-100px 0px -100px 0px', // Přidá extra prostor (odsazení)
        threshold: 0.2 // Spustí se, když je 20 % obsahu viditelných
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(content);
});