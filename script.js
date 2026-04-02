// Türkiye illeri ve SVG path verileri (basitleştirilmiş koordinatlar)
const cities = [
    { id: "01", name: "Adana", path: "M 565 340 L 590 320 L 620 330 L 615 360 L 580 365 Z" },
    { id: "02", name: "Adıyaman", path: "M 660 300 L 690 290 L 700 310 L 680 330 L 655 320 Z" },
    { id: "03", name: "Afyonkarahisar", path: "M 380 280 L 420 270 L 430 300 L 400 320 L 370 300 Z" },
    { id: "04", name: "Ağrı", path: "M 870 200 L 910 190 L 920 220 L 890 240 L 860 225 Z" },
    { id: "05", name: "Amasya", path: "M 560 180 L 590 170 L 600 190 L 580 210 L 555 200 Z" },
    { id: "06", name: "Ankara", path: "M 450 220 L 510 200 L 530 230 L 500 270 L 450 260 Z" },
    { id: "07", name: "Antalya", path: "M 400 360 L 470 340 L 500 380 L 460 420 L 390 400 Z" },
    { id: "08", name: "Artvin", path: "M 780 120 L 810 110 L 820 135 L 795 150 L 775 140 Z" },
    { id: "09", name: "Aydın", path: "M 280 340 L 330 330 L 340 360 L 300 380 L 270 360 Z" },
    { id: "10", name: "Balıkesir", path: "M 230 200 L 290 180 L 300 220 L 260 250 L 220 230 Z" },
    { id: "11", name: "Bilecik", path: "M 320 200 L 350 190 L 360 210 L 340 230 L 315 220 Z" },
    { id: "12", name: "Bingöl", path: "M 760 240 L 790 230 L 800 255 L 775 270 L 755 260 Z" },
    { id: "13", name: "Bitlis", path: "M 830 260 L 860 250 L 870 275 L 845 290 L 825 280 Z" },
    { id: "14", name: "Bolu", path: "M 420 170 L 460 160 L 470 185 L 445 200 L 415 190 Z" },
    { id: "15", name: "Burdur", path: "M 370 340 L 400 330 L 410 355 L 385 370 L 365 360 Z" },
    { id: "16", name: "Bursa", path: "M 280 180 L 330 165 L 345 190 L 315 210 L 275 200 Z" },
    { id: "17", name: "Çanakkale", path: "M 160 170 L 210 150 L 230 180 L 200 210 L 155 195 Z" },
    { id: "18", name: "Çankırı", path: "M 490 170 L 530 160 L 545 185 L 520 205 L 485 195 Z" },
    { id: "19", name: "Çorum", path: "M 540 160 L 590 145 L 610 175 L 580 200 L 535 185 Z" },
    { id: "20", name: "Denizli", path: "M 330 320 L 370 305 L 385 335 L 355 355 L 325 340 Z" },
    { id: "21", name: "Diyarbakır", path: "M 720 270 L 770 255 L 785 290 L 750 315 L 715 295 Z" },
    { id: "22", name: "Edirne", path: "M 150 100 L 190 85 L 205 110 L 180 130 L 145 120 Z" },
    { id: "23", name: "Elazığ", path: "M 700 250 L 740 235 L 755 265 L 725 285 L 695 270 Z" },
    { id: "24", name: "Erzincan", path: "M 700 200 L 750 185 L 765 215 L 735 240 L 695 225 Z" },
    { id: "25", name: "Erzurum", path: "M 790 180 L 860 160 L 880 200 L 840 230 L 785 210 Z" },
    { id: "26", name: "Eskişehir", path: "M 360 220 L 410 205 L 425 235 L 395 260 L 355 245 Z" },
    { id: "27", name: "Gaziantep", path: "M 640 330 L 680 315 L 695 345 L 665 365 L 635 350 Z" },
    { id: "28", name: "Giresun", path: "M 660 150 L 700 140 L 710 165 L 685 180 L 655 170 Z" },
    { id: "29", name: "Gümüşhane", path: "M 720 160 L 760 150 L 770 175 L 745 195 L 715 180 Z" },
    { id: "30", name: "Hakkari", path: "M 900 290 L 940 280 L 955 310 L 925 330 L 895 315 Z" },
    { id: "31", name: "Hatay", path: "M 610 370 L 640 360 L 655 400 L 625 430 L 600 400 Z" },
    { id: "32", name: "Isparta", path: "M 390 310 L 420 300 L 435 325 L 410 345 L 385 330 Z" },
    { id: "33", name: "Mersin", path: "M 510 360 L 560 345 L 575 380 L 540 410 L 500 390 Z" },
    { id: "34", name: "İstanbul", path: "M 240 140 L 290 125 L 305 150 L 275 175 L 235 160 Z" },
    { id: "35", name: "İzmir", path: "M 210 270 L 270 250 L 285 290 L 250 320 L 200 300 Z" },
    { id: "36", name: "Kars", path: "M 860 160 L 910 145 L 925 175 L 895 200 L 855 185 Z" },
    { id: "37", name: "Kastamonu", path: "M 500 130 L 560 115 L 580 145 L 545 170 L 495 155 Z" },
    { id: "38", name: "Kayseri", path: "M 560 260 L 620 245 L 640 280 L 600 310 L 555 290 Z" },
    { id: "39", name: "Kırklareli", path: "M 180 80 L 220 65 L 235 90 L 210 110 L 175 100 Z" },
    { id: "40", name: "Kırşehir", path: "M 510 250 L 545 240 L 555 265 L 530 285 L 505 270 Z" },
    { id: "41", name: "Kocaeli", path: "M 300 160 L 340 150 L 350 170 L 330 185 L 295 175 Z" },
    { id: "42", name: "Konya", path: "M 440 300 L 520 280 L 550 330 L 500 370 L 430 345 Z" },
    { id: "43", name: "Kütahya", path: "M 330 240 L 375 225 L 390 255 L 360 280 L 325 265 Z" },
    { id: "44", name: "Malatya", path: "M 660 260 L 710 245 L 725 280 L 690 305 L 655 285 Z" },
    { id: "45", name: "Manisa", path: "M 250 260 L 300 245 L 315 275 L 285 300 L 245 285 Z" },
    { id: "46", name: "Kahramanmaraş", path: "M 620 300 L 660 285 L 675 315 L 645 340 L 615 320 Z" },
    { id: "47", name: "Mardin", path: "M 760 310 L 810 295 L 825 330 L 790 355 L 755 335 Z" },
    { id: "48", name: "Muğla", path: "M 290 370 L 350 355 L 370 395 L 330 425 L 280 405 Z" },
    { id: "49", name: "Muş", path: "M 800 240 L 840 230 L 855 260 L 825 280 L 795 265 Z" },
    { id: "50", name: "Nevşehir", path: "M 530 280 L 560 270 L 575 295 L 550 315 L 525 300 Z" },
    { id: "51", name: "Niğde", path: "M 520 320 L 555 310 L 570 340 L 540 360 L 515 345 Z" },
    { id: "52", name: "Ordu", path: "M 620 145 L 665 135 L 680 160 L 655 180 L 615 165 Z" },
    { id: "53", name: "Rize", path: "M 750 130 L 785 120 L 795 145 L 770 160 L 745 150 Z" },
    { id: "54", name: "Sakarya", path: "M 350 165 L 385 155 L 395 175 L 375 195 L 345 185 Z" },
    { id: "55", name: "Samsun", path: "M 580 130 L 630 115 L 650 145 L 620 170 L 575 155 Z" },
    { id: "56", name: "Siirt", path: "M 820 290 L 855 280 L 870 310 L 845 330 L 815 315 Z" },
    { id: "57", name: "Sinop", path: "M 545 105 L 590 95 L 605 120 L 580 140 L 540 125 Z" },
    { id: "58", name: "Sivas", path: "M 610 200 L 690 180 L 715 220 L 670 255 L 605 235 Z" },
    { id: "59", name: "Tekirdağ", path: "M 190 120 L 240 105 L 255 130 L 225 150 L 185 140 Z" },
    { id: "60", name: "Tokat", path: "M 590 175 L 640 160 L 655 190 L 625 215 L 585 200 Z" },
    { id: "61", name: "Trabzon", path: "M 710 135 L 755 125 L 770 150 L 745 170 L 705 155 Z" },
    { id: "62", name: "Tunceli", path: "M 730 225 L 770 215 L 785 245 L 755 265 L 725 250 Z" },
    { id: "63", name: "Şanlıurfa", path: "M 680 310 L 740 295 L 760 335 L 720 360 L 675 340 Z" },
    { id: "64", name: "Uşak", path: "M 320 290 L 360 280 L 375 305 L 350 325 L 315 310 Z" },
    { id: "65", name: "Van", path: "M 870 250 L 930 235 L 950 275 L 910 305 L 865 285 Z" },
    { id: "66", name: "Yozgat", path: "M 540 210 L 590 195 L 605 225 L 575 250 L 535 235 Z" },
    { id: "67", name: "Zonguldak", path: "M 400 140 L 445 130 L 458 152 L 435 170 L 395 160 Z" },
    { id: "68", name: "Aksaray", path: "M 490 290 L 525 280 L 540 305 L 515 325 L 485 310 Z" },
    { id: "69", name: "Bayburt", path: "M 755 170 L 790 160 L 805 185 L 780 205 L 750 190 Z" },
    { id: "70", name: "Karaman", path: "M 470 340 L 510 330 L 525 355 L 495 375 L 465 360 Z" },
    { id: "71", name: "Kırıkkale", path: "M 485 220 L 515 212 L 525 232 L 505 248 L 480 238 Z" },
    { id: "72", name: "Batman", path: "M 790 290 L 825 280 L 840 305 L 815 325 L 785 310 Z" },
    { id: "73", name: "Şırnak", path: "M 850 310 L 895 300 L 915 335 L 880 360 L 845 340 Z" },
    { id: "74", name: "Bartın", path: "M 440 130 L 470 122 L 480 142 L 460 158 L 435 148 Z" },
    { id: "75", name: "Ardahan", path: "M 830 145 L 865 135 L 880 160 L 855 180 L 825 165 Z" },
    { id: "76", name: "Iğdır", path: "M 895 180 L 930 170 L 945 195 L 920 215 L 890 200 Z" },
    { id: "77", name: "Yalova", path: "M 290 165 L 315 158 L 322 175 L 305 188 L 285 180 Z" },
    { id: "78", name: "Karabük", path: "M 460 150 L 495 140 L 508 162 L 485 180 L 455 168 Z" },
    { id: "79", name: "Kilis", path: "M 630 355 L 655 348 L 665 368 L 650 382 L 625 372 Z" },
    { id: "80", name: "Osmaniye", path: "M 595 345 L 625 338 L 638 362 L 615 380 L 590 365 Z" },
    { id: "81", name: "Düzce", path: "M 395 158 L 425 150 L 435 170 L 415 185 L 390 175 Z" }
];

