// Custom Cursor
const cursor = document.querySelector('.cursor');
const interactiveElements = document.querySelectorAll('a, button, .feature-card');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// Magnetic Button Effect
const magneticBtn = document.querySelector('.magnetic-btn');

magneticBtn.addEventListener('mousemove', (e) => {
    const position = magneticBtn.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

magneticBtn.addEventListener('mouseleave', () => {
    magneticBtn.style.transform = 'translate(0px, 0px)';
});

// Color Swatcher
const swatches = document.querySelectorAll('.swatch');
const mainShoe = document.getElementById('main-shoe');
const root = document.documentElement;

swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        // Remove active class from all
        swatches.forEach(s => s.classList.remove('active'));
        // Add active to clicked
        swatch.classList.add('active');

        // Get color and values
        const colorName = swatch.getAttribute('data-color');
        const colorValue = swatch.getAttribute('data-color-value');

        // Update CSS Variable
        root.style.setProperty('--primary-color', colorValue);

        // Update Image
        // Assuming images are named sneaker-red.png, sneaker-blue.png, etc.
        mainShoe.style.opacity = '0'; // smooth exit
        setTimeout(() => {
            mainShoe.src = `./assets/sneaker-${colorName}.png`;
            mainShoe.style.opacity = '1'; // smooth entery
        }, 300);
    });
});

// Scroll Reveal
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
