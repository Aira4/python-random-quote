// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initAnimations();
    initCounters();
    initTestimonials();
    initPortfolio();
    initFAQ();
    initContactForm();
    initPricingToggle();
    initServiceFilters();
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    const observerOptions = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    countUp(counter);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });
}

// Testimonials slider
function initTestimonials() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }

    // Navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    // Auto-advance testimonials
    if (testimonialItems.length > 0) {
        setInterval(nextTestimonial, 5000);
    }
}

// Portfolio functionality
function initPortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');

    // Portfolio filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                }
            });
        });
    });

    // Portfolio modal
    const portfolioLinks = document.querySelectorAll('.portfolio-link[data-project]');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const projectData = getProjectData(projectId);
    
    if (projectData && modal) {
        // Update modal content
        document.getElementById('modal-title').textContent = projectData.title;
        document.getElementById('modal-description').textContent = projectData.description;
        document.getElementById('modal-client').textContent = projectData.client;
        document.getElementById('modal-category').textContent = projectData.category;
        document.getElementById('modal-technologies').textContent = projectData.technologies;
        document.getElementById('modal-duration').textContent = projectData.duration;
        
        const featuresList = document.getElementById('modal-features-list');
        featuresList.innerHTML = '';
        projectData.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function getProjectData(projectId) {
    const projects = {
        elearning: {
            title: 'E-Learning Platform',
            description: 'A comprehensive educational platform with interactive courses, progress tracking, and collaborative features for modern learning.',
            client: 'EduTech Solutions',
            category: 'Web Development',
            technologies: 'React, Node.js, MongoDB, Socket.io',
            duration: '4 months',
            features: [
                'Interactive video lessons',
                'Progress tracking system',
                'Live chat and forums',
                'Assessment tools',
                'Mobile responsive design'
            ]
        },
        fitness: {
            title: 'Fitness Tracker App',
            description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.',
            client: 'FitLife Corp',
            category: 'Mobile Development',
            technologies: 'React Native, Firebase, Redux',
            duration: '3 months',
            features: [
                'Workout tracking',
                'Nutrition logging',
                'Social challenges',
                'Health analytics',
                'Wearable integration'
            ]
        },
        fashion: {
            title: 'Fashion E-commerce Store',
            description: 'Modern e-commerce platform with advanced product catalog, payment processing, and inventory management.',
            client: 'Style Boutique',
            category: 'E-commerce',
            technologies: 'Vue.js, Laravel, Stripe API',
            duration: '5 months',
            features: [
                'Product catalog',
                'Shopping cart',
                'Payment processing',
                'Order management',
                'Admin dashboard'
            ]
        },
        banking: {
            title: 'Banking App UI Design',
            description: 'Secure and intuitive banking application interface focusing on user experience and accessibility.',
            client: 'SecureBank',
            category: 'UI/UX Design',
            technologies: 'Figma, Adobe XD, Principle',
            duration: '2 months',
            features: [
                'Account overview',
                'Transaction history',
                'Money transfer',
                'Bill payments',
                'Security features'
            ]
        },
        analytics: {
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization platform with customizable charts and reporting capabilities.',
            client: 'DataCorp',
            category: 'Web Development',
            technologies: 'Angular, D3.js, Python, PostgreSQL',
            duration: '6 months',
            features: [
                'Real-time data visualization',
                'Custom report generation',
                'Interactive charts',
                'Data export tools',
                'Multi-user access'
            ]
        },
        food: {
            title: 'Food Delivery App',
            description: 'Complete food ordering and delivery ecosystem with restaurant management and real-time tracking.',
            client: 'QuickEats',
            category: 'Mobile Development',
            technologies: 'Flutter, Node.js, Google Maps API',
            duration: '4 months',
            features: [
                'Restaurant browsing',
                'Order placement',
                'Real-time tracking',
                'Payment integration',
                'Rating system'
            ]
        }
    };
    
    return projects[projectId];
}

// FAQ accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.btn-submit');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
}

function validateForm() {
    let isValid = true;
    const form = document.getElementById('contactForm');
    
    // Required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearError(field);
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required';
        isValid = false;
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }
    }
    
    // Terms checkbox
    if (fieldName === 'terms' && !field.checked) {
        errorMessage = 'You must accept the terms and conditions';
        isValid = false;
    }
    
    if (!isValid) {
        showError(field, errorMessage);
    }
    
    return isValid;
}

function showError(field, message) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    field.style.borderColor = '#ef4444';
}

function clearError(field) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    field.style.borderColor = '#e2e8f0';
}

function submitForm() {
    const submitBtn = document.querySelector('.btn-submit');
    const form = document.getElementById('contactForm');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Hide loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        form.reset();
    }, 2000);
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Pricing toggle
function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    const priceAmounts = document.querySelectorAll('.amount');
    
    if (toggle) {
        toggle.addEventListener('change', function() {
            priceAmounts.forEach(amount => {
                const monthlyPrice = amount.getAttribute('data-monthly');
                const annualPrice = amount.getAttribute('data-annual');
                
                if (this.checked) {
                    amount.textContent = annualPrice;
                } else {
                    amount.textContent = monthlyPrice;
                }
            });
        });
    }
}

// Service filters
function initServiceFilters() {
    const filterButtons = document.querySelectorAll('.services-filter .filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter service cards
            serviceCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
initPerformanceOptimizations();

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could send error reports to analytics service
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Accessibility improvements
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 2000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Focus management for modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                trapFocus(e, this);
            }
        });
    });
}

function trapFocus(e, container) {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    }
}

// Initialize accessibility features
initAccessibility();