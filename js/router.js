// Client-side Router

class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.init();
  }
  
  init() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
    
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (link && this.isInternalLink(link)) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });
    
    // Handle initial route
    this.handleRoute(window.location.pathname);
  }
  
  isInternalLink(link) {
    return link.href.startsWith(window.location.origin) || 
           link.getAttribute('href').startsWith('/');
  }
  
  addRoute(path, handler) {
    this.routes.set(path, handler);
    return this;
  }
  
  addRoutes(routes) {
    Object.entries(routes).forEach(([path, handler]) => {
      this.addRoute(path, handler);
    });
    return this;
  }
  
  navigate(path, pushState = true) {
    if (pushState) {
      window.history.pushState({}, '', path);
    }
    this.handleRoute(path);
  }
  
  handleRoute(path) {
    // Normalize path
    path = path === '' ? '/' : path;
    
    // Find matching route
    let handler = this.routes.get(path);
    
    // Try pattern matching for dynamic routes
    if (!handler) {
      for (const [route, routeHandler] of this.routes) {
        const params = this.matchRoute(route, path);
        if (params) {
          handler = () => routeHandler(params);
          break;
        }
      }
    }
    
    // Default to 404 if no handler found
    if (!handler) {
      handler = this.routes.get('*') || (() => this.render404());
    }
    
    // Update current route
    this.currentRoute = path;
    
    // Execute handler
    this.executeHandler(handler, path);
  }
  
  matchRoute(route, path) {
    // Convert route pattern to regex
    const routeParts = route.split('/');
    const pathParts = path.split('/');
    
    if (routeParts.length !== pathParts.length) {
      return null;
    }
    
    const params = {};
    
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const pathPart = pathParts[i];
      
      if (routePart.startsWith(':')) {
        // Dynamic parameter
        params[routePart.slice(1)] = pathPart;
      } else if (routePart !== pathPart) {
        // Static part doesn't match
        return null;
      }
    }
    
    return params;
  }
  
  async executeHandler(handler, path) {
    try {
      // Show loading state
      this.showLoading();
      
      // Execute handler
      const result = await handler();
      
      // Render content
      if (typeof result === 'string') {
        this.renderContent(result);
      }
      
      // Update page title and meta
      this.updatePageMeta(path);
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Hide loading state
      this.hideLoading();
      
      // Initialize components for new content
      initComponents();
      
      // Initialize scroll reveal
      initScrollReveal();
      
      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
      
    } catch (error) {
      console.error('Route handler error:', error);
      this.renderContent(this.render404());
      this.hideLoading();
    }
  }
  
  renderContent(html) {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = html;
      mainContent.classList.add('page-enter');
      
      // Trigger enter animation
      requestAnimationFrame(() => {
        mainContent.classList.add('page-enter-active');
        mainContent.classList.remove('page-enter');
      });
    }
  }
  
  showLoading() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('loading-state');
    }
  }
  
  hideLoading() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('loading-state');
    }
  }
  
  updatePageMeta(path) {
    const routeData = this.getRouteData(path);
    
    // Update title
    if (routeData.title) {
      document.title = `${routeData.title} - Kitegen Energy Nigeria Ltd`;
    }
    
    // Update meta description
    if (routeData.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = routeData.description;
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + path;
  }
  
  getRouteData(path) {
    const routes = {
      '/': {
        title: 'Innovative Airborne Wind Energy',
        description: 'Pioneering renewable energy in Nigeria through innovative airborne wind technology. Clean, efficient, sustainable energy solutions.'
      },
      '/introduction': {
        title: 'Introduction to Airborne Wind Energy',
        description: 'Discover the revolutionary technology transforming renewable energy generation through high-altitude wind capture systems.'
      },
      '/applications': {
        title: 'Real-World Applications',
        description: 'Explore how our airborne wind energy technology is implemented across various sectors and environments.'
      },
      '/power-plant': {
        title: 'Technology & Power Plant',
        description: 'Advanced airborne wind energy systems designed for maximum efficiency and reliability.'
      },
      '/research': {
        title: 'Research & Development',
        description: 'Cutting-edge research and development in airborne wind energy technology.'
      },
      '/reports': {
        title: 'Reports & Documentation',
        description: 'Comprehensive reports and technical documentation on our airborne wind energy systems.'
      },
      '/development': {
        title: 'Project Development',
        description: 'From concept to commissioning, we manage every aspect of your airborne wind energy project.'
      },
      '/services/airborne-wind-energy': {
        title: 'Airborne Wind Energy Systems',
        description: 'Comprehensive airborne wind energy solutions for sustainable power generation.'
      },
      '/services/project-development': {
        title: 'Project Development Services',
        description: 'End-to-end project development services for airborne wind energy installations.'
      },
      '/services/energy-consulting': {
        title: 'Energy Consulting',
        description: 'Expert consulting services for renewable energy projects and sustainability initiatives.'
      },
      '/services/partnership-opportunities': {
        title: 'Partnership Opportunities',
        description: 'Strategic partnerships for expanding airborne wind energy technology globally.'
      }
    };
    
    return routes[path] || {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
  
  render404() {
    return pages.notFound();
  }
  
  getCurrentRoute() {
    return this.currentRoute;
  }
  
  // Utility methods
  back() {
    window.history.back();
  }
  
  forward() {
    window.history.forward();
  }
  
  replace(path) {
    window.history.replaceState({}, '', path);
    this.handleRoute(path);
  }
}

// Create global router instance
const router = new Router();

// Export router
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Router, router };
}