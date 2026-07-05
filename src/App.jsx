import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CupSoda,
  ExternalLink,
  Gem,
  Handshake,
  HardHat,
  IndianRupee,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  RadioTower,
  Send,
  ShieldCheck,
  ShoppingCart,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { businesses, contact, navLinks, stats, values } from './content.js';

const icons = {
  Building2,
  Calendar,
  Car,
  CupSoda,
  Gem,
  Handshake,
  HardHat,
  IndianRupee,
  Leaf,
  RadioTower,
  ShieldCheck,
  ShoppingCart,
  Target,
  Users,
  Zap,
};

function getRouteFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('business-')) {
    const businessId = hash.replace('business-', '');
    return businesses.some((business) => business.id === businessId) ? businessId : 'home';
  }

  return 'home';
}

function navigateToBusiness(id) {
  window.location.hash = `business-${id}`;
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  const activeBusiness = useMemo(
    () => businesses.find((business) => business.id === route),
    [route],
  );

  return (
    <>
      <Header route={route} />
      {activeBusiness ? <BusinessPage business={activeBusiness} /> : <HomePage />}
      <Footer />
    </>
  );
}

function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setBusinessOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Dikhita Group home" onClick={closeMenus}>
        <img src="/assets/dikhita-logo.jpg" alt="Dikhita Group" />
      </a>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navLinks.map((link) =>
          link.label === 'Businesses' ? (
            <div className="nav-group" key={link.label}>
              <button
                className={`nav-link nav-button ${route !== 'home' ? 'is-active' : ''}`}
                type="button"
                aria-expanded={businessOpen}
                onClick={() => setBusinessOpen((open) => !open)}
              >
                Businesses
                <ChevronDown size={16} />
              </button>
              <div className={`business-menu ${businessOpen ? 'is-open' : ''}`}>
                {businesses.map((business) => (
                  <button
                    type="button"
                    key={business.id}
                    onClick={() => {
                      navigateToBusiness(business.id);
                      closeMenus();
                    }}
                  >
                    {business.title}
                    <ChevronRight size={15} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={closeMenus}
            >
              {link.label}
            </a>
          ),
        )}
      </nav>

      <a className="header-cta" href="#inquiry" onClick={closeMenus}>
        Get in touch
        <ArrowRight size={16} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <BusinessEntry />
      <StatsBand />
      <AboutSection />
      <BusinessOverview />
      <ProcessSection />
      <InquirySection />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
        <source src="/assets/corporate-office.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content container">
        <p className="eyebrow">Assam-rooted diversified enterprise</p>
        <h1>
          Beyond Boundaries.
          <span> Beyond Ordinary.</span>
        </h1>
        <p className="hero-copy">
          Dikhita Group combines Assam's values of trust, unity, and hospitality
          with future-ready business practices across telecom, automobile,
          jewellery, food and beverage, retail mart, and construction.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#businesses">
            Explore businesses
            <ArrowRight size={18} />
          </a>
          <a className="button button-ghost" href="#about">
            About Dikhita Group
          </a>
        </div>
      </div>
    </section>
  );
}

