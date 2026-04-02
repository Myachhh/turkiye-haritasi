document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('#turkey-map path');
    const tooltip = document.getElementById('tooltip');

    paths.forEach(path => {
        path.addEventListener('mouseenter', (e) => {
            paths.forEach(p => p.style.opacity = "0.2"); // Diğerlerini soğut
            e.target.style.opacity = "1";
            
            // Tooltip içeriği (SVG'de isim yoksa id'yi basar)
            tooltip.textContent = e.target.getAttribute('title') || e.target.id || "İl Detayı";
            tooltip.classList.add('visible');
        });

        path.addEventListener('mouseleave', () => {
            paths.forEach(p => p.style.opacity = "1");
            tooltip.classList.remove('visible');
        });

        path.addEventListener('mousemove', (e) => {
            // Tooltip'in fareyi tam takip etmesi için hassas ayar
            tooltip.style.left = e.clientX + 20 + 'px';
            tooltip.style.top = e.clientY + 20 + 'px';
        });

        path.addEventListener('click', (e) => {
            // Tıklayınca ilgili ile gitme fonksiyonu
            const cityId = e.target.id;
            window.location.href = `cities/${cityId}.html`;
        });
    });
});
