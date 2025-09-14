// Utility Functions

// DOM Utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Create element with attributes and content
function createElement(tag, attributes = {}, content = '') {
  const element = document.createElement(tag);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'innerHTML') {
      element.innerHTML = value;
    } else if (key === 'textContent') {
      element.textContent = value;
    } else if (key.startsWith('data-')) {
      element.setAttribute(key, value);
    } else {
      element[key] = value;
    }
  });
  
  if (content) {
    element.innerHTML = content;
  }
  
  return element;
}

// Event delegation
function on(eventType, selector, callback) {
  document.addEventListener(eventType, (e) => {
    if (e.target.matches(selector) || e.target.closest(selector)) {
      callback(e);
    }
  });
}

// Debounce function
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

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scroll to element
function scrollToElement(element, offset = 0) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Local storage utilities
const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting from localStorage:', error);
      return null;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting to localStorage:', error);
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }
};

// Animation utilities
function fadeIn(element, duration = 300) {
  element.style.opacity = '0';
  element.style.display = 'block';
  
  let start = null;
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    
    element.style.opacity = opacity;
    
    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = null;
  const initialOpacity = parseFloat(getComputedStyle(element).opacity);
  
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.max(initialOpacity - (progress / duration), 0);
    
    element.style.opacity = opacity;
    
    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  }
  
  requestAnimationFrame(animate);
}

// Toast notification system
const toast = {
  container: null,
  
  init() {
    if (!this.container) {
      this.container = $('#toast-container');
      if (!this.container) {
        this.container = createElement('div', { 
          id: 'toast-container', 
          className: 'toast-container' 
        });
        document.body.appendChild(this.container);
      }
    }
  },
  
  show(message, type = 'info', duration = 5000) {
    this.init();
    
    const toastId = generateId();
    const toastElement = createElement('div', {
      className: `toast toast-${type} animate-slide-in`,
      'data-toast-id': toastId
    }, `
      <div class="toast-title">${this.getTitle(type)}</div>
      <div class="toast-description">${message}</div>
    `);
    
    this.container.appendChild(toastElement);
    
    // Auto remove
    setTimeout(() => {
      this.remove(toastId);
    }, duration);
    
    return toastId;
  },
  
  remove(toastId) {
    const toast = this.container?.querySelector(`[data-toast-id="${toastId}"]`);
    if (toast) {
      toast.classList.add('animate-slide-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }
  },
  
  getTitle(type) {
    const titles = {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Information'
    };
    return titles[type] || 'Notification';
  },
  
  success: (message, duration) => toast.show(message, 'success', duration),
  error: (message, duration) => toast.show(message, 'error', duration),
  warning: (message, duration) => toast.show(message, 'warning', duration),
  info: (message, duration) => toast.show(message, 'info', duration)
};

// Scroll reveal animation
function initScrollReveal() {
  const elements = $$('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
}

// Form validation utilities
const validation = {
  email: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  phone: (phone) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
  },
  
  required: (value) => {
    return value && value.trim().length > 0;
  },
  
  minLength: (value, min) => {
    return value && value.trim().length >= min;
  },
  
  maxLength: (value, max) => {
    return !value || value.trim().length <= max;
  }
};

// URL utilities
const url = {
  getParams: () => {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
      result[key] = value;
    }
    return result;
  },
  
  setParam: (key, value) => {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  },
  
  removeParam: (key) => {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
  }
};

// Loading state utilities
const loading = {
  show: (element, text = 'Loading...') => {
    const loader = createElement('div', {
      className: 'loading-overlay'
    }, `
      <div class="loading-spinner">
        <div class="loading"></div>
        <span>${text}</span>
      </div>
    `);
    element.appendChild(loader);
  },
  
  hide: (element) => {
    const loader = element.querySelector('.loading-overlay');
    if (loader) {
      loader.remove();
    }
  }
};

// Export utilities (for ES6 modules if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    $, $$, createElement, on, debounce, throttle, formatNumber, generateId,
    isInViewport, scrollToElement, storage, fadeIn, fadeOut, toast,
    initScrollReveal, validation, url, loading
  };
}