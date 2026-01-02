// Smooth scrolling for navigation links (excluding resume button)
document.querySelectorAll('a[href^="#"]:not([id="resumeBtn"])').forEach(anchor => {
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

// Floating Chat Bot functionality
const floatingChatBot = document.getElementById('floatingChatBot');
const chatBotHeader = document.getElementById('chatBotHeader');
const chatBotToggle = document.getElementById('chatBotToggle');
const chatBotBody = document.getElementById('chatBotBody');
const floatingChatInput = document.getElementById('floatingChatInput');
const floatingChatSend = document.getElementById('floatingChatSend');
const floatingChatMessages = document.getElementById('floatingChatMessages');

// Show floating chat bot by default after a short delay
setTimeout(() => {
    floatingChatBot.classList.add('visible');
}, 2000);

// Toggle chat bot body (minimize/maximize)
chatBotToggle.addEventListener('click', () => {
    chatBotBody.classList.toggle('minimized');
    chatBotToggle.textContent = chatBotBody.classList.contains('minimized') ? '+' : '−';
});

// Click header to toggle chat bot visibility
chatBotHeader.addEventListener('click', (e) => {
    if (e.target !== chatBotToggle) {
        if (floatingChatBot.classList.contains('visible')) {
            floatingChatBot.classList.remove('visible');
        } else {
            floatingChatBot.classList.add('visible');
            floatingChatInput.focus();
        }
    }
});

// Chat bot responses
const chatResponses = {
    help: () => {
        return `I can help you learn about Hema! Here's what I can tell you about:

• **about** - Learn about Hema's background and passion
• **skills** - Explore her technical expertise
• **projects** - Discover her featured projects
• **contact** - Get her contact information
• **resume** - View and download her resume
• **github** - Visit her GitHub profile 🚀
• **linkedin** - Connect on LinkedIn 💼
• **email** - Send her an email ✉️

Just ask me anything or use these keywords!`;
    },
    about: () => {
        return `👋 **About Hema Sri Puppala**

Hema is a passionate Software Developer with a strong background in security and full-stack development. She recently completed her Master's in Computer Science from The University of Texas at Arlington and has hands-on experience in web application security.

🔐 **Security Focus**: Experienced in OWASP practices, vulnerability assessment, and secure coding
💻 **Full-Stack Skills**: Proficient in Python, JavaScript, React, Django, and modern web technologies
🤖 **AI Enthusiast**: Works with LLMs, RAG systems, and AI-powered applications

She's always eager to take on new challenges and build secure, scalable solutions!`;
    },
    skills: () => {
        return `🛠️ **Technical Skills**

**Languages**: Python, JavaScript/TypeScript, SQL, Java, C++
**Frameworks**: Django, FastAPI, Node.js, Express, React, Next.js
**Databases**: PostgreSQL, SQLite, Redis, MongoDB, MySQL, Firebase
**AI/LLM**: OpenAI API, LLMs, RAG, Embeddings, Prompt Engineering, LangChain
**Security**: OWASP Top 10, Input Validation, Auth Security, SCA
**Cloud/DevOps**: Docker, GitHub Actions, Azure, AWS, Linux, Git, CI/CD

Hema combines security expertise with modern development practices!`;
    },
    projects: () => {
        return `🚀 **Featured Projects**

**1. FinAI** - AI-Powered Financial Analysis Platform
• Built with Django, PostgreSQL, Docker, Azure
• Features portfolio tracking, stock analysis, and AI insights
• GitHub: FinaiWorld

**2. Tudu** - AI Smart Task Planner
• React + Django with JWT authentication
• AI-assisted planning and Google Maps integration
• GitHub: TuduSmartPlanner

**3. Atharva** - AI + IoT Smart Farming Platform
• Combines crop recommendations with IoT monitoring
• Marketplace for direct farmer-to-consumer sales
• GitHub: Atharva-AgriTech

Each project showcases her expertise in AI, security, and full-stack development!`;
    },
    contact: () => {
        return `📬 **Let's Connect!**

📧 **Email**: puppalahemasri23@gmail.com
📱 **Phone**: +1 (469) 822-0771
📍 **Location**: Dallas, Texas

💼 **Quick Actions**:
🔗 Type "github" to visit my GitHub profile
💼 Type "linkedin" to connect on LinkedIn
✉️ Type "email" to send me a message

Hema is always interested in new opportunities and exciting projects. Feel free to reach out for collaborations, job opportunities, or just to chat about technology!`;
    },
    github: () => {
        setTimeout(() => {
            window.open('https://github.com/HemaSriPuppala', '_blank');
        }, 1000);
        return `🚀 **Redirecting to GitHub!**

✨ Taking you to Hema's GitHub profile where you can explore:

🔍 **Featured Repositories**:
• FinAI - AI-Powered Financial Platform
• Tudu - Smart Task Planner
• Atharva - IoT Smart Farming Platform

💻 **What you'll find**:
• 20+ repositories showcasing full-stack development
• AI/ML projects with real-world applications
• Security-focused development practices
• Clean, well-documented code

🌟 Don't forget to star the repositories you find interesting!

*Opening in 1 second...*`;
    },
    linkedin: () => {
        setTimeout(() => {
            window.open('https://www.linkedin.com/in/hema-sri-puppala/', '_blank');
        }, 1000);
        return `💼 **Connecting on LinkedIn!**

✨ Taking you to Hema's LinkedIn profile to:

🤝 **Professional Network**:
• Connect with a passionate Software Developer
• View detailed work experience and achievements
• See recommendations from colleagues
• Discover shared professional interests

📈 **Career Journey**:
• Master's in Computer Science from UT Arlington
• Security-focused development experience
• AI and full-stack development expertise

🎯 **Let's connect and grow our professional network together!**

*Opening in 1 second...*`;
    },
    email: () => {
        setTimeout(() => {
            window.location.href = 'mailto:puppalahemasri23@gmail.com?subject=Hello Hema! - From Your Portfolio&body=Hi Hema,%0D%0A%0D%0AI visited your portfolio website and would love to connect.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards,';
        }, 1000);
        return `✉️ **Opening Email Client!**

📨 **Getting ready to compose an email to Hema**:

📧 **To**: puppalahemasri23@gmail.com
📝 **Subject**: Hello Hema! - From Your Portfolio

💡 **Email Tips**:
• Introduce yourself and how you found her portfolio
• Mention specific projects or skills that caught your attention
• Be clear about collaboration opportunities or questions
• Include your contact information

🎯 **Perfect for**:
• Job opportunities and collaborations
• Project discussions and consultations
• Technical questions and mentorship
• Networking and professional connections

*Opening your email client in 1 second...*`;
    },
    resume: () => {
        window.open('HemaSri_CV.pdf', '_blank');
        return `📄 **Resume opened!** Your resume is now opening in a new tab where you can view and download it.`;
    }
};

// Convert markdown-style formatting to HTML
function formatMessageContent(content) {
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold** to <strong>
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // *italic* to <em>
        .replace(/\n/g, '<br>') // line breaks
        .replace(/• /g, '&bull; '); // bullet points
}

// Add message to floating chat
function addFloatingMessage(content, isBot = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `floating-message ${isBot ? 'bot-message' : 'user-message'}`;
    
    const formattedContent = isBot ? formatMessageContent(content) : content;
    
    if (isBot) {
        messageDiv.innerHTML = `
            <span class="floating-message-avatar">🤖</span>
            <div class="floating-message-content">
                <div>${formattedContent}</div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="floating-message-content">
                <div>${formattedContent}</div>
            </div>
            <span class="floating-message-avatar">👤</span>
        `;
    }
    
    floatingChatMessages.appendChild(messageDiv);
    floatingChatMessages.scrollTop = floatingChatMessages.scrollHeight;
}

// Handle floating chat input
function handleFloatingChatInput() {
    const userInput = floatingChatInput.value.trim();
    if (!userInput) return;
    
    // Add user message
    addFloatingMessage(userInput, false);
    floatingChatInput.value = '';
    
    // Process user input (same logic as before)
    const lowerInput = userInput.toLowerCase();
    let response = '';
    
    if (lowerInput.includes('help') || lowerInput.includes('what can you do')) {
        response = chatResponses.help();
    } else if (lowerInput === 'github' || lowerInput.includes('github profile') || lowerInput.includes('visit github')) {
        response = chatResponses.github();
    } else if (lowerInput === 'linkedin' || lowerInput.includes('linkedin profile') || lowerInput.includes('connect linkedin')) {
        response = chatResponses.linkedin();
    } else if (lowerInput === 'email' || lowerInput.includes('send email') || lowerInput.includes('compose email')) {
        response = chatResponses.email();
    } else if (lowerInput.includes('about') || lowerInput.includes('who is hema') || lowerInput.includes('background')) {
        response = chatResponses.about();
    } else if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('technical')) {
        response = chatResponses.skills();
    } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
        response = chatResponses.projects();
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('phone')) {
        response = chatResponses.contact();
    } else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
        response = chatResponses.resume();
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        response = `Hello! 👋 I'm Hema's AI assistant. I'm here to help you learn about her background, skills, and experience. 

💡 **Quick Actions**: Try typing **github**, **linkedin**, or **email** for instant connections!

What would you like to know?`;
    } else {
        response = `I'm not sure about that specific question, but I can help you with:

• Learning about Hema's background and experience
• Exploring her technical skills and expertise  
• Discovering her featured projects
• Getting her contact information
• Viewing her resume
• **github** - Visit her GitHub profile 🚀
• **linkedin** - Connect on LinkedIn 💼
• **email** - Send her an email ✉️

What would you like to know about?`;
    }
    
    // Add bot response with a slight delay
    setTimeout(() => {
        addFloatingMessage(response, true);
    }, 500);
}

// Floating chat input event listeners
floatingChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleFloatingChatInput();
    }
});

floatingChatSend.addEventListener('click', handleFloatingChatInput);

// Floating quick reply buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('floating-quick-reply')) {
        const command = e.target.dataset.command;
        floatingChatInput.value = command;
        handleFloatingChatInput();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (floatingChatBot.classList.contains('visible')) {
            floatingChatBot.classList.remove('visible');
        }
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const navLogo = document.querySelector('.nav-logo');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const heroSection = document.querySelector('#home');
    const heroHeight = heroSection ? heroSection.offsetHeight : 600;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(252, 231, 243, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(252, 231, 243, 0.8)';
    }
    
    // Show/hide logo based on scroll position
    if (currentScroll > heroHeight * 0.7) {
        navLogo.classList.add('visible');
    } else {
        navLogo.classList.remove('visible');
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


