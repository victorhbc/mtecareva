import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>AquaPure Solutions</h2>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Pure Water, Pure Life</h1>
          <p>Professional water treatment solutions for residential, commercial, and industrial needs. Trusted by thousands for over 15 years.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Free Quote
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Services
            </button>
          </div>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">💧</span>
            <span>99.9% Pure Water</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛡️</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <span>24/7 Emergency Service</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Water Treatment Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your water quality needs</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Systems</h3>
              <p>Whole-house water filtration, softeners, and reverse osmosis systems for clean, safe drinking water.</p>
              <ul>
                <li>Water softening systems</li>
                <li>Reverse osmosis units</li>
                <li>UV sterilization</li>
                <li>Iron & sulfur removal</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Solutions</h3>
              <p>Scalable water treatment systems for businesses, restaurants, hotels, and office buildings.</p>
              <ul>
                <li>High-capacity filtration</li>
                <li>Commercial softeners</li>
                <li>Boiler feed water treatment</li>
                <li>Cooling tower treatment</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Industrial Treatment</h3>
              <p>Advanced water treatment for manufacturing, processing plants, and specialized industrial applications.</p>
              <ul>
                <li>Process water treatment</li>
                <li>Wastewater treatment</li>
                <li>Chemical dosing systems</li>
                <li>Custom engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose AquaPure Solutions?</h2>
              <p>With over 15 years of experience in water treatment, we've built our reputation on delivering reliable, efficient, and cost-effective solutions.</p>
              <div className="stats">
                <div className="stat">
                  <h3>5,000+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Emergency Service</p>
                </div>
              </div>
              <div className="certifications">
                <h4>Certifications & Memberships:</h4>
                <ul>
                  <li>✓ EPA Licensed Water Treatment Specialist</li>
                  <li>✓ Water Quality Association Member</li>
                  <li>✓ NSF Certified Systems</li>
                  <li>✓ Fully Licensed & Insured</li>
                </ul>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Professional Water Treatment Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get Your Free Water Analysis</h2>
          <p className="section-subtitle">Contact us today for a complimentary water quality assessment</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>(555) 123-WATER</p>
                <p>(555) 123-9283</p>
              </div>
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>info@aquapuresolutions.com</p>
                <p>emergency@aquapuresolutions.com</p>
              </div>
              <div className="contact-item">
                <h4>📍 Service Areas</h4>
                <p>Greater Metropolitan Area</p>
                <p>Emergency service available 24/7</p>
              </div>
              <div className="contact-item">
                <h4>🕐 Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Emergency service: 24/7</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your water treatment needs..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>AquaPure Solutions</h3>
              <p>Your trusted partner for clean, safe water solutions.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Residential Systems</a></li>
                  <li><a href="#services">Commercial Solutions</a></li>
                  <li><a href="#services">Industrial Treatment</a></li>
                  <li><a href="#services">Emergency Service</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AquaPure Solutions. All rights reserved. | Licensed Water Treatment Specialists</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
