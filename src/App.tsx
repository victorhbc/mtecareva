import './App.css'

function App() {


  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>Mtec Areva</h2>
          </div>
          <div className="nav-links">
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mtec Areva</h1>
          <p>Soluções profissionais de tratamento de água para necessidades residenciais, comerciais e industriais. Confiança de milhares de clientes há mais de 15 anos.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Orçamento Grátis
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Nossos Serviços
            </button>
          </div>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">💧</span>
            <span>99,9% Água Pura</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛡️</span>
            <span>Licenciado & Segurado</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <span>Atendimento 24h</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Nossos Serviços de Tratamento de Água</h2>
          <p className="section-subtitle">Soluções completas para todas as suas necessidades de qualidade da água</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Sistemas Residenciais</h3>
              <p>Filtros de água para toda a casa, abrandadores e sistemas de osmose reversa para água potável limpa e segura.</p>
              <ul>
                <li>Sistemas de abrandamento de água</li>
                <li>Unidades de osmose reversa</li>
                <li>Esterilização UV</li>
                <li>Remoção de ferro e enxofre</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Soluções Comerciais</h3>
              <p>Sistemas escaláveis de tratamento de água para empresas, restaurantes, hotéis e edifícios comerciais.</p>
              <ul>
                <li>Filtração de alta capacidade</li>
                <li>Abrandadores comerciais</li>
                <li>Tratamento de água para caldeiras</li>
                <li>Tratamento de torres de resfriamento</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Tratamento Industrial</h3>
              <p>Tratamento avançado de água para indústrias, plantas de processamento e aplicações industriais especializadas.</p>
              <ul>
                <li>Tratamento de água de processo</li>
                <li>Tratamento de águas residuais</li>
                <li>Sistemas de dosagem química</li>
                <li>Engenharia personalizada</li>
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
              <h2>Por que Escolher a Mtec Areva?</h2>
              <p>Com mais de 15 anos de experiência em tratamento de água, construímos nossa reputação oferecendo soluções confiáveis, eficientes e econômicas.</p>
              <div className="stats">
                <div className="stat">
                  <h3>5.000+</h3>
                  <p>Clientes Satisfeitos</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Anos de Experiência</p>
                </div>
                <div className="stat">
                  <h3>24h</h3>
                  <p>Atendimento de Emergência</p>
                </div>
              </div>
              <div className="certifications">
                <h4>Certificações e Associações:</h4>
                <ul>
                  <li>✓ Especialista Licenciado em Tratamento de Água</li>
                  <li>✓ Membro da Associação de Qualidade da Água</li>
                  <li>✓ Sistemas Certificados NSF</li>
                  <li>✓ Totalmente Licenciado e Segurado</li>
                </ul>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Especialista Profissional em Tratamento de Água</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Obtenha Sua Análise Gratuita da Água</h2>
          <p className="section-subtitle">Entre em contato hoje para uma avaliação gratuita da qualidade da água</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>📞 Telefone</h4>
                <p>(11) 1234-ÁGUA</p>
                <p>(11) 1234-2482</p>
              </div>
              <div className="contact-item">
                <h4>📧 E-mail</h4>
                <p>info@aquapuresolucoes.com.br</p>
                <p>emergencia@aquapuresolucoes.com.br</p>
              </div>
              <div className="contact-item">
                <h4>📍 Áreas de Atendimento</h4>
                <p>Grande São Paulo e Região</p>
                <p>Atendimento de emergência 24h</p>
              </div>
              <div className="contact-item">
                <h4>🕐 Horário de Funcionamento</h4>
                <p>Segunda - Sexta: 08:00 - 18:00</p>
                <p>Sábado: 09:00 - 16:00</p>
                <p>Emergência: 24 horas</p>
              </div>
            </div>
            {/* <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Conte-nos sobre suas necessidades de tratamento de água..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Enviar Mensagem</button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Mtec Areva</h3>
              <p>Seu parceiro confiável para soluções de água limpa e segura.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Serviços</h4>
                <ul>
                  <li><a href="#services">Sistemas Residenciais</a></li>
                  <li><a href="#services">Soluções Comerciais</a></li>
                  <li><a href="#services">Tratamento Industrial</a></li>
                  <li><a href="#services">Atendimento de Emergência</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Empresa</h4>
                <ul>
                  <li><a href="#about">Sobre Nós</a></li>
                  <li><a href="#contact">Contato</a></li>
                  <li><a href="#">Política de Privacidade</a></li>
                  <li><a href="#">Termos de Serviço</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Mtec Areva. Todos os direitos reservados. | Especialistas Licenciados em Tratamento de Água</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
