// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Game rules content
const gameRules = {
    'chess': {
        title: 'Chess Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Each player starts with 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns</li>
                <li>White moves first, then players alternate turns</li>
                <li>Pieces move according to their specific rules</li>
                <li>The goal is to checkmate the opponent's king</li>
            </ul>
            <h3>Special Moves:</h3>
            <ul>
                <li>Castling: Move king and rook in one move</li>
                <li>En passant: Special pawn capture</li>
                <li>Pawn promotion: Replace pawn with any piece when reaching opposite end</li>
            </ul>
        `
    },
    'scrabble': {
        title: 'Scrabble Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Each player draws 7 tiles</li>
                <li>First word must cover center square</li>
                <li>Words must be connected to existing words</li>
                <li>Score points based on letter values and premium squares</li>
            </ul>
        `
    },
    'table-tennis': {
        title: 'Table Tennis Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Games are played to 11 points</li>
                <li>Must win by 2 points</li>
                <li>Serve alternates every 2 points</li>
                <li>Ball must bounce once on each side</li>
            </ul>
        `
    },
    'jenga': {
        title: 'Jenga Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Stack blocks in layers of 3</li>
                <li>Players take turns removing one block at a time</li>
                <li>Place removed block on top of tower</li>
                <li>Game ends when tower falls</li>
            </ul>
        `
    },
    'uno': {
        title: 'Uno Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Each player starts with 7 cards</li>
                <li>Match color or number with top card</li>
                <li>Special cards have special effects</li>
                <li>First to play all cards wins</li>
            </ul>
        `
    },
    'carrom': {
        title: 'Carrom Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Players take turns striking pieces</li>
                <li>Score points by pocketing pieces</li>
                <li>Queen is worth extra points</li>
                <li>First to reach target score wins</li>
            </ul>
        `
    },
    'pictionary': {
        title: 'Pictionary Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Players take turns drawing</li>
                <li>Team members guess the drawing</li>
                <li>No letters, numbers, or symbols allowed</li>
                <li>First team to reach finish wins</li>
            </ul>
        `
    },
    'monopoly': {
        title: 'Monopoly Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>Players take turns rolling dice</li>
                <li>Buy properties when landing on them</li>
                <li>Pay rent when landing on owned properties</li>
                <li>Last player with money wins</li>
            </ul>
        `
    },
    'foosball': {
        title: 'Foosball Rules',
        content: `
            <h3>Basic Rules:</h3>
            <ul>
                <li>First to 5 goals wins</li>
                <li>No spinning the rods</li>
                <li>Ball must be in play for 3 seconds</li>
                <li>No jarring the table</li>
            </ul>
        `
    }
};

// Get modal elements
const modal = document.getElementById('rulesModal');
const modalContent = document.getElementById('rulesContent');
const closeBtn = document.querySelector('.close');

// Function to show rules
function showRules(game) {
    const rules = gameRules[game];
    if (rules) {
        modalContent.innerHTML = `
            <h2>${rules.title}</h2>
            ${rules.content}
        `;
        modal.style.display = 'block';
    }
}

// Close modal when clicking the X
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your server
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// Gallery Image Click Handler
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        // Here you could implement a lightbox or modal to show the full image
        console.log('Gallery image clicked:', img.src);
    });
});

// Feedback Slider Auto Scroll
const feedbackSlider = document.querySelector('.feedback-slider');
let isDown = false;
let startX;
let scrollLeft;

feedbackSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    feedbackSlider.classList.add('active');
    startX = e.pageX - feedbackSlider.offsetLeft;
    scrollLeft = feedbackSlider.scrollLeft;
});

feedbackSlider.addEventListener('mouseleave', () => {
    isDown = false;
    feedbackSlider.classList.remove('active');
});

feedbackSlider.addEventListener('mouseup', () => {
    isDown = false;
    feedbackSlider.classList.remove('active');
});

feedbackSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - feedbackSlider.offsetLeft;
    const walk = (x - startX) * 2;
    feedbackSlider.scrollLeft = scrollLeft - walk;
}); 