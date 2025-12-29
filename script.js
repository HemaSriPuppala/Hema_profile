// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Terminal functionality
const devModeBtn = document.getElementById('devModeBtn');
const terminalModal = document.getElementById('terminalModal');
const closeTerminal = document.getElementById('closeTerminal');
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');

// Open terminal
devModeBtn.addEventListener('click', () => {
    terminalModal.classList.add('active');
    terminalInput.focus();
});

// Close terminal
closeTerminal.addEventListener('click', () => {
    terminalModal.classList.remove('active');
});

// Close terminal on outside click
terminalModal.addEventListener('click', (e) => {
    if (e.target === terminalModal) {
        terminalModal.classList.remove('active');
    }
});

// Terminal commands
const commands = {
    help: () => {
        return `Available commands:
  help          - Show this help message
  about         - About Hema Sri Puppala
  skills        - Display technical skills
  projects      - Show featured projects
  contact       - Display contact information
  clear         - Clear terminal
  resume        - Download resume
  exit          - Close terminal`;
    },
    about: () => {
        return `Hema Sri Puppala
Software Developer

Passionate about building scalable applications and solving complex problems.`;
    },
    skills: () => {
        return `Technical Skills:
- Frontend: React, JavaScript, HTML5, CSS3, TypeScript
- Backend: Node.js, Python, Django, MongoDB, PostgreSQL
- Cloud & Tools: Git, Docker, AWS, Azure, AI/ML`;
    },
    projects: () => {
        return `Featured Projects:
1. Project Name - Description
2. Project Name - Description
3. Project Name - Description
4. Project Name - Description

Visit the Projects section to learn more.`;
    },
    contact: () => {
        return `Contact Information:
Email: your.email@example.com
Phone: +1 (234) 567-8900
Location: City, State, Country`;
    },
    clear: () => {
        const lines = terminalBody.querySelectorAll('.terminal-line');
        lines.forEach(line => line.remove());
        return '';
    },
    resume: () => {
        return 'Resume download initiated...';
    },
    exit: () => {
        terminalModal.classList.remove('active');
        return '';
    }
};

// Handle terminal input
terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        
        // Add command line to terminal
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="terminal-prompt">hema@portfolio:\~$</span><span class="terminal-text">${command}</span>`;
        terminalBody.insertBefore(commandLine, terminalBody.lastElementChild);
        
        // Execute command
        let output = '';
        if (commands[command]) {
            output = commands[command]();
        } else if (command === '') {
            output = '';
        } else {
            output = `Command not found: ${command}. Type 'help' for available commands.`;
        }
        
        // Add output if any
        if (output) {
            const outputLine = document.createElement('div');
            outputLine.className = 'terminal-line';
            outputLine.innerHTML = `<span class="terminal-text">${output}</span>`;
            terminalBody.insertBefore(outputLine, terminalBody.lastElementChild);
        }
        
        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});

// Close terminal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && terminalModal.classList.contains('active')) {
        terminalModal.classList.remove('active');
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section > .container > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Remove tilt and background effects - keep blank
const heroBackground = document.getElementById('heroBackground');

// Keep background blank and static
if (heroBackground) {
    heroBackground.style.transform = 'none';
    heroBackground.style.background = 'transparent';
}
                    startY: particleY,
                    targetX: particleX + explosionX + randomX,
                    targetY: particleY + explosionY + randomY,
                    color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
                    originalColor: { r: originalR, g: originalG, b: originalB },
                    size: pixelSize * (0.5 + Math.random() * 1.0),
                    startSize: pixelSize * (0.5 + Math.random() * 1.0),
                    speed: 0.008 + Math.random() * 0.025,
                    progress: 0,
                    delay: Math.random() * 1.0, // Staggered disappearance
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.3,
                    gravity: 0.2 + Math.random() * 0.3,
                    fadeStart: 0.3 + Math.random() * 0.4, // When to start fading