// SVG haritayı oluştur
function createMap() {
    const svg = document.getElementById('turkey-map');
    
    cities.forEach(city => {
        // Namespace hatasını burada düzelttik
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', city.path);
        path.setAttribute('class', 'city');
        path.setAttribute('id', `city-${city.id}`);
        path.setAttribute('data-name', city.name);
        path.setAttribute('data-id', city.id);
        
        // Event listeners
        path.addEventListener('mouseenter', handleMouseEnter);
        path.addEventListener('mouseleave', handleMouseLeave);
        path.addEventListener('mousemove', handleMouseMove);
        path.addEventListener('click', handleClick);
        
        svg.appendChild(path);
    });
}

// Mouse enter - il üzerine gelince
function handleMouseEnter(e) {
    const hoveredCity = e.target;
    const cityName = hoveredCity.getAttribute('data-name');
    
    // Tüm illeri soluklaştır
    document.querySelectorAll('.city').forEach(city => {
        if (city !== hoveredCity) {
            city.classList.add('dimmed');
        }
    });
    
    // Aktif ili vurgula
    hoveredCity.classList.add('active');
    
    // Tooltip göster
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = cityName;
    tooltip.classList.add('visible');
}

// Mouse leave - il üzerinden ayrılınca
function handleMouseLeave(e) {
    // Tüm soluklaştırmaları kaldır
    document.querySelectorAll('.city').forEach(city => {
        city.classList.remove('dimmed', 'active');
    });
    
    // Tooltip gizle
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('visible');
}

// Mouse move - tooltip pozisyonu
function handleMouseMove(e) {
    const tooltip = document.getElementById('tooltip');
    const mapContainer = document.querySelector('.map-container');
    const rect = mapContainer.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y - 50}px`;
}

// Click - il sayfasına git
function handleClick(e) {
    const cityName = e.target.getAttribute('data-name');
    
    // İl sayfasına yönlendir
    const urlName = cityName
        .toLowerCase()
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/\s+/g, '-');
    
    window.location.href = `cities/${urlName}.html`;
}

// Sayfa yüklenince haritayı oluştur
document.addEventListener('DOMContentLoaded', createMap);
