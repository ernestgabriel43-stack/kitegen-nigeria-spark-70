// Component System

// Component base class
class Component {
  constructor(element, options = {}) {
    this.element = element;
    this.options = { ...this.defaultOptions, ...options };
    this.init();
  }
  
  get defaultOptions() {
    return {};
  }
  
  init() {
    // Override in subclasses
  }
  
  destroy() {
    // Override in subclasses
  }
}

// Header Component
class Header extends Component {
  init() {
    this.mobileMenuBtn = this.element.querySelector('#mobileMenuBtn');
    this.mobileNav = this.element.querySelector('#mobileNav');
    this.setupEventListeners();
    this.handleScroll();
  }
  
  setupEventListeners() {
    // Mobile menu toggle
    this.mobileMenuBtn?.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    
    // Close mobile menu when clicking on links
    this.mobileNav?.addEventListener('click', (e) => {
      if (e.target.matches('.mobile-nav-link, .mobile-service-link')) {
        this.closeMobileMenu();
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target) && this.mobileNav?.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });
    
    // Handle scroll for header styling
    window.addEventListener('scroll', throttle(() => {
      this.handleScroll();
    }, 100));
  }
  
  toggleMobileMenu() {
    const isOpen = this.mobileNav.classList.contains('active');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }
  
  openMobileMenu() {
    this.mobileNav.classList.add('active');
    this.mobileMenuBtn.querySelector('.menu-icon').classList.add('hidden');
    this.mobileMenuBtn.querySelector('.close-icon').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  closeMobileMenu() {
    this.mobileNav.classList.remove('active');
    this.mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
    this.mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  handleScroll() {
    const scrolled = window.scrollY > 10;
    this.element.classList.toggle('scrolled', scrolled);
  }
}

// Accordion Component
class Accordion extends Component {
  init() {
    this.items = this.element.querySelectorAll('.accordion-item');
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.element.addEventListener('click', (e) => {
      const trigger = e.target.closest('.accordion-trigger');
      if (trigger) {
        e.preventDefault();
        this.toggle(trigger.closest('.accordion-item'));
      }
    });
  }
  
  toggle(item) {
    const content = item.querySelector('.accordion-content');
    const isOpen = !content.classList.contains('hidden');
    
    if (this.options.single) {
      // Close all other items
      this.items.forEach(otherItem => {
        if (otherItem !== item) {
          this.close(otherItem);
        }
      });
    }
    
    if (isOpen) {
      this.close(item);
    } else {
      this.open(item);
    }
  }
  
  open(item) {
    const content = item.querySelector('.accordion-content');
    const trigger = item.querySelector('.accordion-trigger');
    const icon = trigger.querySelector('[data-lucide]');
    
    content.classList.remove('hidden');
    content.style.setProperty('--accordion-height', content.scrollHeight + 'px');
    content.classList.add('animate-accordion-down');
    
    if (icon) {
      icon.style.transform = 'rotate(180deg)';
    }
  }
  
  close(item) {
    const content = item.querySelector('.accordion-content');
    const trigger = item.querySelector('.accordion-trigger');
    const icon = trigger.querySelector('[data-lucide]');
    
    content.style.setProperty('--accordion-height', content.scrollHeight + 'px');
    content.classList.add('animate-accordion-up');
    
    setTimeout(() => {
      content.classList.add('hidden');
      content.classList.remove('animate-accordion-down', 'animate-accordion-up');
    }, 200);
    
    if (icon) {
      icon.style.transform = 'rotate(0deg)';
    }
  }
}

// Dropdown Component
class Dropdown extends Component {
  init() {
    this.trigger = this.element.querySelector('.dropdown-trigger');
    this.content = this.element.querySelector('.dropdown-content');
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.trigger?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.close();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }
  
  toggle() {
    const isOpen = this.content.style.opacity === '1';
    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    this.content.style.opacity = '1';
    this.content.style.visibility = 'visible';
    this.content.style.transform = 'translateY(0)';
  }
  
  close() {
    this.content.style.opacity = '0';
    this.content.style.visibility = 'hidden';
    this.content.style.transform = 'translateY(-10px)';
  }
}

// Modal Component
class Modal extends Component {
  get defaultOptions() {
    return {
      closable: true,
      backdrop: true
    };
  }
  
  init() {
    this.overlay = null;
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Close button
    const closeBtn = this.element.querySelector('.modal-close');
    closeBtn?.addEventListener('click', () => this.close());
    
    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }
  
  open() {
    // Create overlay
    this.overlay = createElement('div', {
      className: 'modal-overlay'
    });
    
    if (this.options.backdrop) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }
    
    document.body.appendChild(this.overlay);
    this.overlay.appendChild(this.element);
    
    // Animate in
    this.element.classList.add('animate-scale-in');
    this.overlay.classList.add('animate-fade-in');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    this.element.focus();
  }
  
  close() {
    if (!this.isOpen()) return;
    
    // Animate out
    this.element.classList.add('animate-scale-out');
    this.overlay.classList.add('animate-fade-out');
    
    setTimeout(() => {
      if (this.overlay && this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
      }
      this.overlay = null;
      
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Clean up classes
      this.element.classList.remove('animate-scale-in', 'animate-scale-out');
    }, 300);
  }
  
  isOpen() {
    return this.overlay && this.overlay.parentNode;
  }
}

// Form Component
class Form extends Component {
  init() {
    this.fields = this.element.querySelectorAll('.form-input, .form-textarea');
    this.submitBtn = this.element.querySelector('[type="submit"]');
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
    
    // Real-time validation
    this.fields.forEach(field => {
      field.addEventListener('blur', () => {
        this.validateField(field);
      });
      
      field.addEventListener('input', () => {
        this.clearFieldError(field);
      });
    });
  }
  
