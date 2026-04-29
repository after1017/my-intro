document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations Setup using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    const scrollContainer = document.querySelector('.scroll-container');

    const observerOptions = {
        root: scrollContainer,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                // Remove class to replay animation when scrolling back
                entry.target.classList.remove('appear');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // 2. Avatar Image Upload functionality
    const avatarUploadInput = document.getElementById('avatar-upload');
    const profileImage = document.getElementById('profile-image');

    avatarUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                // Update the image source with the uploaded file
                profileImage.src = e.target.result;
            };
            
            reader.readAsDataURL(file);
        } else {
            alert('有効な画像ファイルを選択してください。');
        }
    });
});
