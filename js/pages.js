// Page Templates and Content

const pages = {
  // Homepage
  home: () => `
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="video-background">
        <img src="src/assets/mobile-bg-1.jpg" alt="Kitegen Wind Energy" class="hero-image">
        <div class="video-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <h1 class="hero-title">
              Innovative Kite Technology
              <span class="hero-subtitle text-gradient">for Renewable Energy</span>
            </h1>
            
            <p class="hero-description">
              Explore Kitegen's cutting-edge wind energy technology, harnessing powerful kites to provide sustainable, efficient, and eco-friendly energy solutions.
            </p>
            
            <div class="hero-actions">
              <a href="/introduction" class="btn btn-hero btn-lg hover-lift">
                Learn More
                <i data-lucide="arrow-right"></i>
              </a>
              <a href="/applications" class="btn btn-outline btn-lg">Our Projects</a>
            </div>
            
            <!-- Key Features -->
            <div class="hero-features">
              <div class="feature-card">
                <i data-lucide="wind" class="feature-icon"></i>
                <h3 class="feature-title">High Altitude</h3>
                <p class="feature-description">Accessing stronger, more consistent winds at altitude</p>
              </div>
              <div class="feature-card">
                <i data-lucide="zap" class="feature-icon"></i>
                <h3 class="feature-title">Clean Energy</h3>
                <p class="feature-description">100% renewable energy with minimal environmental impact</p>
              </div>
              <div class="feature-card">
                <i data-lucide="arrow-right" class="feature-icon"></i>
                <h3 class="feature-title">Innovation</h3>
                <p class="feature-description">Cutting-edge technology for Nigeria's energy independence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section gradient-sky">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            About <span class="text-gradient">Kitegen Energy</span>
          </h2>
          <p class="section-description">
            Pioneering the future of renewable energy in Nigeria through innovative airborne wind technology
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <h3 class="about-subtitle">Why The World Needs KiteGen</h3>
            <p class="about-paragraph">
              As the world faces the growing challenges of climate change and the depletion of traditional energy sources, 
              there is an urgent need for innovative solutions to meet our energy demands sustainably. Kitegen offers a 
              groundbreaking approach to harnessing wind energy, utilizing high-altitude kites to capture stronger, more 
              consistent winds that traditional turbines cannot reach.
            </p>
            <p class="about-paragraph">
              This technology provides a cleaner, more efficient way to generate power, reducing reliance on fossil fuels 
              and contributing to global efforts to combat climate change. Kitegen's technology has the potential to 
              revolutionize the renewable energy sector by making wind power more accessible and affordable.
            </p>
            <a href="/power-plant" class="btn btn-energy btn-lg">Learn More About Our Technology</a>
          </div>
          
          <div class="values-grid">
            <div class="value-card card hover-lift">
              <div class="value-icon gradient-primary">
                <i data-lucide="globe"></i>
              </div>
              <h4 class="value-title">Global Innovation</h4>
              <p class="value-description">Bringing world-class airborne wind energy technology to Nigeria</p>
            </div>
            <div class="value-card card hover-lift">
              <div class="value-icon gradient-primary">
                <i data-lucide="leaf"></i>
              </div>
              <h4 class="value-title">Sustainability</h4>
              <p class="value-description">Contributing to a greener future through clean, renewable energy</p>
            </div>
            <div class="value-card card hover-lift">
              <div class="value-icon gradient-primary">
                <i data-lucide="target"></i>
              </div>
              <h4 class="value-title">Energy Security</h4>
              <p class="value-description">Supporting Nigeria's journey toward energy independence and reliability</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section id="technology" class="section bg-background">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Technology</h2>
          <p class="section-description">
            Advanced airborne wind energy systems designed for maximum efficiency and reliability
          </p>
        </div>
        
        <div class="tech-grid">
          <div class="tech-card card hover-lift">
            <div class="tech-image">
              <img src="src/assets/energy-industrial-1.png" alt="Kite Technology" loading="lazy">
            </div>
            <div class="tech-content">
              <h3 class="tech-title">High-Altitude Kites</h3>
              <p class="tech-description">
                Our advanced kite systems operate at altitudes where wind speeds are higher and more consistent, 
                generating significantly more power than traditional wind turbines.
              </p>
            </div>
          </div>
          
          <div class="tech-card card hover-lift">
            <div class="tech-image">
              <img src="src/assets/energy-industrial-2.png" alt="Ground Station" loading="lazy">
            </div>
            <div class="tech-content">
              <h3 class="tech-title">Smart Ground Stations</h3>
              <p class="tech-description">
                Intelligent ground-based systems that manage kite operations, power generation, 
                and grid integration with advanced automation and safety features.
              </p>
            </div>
          </div>
          
          <div class="tech-card card hover-lift">
            <div class="tech-image">
              <img src="src/assets/energy-industrial-3.png" alt="Control Systems" loading="lazy">
            </div>
            <div class="tech-content">
              <h3 class="tech-title">Autonomous Control</h3>
              <p class="tech-description">
                State-of-the-art control systems ensure optimal performance, safety, and reliability 
                in all weather conditions with minimal human intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section gradient-sky">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Learn more about our airborne wind energy technology and services
          </p>
        </div>
        
        <div class="faq-container">
          <div class="accordion">
            <div class="accordion-item">
              <button class="accordion-trigger">
                How does airborne wind energy work?
                <i data-lucide="chevron-down"></i>
              </button>
              <div class="accordion-content hidden">
                <p>Airborne wind energy systems use kites or wings to harness wind power at high altitudes where winds are stronger and more consistent. The kites are tethered to ground stations that convert the mechanical energy into electricity through generators.</p>
              </div>
            </div>
            
            <div class="accordion-item">
              <button class="accordion-trigger">
                What are the advantages over traditional wind turbines?
                <i data-lucide="chevron-down"></i>
              </button>
              <div class="accordion-content hidden">
                <p>Airborne wind energy systems can access higher altitude winds, require less material to build, have lower visual impact, and can generate power in areas where traditional turbines are not feasible. They also have higher capacity factors due to more consistent high-altitude winds.</p>
              </div>
            </div>
            
            <div class="accordion-item">
              <button class="accordion-trigger">
                Is the technology safe and reliable?
                <i data-lucide="chevron-down"></i>
              </button>
              <div class="accordion-content hidden">
                <p>Yes, our systems include multiple safety features including automated emergency landing procedures, redundant control systems, and comprehensive monitoring. The technology has been tested extensively and meets all aviation and electrical safety standards.</p>
              </div>
            </div>
            
            <div class="accordion-item">
              <button class="accordion-trigger">
                What is the environmental impact?
                <i data-lucide="chevron-down"></i>
              </button>
              <div class="accordion-content hidden">
                <p>Airborne wind energy has minimal environmental impact compared to fossil fuels and even traditional renewable energy sources. It requires less land use, produces no emissions during operation, and has minimal impact on wildlife when properly sited.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-background">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Ready to learn more about our airborne wind energy solutions? Contact us today.
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i data-lucide="map-pin"></i>
              </div>
              <div class="contact-details">
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i data-lucide="mail"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>info@kitegen-energy.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i data-lucide="phone"></i>
              </div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>+234 (0) 123 456 7890</p>
              </div>
            </div>
          </div>
          
          <form class="contact-form card">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" name="name" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" name="email" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input type="text" name="subject" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea name="message" class="form-textarea" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-energy btn-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,

  // Introduction Page
  introduction: () => `
    <section class="page-hero">
      <div class="hero-background">
        <img src="src/assets/energy-city-1.png" alt="Introduction" class="hero-image">
        <div class="video-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">
            Introduction to <span class="text-gradient">Airborne Wind Energy</span>
          </h1>
          <p class="hero-description">
            Discover the revolutionary technology that's transforming renewable energy generation through high-altitude wind capture systems.
          </p>
          <div class="hero-actions">
            <a href="/applications" class="btn btn-energy btn-lg">Explore Applications</a>
            <a href="/power-plant" class="btn btn-outline btn-lg">View Technology</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-background">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2 class="content-title">The Future of Wind Energy</h2>
            <p class="content-paragraph">
              Traditional wind turbines are limited by ground-level wind patterns and geographical constraints. 
              Airborne wind energy systems revolutionize this approach by accessing the powerful, consistent 
              winds available at higher altitudes.
            </p>
            <p class="content-paragraph">
              Our kite-based systems can reach altitudes of 200-800 meters, where wind speeds are typically 
              2-3 times stronger than at ground level, resulting in significantly higher energy generation 
              potential with a much smaller physical footprint.
            </p>
          </div>
          <div class="content-image">
            <img src="src/assets/energy-waterfront.png" alt="Airborne Wind Energy" loading="lazy">
          </div>
        </div>
      </div>
    </section>
  `,

  // Applications Page
  applications: () => `
    <section class="page-hero">
      <div class="hero-background">
        <img src="src/assets/energy-city-2.png" alt="Applications" class="hero-image">
        <div class="video-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">
            Real-World <span class="text-gradient">Applications</span>
          </h1>
          <p class="hero-description">
            Explore how our airborne wind energy technology is being implemented across various sectors and environments.
          </p>
        </div>
      </div>
    </section>

    <section class="section gradient-sky">
      <div class="container">
        <div class="applications-grid">
          <div class="application-card card hover-lift">
            <div class="application-icon">
              <i data-lucide="building-2"></i>
            </div>
            <h3 class="application-title">Urban Energy</h3>
            <p class="application-description">
              Powering cities with clean energy systems that require minimal ground space and operate above urban infrastructure.
            </p>
          </div>
          
          <div class="application-card card hover-lift">
            <div class="application-icon">
              <i data-lucide="factory"></i>
            </div>
            <h3 class="application-title">Industrial Power</h3>
            <p class="application-description">
              Providing reliable, cost-effective energy solutions for manufacturing facilities and industrial operations.
            </p>
          </div>
          
          <div class="application-card card hover-lift">
            <div class="application-icon">
              <i data-lucide="map"></i>
            </div>
            <h3 class="application-title">Remote Areas</h3>
            <p class="application-description">
              Bringing electricity to off-grid communities and remote locations where traditional infrastructure is challenging.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  // Error page
  notFound: () => `
    <section class="error-section">
      <div class="container">
        <div class="error-content">
          <h1 class="error-title">404</h1>
          <h2 class="error-subtitle">Page Not Found</h2>
          <p class="error-description">The page you're looking for doesn't exist or has been moved.</p>
          <a href="/" class="btn btn-energy btn-lg">Go Home</a>
        </div>
      </div>
    </section>
  `
};

// Export pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { pages };
}