document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('#turkey-map path');
    const tooltip = document.getElementById('tooltip');

    paths.forEach(path => {
        path.addEventListener('mouseenter', (e) => {
            // DİĞERLERİNİ SOLUKLAŞTIRAN KODU SİLDİK - Siyah kalacaklar
            tooltip.textContent = e.target.getAttribute('title') || "İl Bilgisi";
            tooltip.classList.add('visible');
        });

        path.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        path.addEventListener('mousemove', (e) => {
            // Tooltip konumu
            tooltip.style.left = e.clientX + 20 + 'px';
            tooltip.style.top = e.clientY + 20 + 'px';
        });

        path.addEventListener('click', (e) => {
            const cityId = e.target.id;
            window.location.href = `cities/${cityId}.html`;
        });
    });
});