function BusinessEntry() {
  return (
    <section className="business-entry section-pad" id="businesses">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Direct business entry</p>
          <h2>Choose the sector you want to explore.</h2>
          <p>
            Each division has a focused page with overview, locations, partner
            links, services, and inquiry access.
          </p>
        </div>

        <div className="business-grid">
          {businesses.map((business) => {
            const Icon = icons[business.icon];
            return (
              <article className={`business-card accent-${business.accent}`} key={business.id}>
                <div className="business-card-top">
                  <span className="icon-badge">
                    <Icon size={26} />
                  </span>
                  <span>{business.company}</span>
                </div>
                <h3>{business.title}</h3>
                <p>{business.description}</p>
                <button
                  className="card-link"
                  type="button"
                  onClick={() => navigateToBusiness(business.id)}
                >
                  Explore business
                  <ArrowRight size={17} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="stats-band" id="impact">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="section-kicker">About Dikhita Group</p>
          <h2>Built on Assam's values. Designed for modern growth.</h2>
          <p>
            Dikhita Group is a diversified business enterprise inspired by the
            values, culture, and integrity of Assam. The group blends traditional
            relationships with modern working styles, digital thinking, and a
            young workforce focused on transformation.
          </p>
          <p>
            Beyond commercial expansion, Dikhita Group works to create income
            and livelihood opportunities for people across Assam, contributing to
            economic empowerment, skill development, and community progress.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => {
            const Icon = icons[value.icon];
            return (
              <article className="value-card" key={value.title}>
                <Icon size={24} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessOverview() {
  return (
    <section className="overview section-pad">
      <div className="container">
        <div className="section-heading align-left">
          <p className="section-kicker">Our core businesses</p>
          <h2>Six growth engines, one responsible group.</h2>
        </div>

        <div className="overview-list">
          {businesses.map((business, index) => {
            const Icon = icons[business.icon];
            return (
              <article className="overview-row" key={business.id}>
                <span className="row-number">{String(index + 1).padStart(2, '0')}</span>
                <span className={`icon-badge accent-${business.accent}`}>
                  <Icon size={24} />
                </span>
                <div>
                  <h3>{business.title}</h3>
                  <p>{business.tagline}</p>
                </div>
                <button type="button" onClick={() => navigateToBusiness(business.id)}>
                  View page
                  <ArrowRight size={17} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const process = [
    {
      title: 'Enter the right division',
      text: 'Visitors can move directly into telecom, automobile, jewellery, F&B, retail mart, or construction from the homepage.',
    },
    {
      title: 'Review presence and partners',
      text: 'Each page highlights operational locations, brand links, services, and the right inquiry path.',
    },
    {
      title: 'Send a focused inquiry',
      text: 'The form captures contact details, location, preferred time, and product or service interest.',
    },
  ];

  return (
    <section className="process section-pad">
      <div className="container process-layout">
        <div>
          <p className="section-kicker">Customer journey</p>
          <h2>Fast navigation for a multi-business group.</h2>
        </div>
        <div className="process-steps">
          {process.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessPage({ business }) {
  const Icon = icons[business.icon];

  return (
    <main className="business-page">
      <section className={`business-hero accent-${business.accent}`}>
        <div className="container business-hero-grid">
          <div>
            <a className="breadcrumb-link" href="#businesses">
              Home / Businesses
            </a>
            <p className="eyebrow">{business.company}</p>
            <h1>{business.title}</h1>
            <p>{business.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#business-inquiry">
                Send inquiry
                <Send size={18} />
              </a>
              <a className="button button-ghost dark" href="#business-partners">
                View partners
              </a>
            </div>
          </div>

          <div className="business-visual" aria-hidden="true">
            <Icon size={92} />
            <span>{business.title}</span>
          </div>
        </div>
      </section>

      <section className="business-detail section-pad">
        <div className="container detail-grid">
          <div className="detail-main">
            <p className="section-kicker">Business introduction</p>
            <h2>{business.tagline}</h2>
            {business.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="detail-aside">
            <h3>Operational focus</h3>
            <ul>
              {business.services.map((service) => (
                <li key={service}>
                  <CheckCircle2 size={18} />
                  {service}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="presence section-pad">
        <div className="container presence-grid">
          <div>
            <p className="section-kicker">Presence locations</p>
            <h2>Local presence with sector-specific reach.</h2>
          </div>
          <div className="location-list">
            {business.locations.map((location) => (
              <a
                className="location-card"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location,
                )}`}
                target="_blank"
                rel="noreferrer"
                key={location}
              >
                <MapPin size={20} />
                <span>{location}</span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="partners section-pad" id="business-partners">
        <div className="container partners-layout">
          <div>
            <p className="section-kicker">Brand integration</p>
            <h2>Partner and OEM links for product discovery.</h2>
            <p>
              Visitors can move from the Dikhita page to official brand websites
              for deeper product specifications, availability, and brand-level
              details.
            </p>
          </div>
          <div className="partner-links">
            {business.partners.length > 0 ? (
              business.partners.map((partner) => (
                <a href={partner.href} target="_blank" rel="noreferrer" key={partner.name}>
                  {partner.name}
                  <ExternalLink size={16} />
                </a>
              ))
            ) : (
              <div className="partner-empty">
                <Building2 size={28} />
                <span>Project and department partner details are shared during inquiry.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="gallery section-pad">
        <div className="container">
          <div className="section-heading align-left">
            <p className="section-kicker">Visual gallery</p>
            <h2>Photo categories for this business page.</h2>
          </div>
          <div className="gallery-grid">
            {business.gallery.map((item) => (
              <div className={`gallery-tile accent-${business.accent}`} key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection defaultBusiness={business.title} id="business-inquiry" />
    </main>
  );
}

function InquirySection({ defaultBusiness = '', id = 'inquiry' }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="inquiry section-pad" id={id}>
      <div className="container inquiry-layout">
        <div className="inquiry-copy">
          <p className="section-kicker">Inquiry and booking</p>
          <h2>Reach the right Dikhita team.</h2>
          <p>
            Share your interest, location, preferred contact time, and remarks.
            Premium product bookings are subject to serviceable pin codes and
            availability at the concerned sales point.
          </p>
          <div className="contact-strip">
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
              <Phone size={18} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={18} />
              {contact.email}
            </a>
          </div>
        </div>

        <form
          className="inquiry-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            event.currentTarget.reset();
          }}
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Your full name" required />
          </label>
          <label>
            Mobile number
            <input name="mobile" type="tel" placeholder="+91" required />
          </label>
          <label>
            Location
            <input name="location" type="text" placeholder="City or pin code" required />
          </label>
          <label>
            Interested product or service
            <select name="business" defaultValue={defaultBusiness} required>
              <option value="" disabled>
                Select a business
              </option>
              {businesses.map((business) => (
                <option value={business.title} key={business.id}>
                  {business.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Preferred contact time
            <input name="time" type="text" placeholder="Example: 11 AM - 2 PM" />
          </label>
          <label className="full-field">
            Remarks
            <textarea name="remarks" rows="4" placeholder="Tell us what you need" />
          </label>
          <button className="button button-primary full-field" type="submit">
            Submit inquiry
            <Send size={18} />
          </button>
          {submitted && (
            <p className="form-success" role="status">
              Thank you. Your inquiry has been captured on this device.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <img src="/assets/dikhita-logo.jpg" alt="Dikhita Group" />
          <p>
            Beyond Boundaries. Beyond Ordinary. Building excellence across
            industries while carrying Assam's cultural values into every
            endeavour.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <Mail size={17} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone size={17} />
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
            </li>
            <li>
              <MapPin size={17} />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Businesses</h2>
          <div className="footer-links">
            {businesses.map((business) => (
              <button
                type="button"
                key={business.id}
                onClick={() => navigateToBusiness(business.id)}
              >
                {business.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright © Dikhita 2019-2026. All rights reserved.</span>
        <span>CIN: {contact.cin}</span>
        <span>{contact.domain}</span>
      </div>
    </footer>
  );
}

export default App;
