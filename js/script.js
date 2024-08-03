// replace text header 
const  checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    });
}

// Navbar scroll
function userScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Video modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSource;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSource = videoBtn.getAttribute('data-bs-src');
        console.log(videoSource);
    });
}

if (videoModal !== null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute('src', `${videoSource}?autoplay=1&modestbranding=1&showinfo=0`);
    });
    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', videoSource);
    });
}