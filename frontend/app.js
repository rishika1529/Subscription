function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}
 
// Create Floating Shapes
function createShapes() {
    const shapesContainer = document.getElementById('shapes');
    if (!shapesContainer) return;
    
    const shapes = [
        { size: 100, type: 'circle', top: '10%', left: '15%' },
        { size: 80, type: 'square', top: '70%', left: '80%' },
        { size: 60, type: 'circle', top: '40%', left: '70%' },
        { size: 120, type: 'square', top: '60%', left: '10%' },
        { size: 90, type: 'circle', top: '20%', left: '85%' }
    ];
 
    shapes.forEach((s, i) => {
        const shape = document.createElement('div');
        shape.className = `shape ${s.type}`;
        shape.style.width = s.size + 'px';
        shape.style.height = s.size + 'px';
        shape.style.top = s.top;
        shape.style.left = s.left;
        shape.style.animationDelay = i * 2 + 's';
        shapesContainer.appendChild(shape);
    });
}
 
// Create Meteors
function createMeteors() {
    const meteorsContainer = document.getElementById('meteors');
    if (!meteorsContainer) return;
    
    setInterval(() => {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.animationDuration = (Math.random() * 3 + 5) + 's';
        meteorsContainer.appendChild(meteor);
        setTimeout(() => meteor.remove(), 8000);
    }, 3000);
}
 
// Initialize all background animations
function initBackground() {
    createStars();
    createShapes();
    createMeteors();
}
 
// Run on page load
document.addEventListener('DOMContentLoaded', initBackground);