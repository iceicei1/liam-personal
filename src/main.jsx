          flex
          width
          weight
          italic
          textColor="#f4efe5"
          minFontSize={64}
          scale
        />
      </div>
      <button className="enter-button" type="button" onClick={onEnter}>
        Enter portfolio
      </button>
      <p>Telecommunications Project Engineer / Network Design & QA Engineer</p>
    </section>
  )
}

function PortfolioHome() {
  return (
    <section className="snap-section portfolio-home" id="home">
      <LightRays
        raysOrigin="top-center"
        raysColor="#48b9ae"
        raysSpeed={1.2}
        lightSpread={0.86}
        rayLength={1.45}
        pulsating
        fadeDistance={1.05}
        saturation={0.92}
        followMouse
        mouseInfluence={0.12}
        noiseAmount={0.12}
        distortion={0.045}
        className="home-rays"
      />
      <div className="home-shade" />
      <header className="pill-nav">
        <a href="#home">Profile</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header>
      <div className="home-type">
        <PressureTitleStack />
        <div className="home-links">
          {contactLinks.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
          <a className="kinetic-link" href="#career" data-label="→ Scroll resume">
            <span>→ Scroll resume</span>
          </a>
        </div>
      </div>
      <aside className="home-card">
        <strong>NSW</strong>
        <span>NBN/Telstra-related fixed-line network design, QA and delivery support.</span>
      </aside>
    </section>
  )
}

function CareerSection() {
  return (
    <section className="snap-section resume-section" id="career">
      <div className="section-number">01</div>
      <div className="resume-heading">
        <p>Career</p>
        <h2>From fixed-line network design to project engineering.</h2>
      </div>
      <div className="career-list">
        {career.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <strong>{item.company}</strong>
            <p>{item.focus}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="snap-section skills-page" id="skills">
      <div className="section-number">02</div>
      <div className="resume-heading">
        <p>Tools / QA / Stakeholders</p>
        <h2>Built around practical checks, clean data and delivery conversations.</h2>
      </div>
      <div className="skill-marquee" aria-label="Core skill lines">
        {skillLines.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="snap-section project-page" id="projects">
      <div className="section-number">03</div>
      <div className="resume-heading">
        <p>Selected work</p>
        <h2>Project evidence for the roles Liam is targeting.</h2>
      </div>
      <div className="big-card-grid">
        {projectCards.map((project) => (
          <article key={project.title}>
            <span>{project.meta}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="snap-section contact-page" id="contact">
      <div className="section-number">04</div>
      <div className="closing-type">
        <h2>NETWORK DESIGN / QA / UAT / DATA VALIDATION</h2>
        <p>Sydney / NSW. Hybrid or remote preferred.</p>
        <div className="contact-display">
          {contactLinks.map((link) => (
            <ContactLink key={link.label} {...link} large />
          ))}
        </div>
      </div>
      <div className="contact-row">
        <a className="kinetic-link" href="#home" data-label="→ Back to top">
          <span>→ Back to top</span>
        </a>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <main className="snap-shell">
      <PortfolioHome />
      <CareerSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

function App() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (entered) {
      requestAnimationFrame(() => {
        document.getElementById('home')?.scrollIntoView({ block: 'start' })
      })
    }
  }, [entered])

  return entered ? <Portfolio /> : <NameGate onEnter={() => setEntered(true)} />
}

createRoot(document.getElementById('root')).render(<App />)
