// Basic interaction effects
document.addEventListener('DOMContentLoaded', () => {
    const socialButtons = document.querySelectorAll('.social-button');
    const features = document.querySelectorAll('.feature');
    const lightBeam = document.querySelector('.light-beam');
    
    // Light beam follows mouse
    document.addEventListener('mousemove', (e) => {
        if (lightBeam) {
            lightBeam.style.left = `${e.clientX}px`;
            lightBeam.style.top = `${e.clientY}px`;
            
            // Slightly change the light intensity based on movement
            const speed = Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2));
            const intensity = Math.min(0.3 + speed / 25, 0.45);
            
            lightBeam.style.background = `radial-gradient(
                circle at center,
                rgba(255, 255, 255, ${intensity}) 0%,
                rgba(255, 255, 255, ${intensity / 2}) 40%,
                transparent 70%
            )`;
        }
    });
    
    // Make light beam stronger when hovering over buttons
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            if (lightBeam) {
                lightBeam.style.width = '300px';
                lightBeam.style.height = '300px';
                lightBeam.style.opacity = '1';
                lightBeam.style.filter = 'blur(2px)';
                lightBeam.style.background = `radial-gradient(
                    circle at center,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0.25) 40%,
                    transparent 70%
                )`;
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            if (lightBeam) {
                lightBeam.style.width = '250px';
                lightBeam.style.height = '250px';
                lightBeam.style.opacity = '0.9';
                lightBeam.style.filter = 'blur(4px)';
            }
        });
    });
    
    // Simple hover effects for features
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-5px)';
            if (lightBeam) {
                lightBeam.style.width = '280px';
                lightBeam.style.height = '280px';
                lightBeam.style.opacity = '0.95';
                lightBeam.style.background = `radial-gradient(
                    circle at center,
                    rgba(255, 255, 255, 0.35) 0%,
                    rgba(255, 255, 255, 0.2) 40%,
                    transparent 70%
                )`;
            }
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
            if (lightBeam) {
                lightBeam.style.width = '250px';
                lightBeam.style.height = '250px';
                lightBeam.style.opacity = '0.9';
            }
        });
    });
    
    // Slightly dim the light when not moving
    let timeout;
    document.addEventListener('mousemove', () => {
        if (lightBeam) {
            lightBeam.style.opacity = '0.9';
            clearTimeout(timeout);
            
            timeout = setTimeout(() => {
                lightBeam.style.opacity = '0.7';
            }, 2000);
        }
    });
});

// Handle mobile devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    const lightBeam = document.querySelector('.light-beam');
    if (lightBeam) {
        lightBeam.style.display = 'none';
    }
}

// Language switch functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-lang-zh]');
    let currentLang = localStorage.getItem('language') || 'zh';

    // Set initial language
    setLanguage(currentLang);

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    function setLanguage(lang) {
        // Update button states
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update content
        elements.forEach(element => {
            const text = element.getAttribute(`data-lang-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }
});

// 光球跟随鼠标
document.addEventListener('DOMContentLoaded', function() {
    const cursorLight = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', function(e) {
        cursorLight.style.left = e.clientX + 'px';
        cursorLight.style.top = e.clientY + 'px';
    });
    
    // 鼠标悬停在可点击元素上时，光球变大
    document.querySelectorAll('a, button, .lang-btn').forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorLight.style.width = '40px';
            cursorLight.style.height = '40px';
        });
        
        element.addEventListener('mouseleave', function() {
            cursorLight.style.width = '30px';
            cursorLight.style.height = '30px';
        });
    });
}); 