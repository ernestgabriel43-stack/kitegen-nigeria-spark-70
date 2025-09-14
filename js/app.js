// Main Application Entry Point

// Application initialization
class App {
  constructor() {
    this.isInitialized = false;
    this.init();
  }
  
  async init() {
    try {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.bootstrap());
      } else {
        this.bootstrap();
      }
    } catch (error) {
      console.error('App initialization error:', error);
      this.handleInitError(error);
    }
  }
  
  bootstrap() {
    // Initialize core systems
    this.initializeTheme();
    this.setupRoutes();
    this.initializeComponents();
    this.initializeScrollReveal();
    this.initializeLucideIcons();
    this.setupErrorHandling();
    this.setupPerformanceOptimizations();
    
    // Mark as initialized
    this.isInitialized = true;
    
    // Emit ready event
    this.emitEvent('app:ready');
    
    console.log('Kitegen Energy App initialized successfully');
  }
  
  initializeTheme() {
    // Check for saved theme preference or default to light
    const savedTheme = storage.get('theme') || 'light';
    this.setTheme(savedTheme);
    
    // Setup theme toggle if exists
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    storage.set('theme', theme);
    this.emitEvent('theme:changed', { theme });
  }
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  setupRoutes() {
    // Define all application routes
    router.addRoutes({
      '/': () => pages.home(),
      '/introduction': () => pages.introduction(),
      '/applications': () => pages.applications(),
      '/power-plant': () => this.loadPage('powerPlant'),
      '/research': () => this.loadPage('research'),
      '/reports': () => this.loadPage('reports'),
      '/development': () => this.loadPage('development'),
      '/key-advantages': () => this.loadPage('keyAdvantages'),
      '/features-benefits': () => this.loadPage('featuresBenefits'),
      '/ambition': () => this.loadPage('ambition'),
      '/future-scenarios': () => this.loadPage('futureScenarios'),
      '/case-studies': () => this.loadPage('caseStudies'),
      '/challenges': () => this.loadPage('challenges'),
      '/economic-impact': () => this.loadPage('economicImpact'),
      '/services/airborne-wind-energy': () => this.loadPage('services/airborneWindEnergy'),
      '/services/project-development': () => this.loadPage('services/projectDevelopment'),
      '/services/energy-consulting': () => this.loadPage('services/energyConsulting'),
      '/services/partnership-opportunities': () => this.loadPage('services/partnershipOpportunities'),
      '*': () => pages.notFound()
    });
  }
  
  async loadPage(pageName) {
    try {
      // Check if page template exists
      if (pages[pageName]) {
        return pages[pageName]();
      }
      
      // For pages not yet implemented, show coming soon
      return this.renderComingSoon(pageName);
      
    } catch (error) {
      console.error(`Error loading page ${pageName}:`, error);
      return this.renderError(error);
    }
  }
  
  renderComingSoon(pageName) {
    const title = pageName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    
    return `
      <section class="coming-soon-section">
        <div class="container">
          <div class="coming-soon-content">
            <div class="coming-soon-icon">
              <i data-lucide="construction"></i>
            </div>
            <h1 class="coming-soon-title">${title}</h1>
            <p class="coming-soon-description">This page is currently under development. Please check back soon.</p>
            <a href="/" class="btn btn-energy btn-lg">Return Home</a>
          </div>
        </div>
      </section>
    `;
  }
  
  renderError(error) {
    return `
      <section class="error-section">
        <div class="container">
          <div class="error-content">
            <div class="error-icon">
              <i data-lucide="alert-triangle"></i>
            </div>
            <h1 class="error-title">Something went wrong</h1>
            <p class="error-description">We encountered an error while loading this page.</p>
            <button onclick="window.location.reload()" class="btn btn-energy btn-lg">Try Again</button>
          </div>
        </div>
      </section>
    `;
  }
  
  initializeComponents() {
    // Initialize all components
    initComponents();
  }
  
  initializeScrollReveal() {
    // Initialize scroll reveal animations
    initScrollReveal();
  }
  
  initializeLucideIcons() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
  
  setupErrorHandling() {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      this.handleError(event.error);
    });
    
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.handleError(event.reason);
    });
  }
  
  setupPerformanceOptimizations() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Setup service worker if available
    this.setupServiceWorker();
  }
  
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
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
      
      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  preloadCriticalResources() {
    // Preload critical images
    const criticalImages = [
      'src/assets/mobile-bg-1.jpg',
      'src/assets/energy-city-1.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }
  
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      });
    }
  }
  
  handleError(error) {
    // Log error
    console.error('Application error:', error);
    
    // Show user-friendly error message
    toast.error('An unexpected error occurred. Please try refreshing the page.');
    
    // In production, you might want to send errors to a logging service
    // this.logError(error);
  }
  
  handleInitError(error) {
    // Critical initialization error
    console.error('Critical initialization error:', error);
    
    // Show fallback UI
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; font-family: sans-serif;">
        <div>
          <h1>Unable to load application</h1>
          <p>Please refresh the page or try again later.</p>
          <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
  
  emitEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
  }
  
  // Public API methods
  getRouter() {
    return router;
  }
  
  getTheme() {
    return document.documentElement.getAttribute('data-theme');
  }
  
  navigate(path) {
    router.navigate(path);
  }
  
  showToast(message, type = 'info') {
    toast.show(message, type);
  }
  
  isReady() {
    return this.isInitialized;
  }
}

// Initialize application
const app = new App();

// Export app instance
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, app };
}

// Global app instance for debugging
window.app = app;