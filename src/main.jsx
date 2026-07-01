import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import LightRays from './components/LightRays.jsx'
import TextPressure from './components/TextPressure.jsx'
import './styles.css'

const career = [
  {
    period: 'Oct 2025 - Present',
    role: 'Project Engineer',
    company: 'Service Stream',
    focus: 'Telecommunications fixed-line project engineering across NBN/Telstra-related programs.',
  },
  {
    period: 'Oct 2022 - Sep 2025',
    role: 'Network Designer / QA',
    company: 'Service Stream',
    focus: 'NBN SD1 / SD2 design QA, design pack review, defect prevention and data validation.',
  },
  {
    period: 'Jan 2019 - Sep 2022',
    role: 'Network Designer',
    company: 'Efiniti Telecommunications',
    focus: 'Fixed-line telecommunications network design and design artefact delivery support.',
  },
]

const projectCards = [
  {
    title: 'NBN SD1 / SD2 Design QA',
    meta: 'Design assurance',
    text: 'PNI/S18 checks, as-built comparison, BOM/BOQ outputs, trace files, splitter ratio checks and naming/data quality checks.',
  },
  {
    title: 'DRIFT Bot QA Automation',
    meta: 'Automation QA',
    text: 'QA automation exposure for SD1/SD2 BRQ QA, repeatable checks, defect prevention and QA process improvement.',
  },
  {
    title: 'CVT and Relocation Tool UAT',
    meta: 'Tool testing',
    text: 'UAT, defect validation, QGIS-based export/import, area capture, asset attribute validation and test planning.',
  },
]

const skillLines = [
  'SpatialNET / AutoCAD / QGIS / S18 / Appian',
  'ADR/GML / DWG/CAD / Excel / Visio',
  'Design pack review / PNI-S18 checks / data validation',
  'Weekly reporting / defect deep dives / stakeholder coordination',
]

const contactLinks = [
  { label: 'Phone', value: '+61 000 000 000', href: 'tel:+61000000000' },
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
]

const displayFontUrl = `${import.meta.env.BASE_URL}fonts/CompressaPRO-GX.woff2`
const portfolioTitleLines = ['LIAM', 'LIANG', 'TELECOM', 'DESIGN', 'QA + UAT']

function ContactLink({ label, value, href, large = false }) {
  const display = large ? value : label

  return (
    <a className={`kinetic-link ${large ? 'kinetic-link-large' : ''}`} href={href} data-label={`→ ${display}`}>
      <span>→ {display}</span>
    </a>
  )
}

function PressureTitleStack() {
  return (
    <div className="portfolio-pressure-stack" aria-label="Liam Liang telecom design QA and UAT">
      {portfolioTitleLines.map((line, index) => (
        <div className={`portfolio-pressure-line line-${index + 1}`} key={line}>
          <TextPressure
            text={line}
            fontUrl={displayFontUrl}
            flex
            width
            weight
            italic
            textColor="#f4efe5"
            minFontSize={42}
            scale
          />
        </div>
      ))}
    </div>
  )
}

function NameGate({ onEnter }) {
  return (
    <section className="name-gate" aria-label="Intro screen">
      <div className="gate-pressure">
        <TextPressure
          text="Liam Liang"
          fontUrl={displayFontUrl}
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
