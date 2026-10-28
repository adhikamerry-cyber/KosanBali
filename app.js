
function showScreen(screenId) {
  
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
   
    document.getElementById(screenId).classList.add('active');
}

// Navigasi Khusus
function goToHome() { showScreen('home-screen'); }
function goToDetail() { showScreen('detail-screen'); }


window.onload = () => {
    // Pindah ke layar login otomatis setelah 2.5 detik
    setTimeout(() => {
        if(document.getElementById('splash-screen').classList.contains('active')) {
            showScreen('login-screen');
        }
    }, 2500);

    
    const sliderWrapper = document.getElementById('promo-slider');
    let currentIndex = 0;
    const totalSlides = 3; 

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        const slidePercentage = currentIndex * -(100 / totalSlides); 
        sliderWrapper.style.transform = `translateX(${slidePercentage}%)`;
    }, 3000); // Bergeser setiap 3 detik
};