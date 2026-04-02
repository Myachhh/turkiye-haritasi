document.addEventListener('DOMContentLoaded', () => {
    // Haritadaki tüm illeri (path) seçiyoruz
    const paths = document.querySelectorAll('#turkey-map path');
    const tooltip = document.getElementById('tooltip');

    paths.forEach(path => {
        // Fare ilin üzerine geldiğinde
        path.addEventListener('mouseenter', (e) => {
            // Diğer illeri soluklaştır, üzerine gelineni parlat
            paths.forEach(p => p.style.opacity = "0.3");
            e.target.style.opacity = "1";
            
            // Tooltip içine ilin adını yazdır
            // (Not: SVG içinde 'title' etiketi yoksa 'İl Detayı' yazar)
            const cityName = e.target.getAttribute('title') || "İl Detayı";
            tooltip.textContent = cityName;
            tooltip.classList.add('visible');
        });

        // Fare ilin üzerinden çekildiğinde
        path.addEventListener('mouseleave', () => {
            // Her şeyi eski parlaklığına döndür
            paths.forEach(p => p.style.opacity = "1");
            tooltip.classList.remove('visible');
        });

        // Fare hareket ettikçe kutucuk fareyi takip etsin
        path.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY - 15 + 'px';
        });
    });
});
