import '../css/style.css'

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  createParticles();
  initMobileMenu();
  initHeaderScroll();
  initSmoothScroll();
  initPackageTabs();
  initContactForm();
  initAnimations();
  initCosmicBanner();
  initParallax();
  initCursorEffect();
});

// AOS Animation
function initAOS() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

// Create Particles Background
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: rgba(255, 107, 53, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    particlesContainer.appendChild(particle);
  }

  // Add particle animation to CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Mobile Menu Toggle
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      document.body.style.overflow = 'hidden';
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    });
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 500) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Package Tabs
function initPackageTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show success message
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      button.innerHTML = '✓ Message envoyé!';
      button.style.background = 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }
}

// Enhanced Animations
function initAnimations() {
  // Service cards stagger animation
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Package cards hover effect
  const packageCards = document.querySelectorAll('.package-card');
  packageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) rotateZ(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // Gallery items
  const galleryItems = document.querySelectorAll('.gallery__item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      this.style.transform = 'scale(1.1)';
      setTimeout(() => {
        this.style.transform = '';
      }, 300);
    });
  });
}

// Cosmic Banner Animation
function initCosmicBanner() {
  const cosmicBanner = document.querySelector('.cosmic-banner__content');

  if (cosmicBanner) {
    let scale = 1;
    setInterval(() => {
      scale = scale === 1 ? 1.05 : 1;
      cosmicBanner.style.transform = `scale(${scale})`;
    }, 2000);
  }
}

// Parallax Effect
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const heroImage = document.querySelector('.hero__image-wrapper');
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Bowling ball rotation
    const bowlingBall = document.querySelector('.bowling-ball');
    if (bowlingBall) {
      bowlingBall.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.5}deg)`;
    }
  });
}

// Custom Cursor Effect for Service Cards
function initCursorEffect() {
  const cards = document.querySelectorAll('.service-card, .package-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Console Art
console.log('%c🎳 BOWLING MIRABEL', 'font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c✨ Powered by Kiro AI', 'font-size: 14px; color: #4ECDC4; font-weight: bold;');
console.log('%cWebsite Features:', 'font-size: 12px; color: #B8C1EC; margin-top: 10px;');
console.log('• Smooth scroll animations');
console.log('• Interactive 3D card effects');
console.log('• Particle background system');
console.log('• Responsive mobile design');
console.log('• Custom parallax effects');


// Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Initialize scroll progress
initScrollProgress();

// Add preload class to prevent transitions on page load
document.body.classList.add('preload');
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 100);
});


// Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize back to top
initBackToTop();

// Active Navigation Link on Scroll
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Initialize active nav link
initActiveNavLink();


// Gallery Lightbox
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="Fermer">&times;</button>
      <button class="lightbox__prev" aria-label="Précédent">‹</button>
      <button class="lightbox__next" aria-label="Suivant">›</button>
      <img src="" alt="" class="lightbox__image">
      <div class="lightbox__caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = lightbox.querySelector('.lightbox__image');
  const lightboxCaption = lightbox.querySelector('.lightbox__caption');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__prev');
  const nextBtn = lightbox.querySelector('.lightbox__next');
  
  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img')?.src,
    alt: item.querySelector('img')?.alt,
    title: item.querySelector('.gallery__overlay h3')?.textContent,
    description: item.querySelector('.gallery__overlay p')?.textContent
  }));
  
  function showImage(index) {
    currentIndex = index;
    const image = images[index];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxCaption.innerHTML = `<h3>${image.title}</h3><p>${image.description}</p>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => showImage(index));
  });
  
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

// Initialize gallery lightbox
initGalleryLightbox();


// Bowling Game
function initBowlingGame() {
  const playBtn = document.getElementById('play-bowling');
  const ball = document.getElementById('bowling-ball-game');
  const pins = document.querySelectorAll('.pin');
  const strikeEffect = document.querySelector('.strike-effect-game');
  const scoreValue = document.getElementById('score-value');
  
  let score = 0;
  let isPlaying = false;
  
  if (!playBtn || !ball) return;
  
  playBtn.addEventListener('click', () => {
    if (isPlaying) return;
    
    isPlaying = true;
    playBtn.classList.add('playing');
    
    // Roll the ball
    ball.classList.add('rolling');
    
    // Knock down pins after delay
    setTimeout(() => {
      let pinsKnocked = 0;
      
      pins.forEach((pin, index) => {
        if (!pin.classList.contains('knocked')) {
          // Random chance to knock down each pin (80% chance)
          if (Math.random() > 0.2) {
            setTimeout(() => {
              const fallX = (Math.random() - 0.5) * 80;
              pin.style.setProperty('--fall-x', `${fallX}px`);
              pin.classList.add('knocked');
              pinsKnocked++;
              
              // Update score
              score += 10;
              scoreValue.textContent = score;
              
              // Check for strike
              if (pinsKnocked === pins.length) {
                setTimeout(() => {
                  strikeEffect.classList.add('show');
                  score += 50; // Bonus for strike
                  scoreValue.textContent = score;
                  
                  setTimeout(() => {
                    strikeEffect.classList.remove('show');
                  }, 2000);
                }, 300);
              }
            }, index * 50);
          }
        }
      });
    }, 1000);
    
    // Reset game
    setTimeout(() => {
      ball.classList.remove('rolling');
      
      // Reset pins
      pins.forEach(pin => {
        pin.classList.remove('knocked');
        pin.style.setProperty('--fall-x', '0px');
      });
      
      playBtn.classList.remove('playing');
      isPlaying = false;
    }, 3000);
  });
  
  // Click on ball to play
  ball.addEventListener('click', () => {
    if (!isPlaying) {
      playBtn.click();
    }
  });
  
  // Hover effect on pins
  pins.forEach(pin => {
    pin.addEventListener('mouseenter', () => {
      if (!isPlaying) {
        pin.style.transform = 'scale(1.1)';
      }
    });
    
    pin.addEventListener('mouseleave', () => {
      if (!isPlaying) {
        pin.style.transform = '';
      }
    });
  });
}

// Initialize bowling game
initBowlingGame();
