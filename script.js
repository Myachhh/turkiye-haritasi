document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('#turkey-map path');
    const tooltip = document.getElementById('tooltip');

    paths.forEach(path => {
        path.addEventListener('mouseenter', (e) => {
            // Sadece üzerine gelinenin ismini göster
            const cityName = e.target.getAttribute('title') || "İl Bilgisi";
            tooltip.textContent = cityName;
            tooltip.classList.add('visible');
        });

        path.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        path.addEventListener('mousemove', (e) => {
            // Tooltip fareyi tam dibinden takip etsin
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        });

        path.addEventListener('click', (e) => {
            const cityId = e.target.id || "bilinmeyen";
            // Tıklayınca cities klasörüne yönlendirir
            window.location.href = `cities/${cityId}.html`;
        });
    });
});