  validateField(field) {
    const value = field.value.trim();
    const rules = this.getValidationRules(field);
    
    for (const rule of rules) {
      if (!rule.test(value)) {
        this.showFieldError(field, rule.message);
        return false;
      }
    }
    
    this.clearFieldError(field);
    return true;
  }
  
  getValidationRules(field) {
    const rules = [];
    
    if (field.hasAttribute('required')) {
      rules.push({
        test: validation.required,
        message: 'This field is required'
      });
    }
    
    if (field.type === 'email') {
      rules.push({
        test: validation.email,
        message: 'Please enter a valid email address'
      });
    }
    
    const minLength = field.getAttribute('minlength');
    if (minLength) {
      rules.push({
        test: (value) => validation.minLength(value, parseInt(minLength)),
        message: `Minimum ${minLength} characters required`
      });
    }
    
    return rules;
  }
  
  showFieldError(field, message) {
    this.clearFieldError(field);
    
    const error = createElement('div', {
      className: 'error-message'
    }, message);
    
    field.parentNode.appendChild(error);
    field.classList.add('error');
  }
  
  clearFieldError(field) {
    const error = field.parentNode.querySelector('.error-message');
    if (error) {
      error.remove();
    }
    field.classList.remove('error');
  }
  
  validate() {
    let isValid = true;
    
    this.fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  getData() {
    const data = {};
    
    this.fields.forEach(field => {
      if (field.name) {
        data[field.name] = field.value.trim();
      }
    });
    
    return data;
  }
  
  async handleSubmit() {
    if (!this.validate()) {
      return;
    }
    
    const data = this.getData();
    
    // Show loading
    const originalText = this.submitBtn.textContent;
    this.submitBtn.textContent = 'Sending...';
    this.submitBtn.disabled = true;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully!');
      this.element.reset();
      
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      this.submitBtn.textContent = originalText;
      this.submitBtn.disabled = false;
    }
  }
}

// Carousel Component
class Carousel extends Component {
  get defaultOptions() {
    return {
      autoplay: true,
      interval: 5000,
      indicators: true,
      controls: true
    };
  }
  
  init() {
    this.slides = this.element.querySelectorAll('.carousel-slide');
    this.currentSlide = 0;
    this.setupControls();
    this.setupEventListeners();
    
    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }
  
  setupControls() {
    if (this.options.indicators) {
      this.createIndicators();
    }
    
    if (this.options.controls) {
      this.createControls();
    }
  }
  
  createIndicators() {
    const indicators = createElement('div', {
      className: 'carousel-indicators'
    });
    
    this.slides.forEach((_, index) => {
      const indicator = createElement('button', {
        className: `carousel-indicator ${index === 0 ? 'active' : ''}`,
        'data-slide': index
      });
      indicators.appendChild(indicator);
    });
    
    this.element.appendChild(indicators);
  }
  
  createControls() {
    const prevBtn = createElement('button', {
      className: 'carousel-control carousel-prev'
    }, '<i data-lucide="chevron-left"></i>');
    
    const nextBtn = createElement('button', {
      className: 'carousel-control carousel-next'
    }, '<i data-lucide="chevron-right"></i>');
    
    this.element.appendChild(prevBtn);
    this.element.appendChild(nextBtn);
  }
  
  setupEventListeners() {
    this.element.addEventListener('click', (e) => {
      if (e.target.matches('.carousel-indicator')) {
        const slideIndex = parseInt(e.target.dataset.slide);
        this.goToSlide(slideIndex);
      } else if (e.target.closest('.carousel-prev')) {
        this.prevSlide();
      } else if (e.target.closest('.carousel-next')) {
        this.nextSlide();
      }
    });
    
    // Pause autoplay on hover
    this.element.addEventListener('mouseenter', () => {
      this.pauseAutoplay();
    });
    
    this.element.addEventListener('mouseleave', () => {
      if (this.options.autoplay) {
        this.startAutoplay();
      }
    });
  }
  
  goToSlide(index) {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
    
    // Update indicators
    const indicators = this.element.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }
  
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.options.interval);
  }
  
  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize components
function initComponents() {
  // Header
  const header = $('#header');
  if (header) {
    new Header(header);
  }
  
  // Accordions
  $$('.accordion').forEach(element => {
    new Accordion(element, { single: true });
  });
  
  // Dropdowns
  $$('.dropdown').forEach(element => {
    new Dropdown(element);
  });
  
  // Forms
  $$('form').forEach(element => {
    new Form(element);
  });
  
  // Carousels
  $$('.carousel').forEach(element => {
    new Carousel(element);
  });
}

// Export components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Component, Header, Accordion, Dropdown, Modal, Form, Carousel, initComponents
  };
}