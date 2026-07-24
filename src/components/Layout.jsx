import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/", section: "about" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
  {
    label: "Documents",
    items: [
      { label: "CV", href: "assets/documents/ritwik-cv.pdf" },
      { label: "Master's Thesis", href: "assets/documents/218070866.pdf" },
    ],
  },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!pendingSection || location.pathname !== "/") return;

    const scrollToSection = () => {
      document.getElementById(pendingSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingSection(null);
    };

    window.requestAnimationFrame(() => window.requestAnimationFrame(scrollToSection));
  }, [location.pathname, pendingSection]);

  const handleSectionClick = (section) => {
    setOpen(false);
    setPendingSection(section);
    navigate("/");
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>Ritwik Shankar</Link>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => item.items ? (
            <div className="nav-dropdown" key={item.label}>
              <button className="nav-link nav-action nav-dropdown-trigger" type="button">
                {item.label}
              </button>
              <div className="nav-dropdown-menu">
                {item.items.map((dropdownItem) => (
                  <a
                    key={dropdownItem.label}
                    className="nav-dropdown-link"
                    href={dropdownItem.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            </div>
          ) : item.section ? (
            <button
              key={item.label}
              className="nav-link nav-action"
              type="button"
              onClick={() => handleSectionClick(item.section)}
            >
              {item.label}
            </button>
          ) : (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                `nav-link ${item.button ? "nav-button" : ""} ${isActive ? "is-active" : ""}`
              }
              to={item.to}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div>
          <p>"Being able to write analytic answers precisely to a precisely posed problem makes you a gear, not a machine."</p>
          <span>~ Sandip Tiwari (The GOAT)</span>
        </div>
        <div className="footer-links">
          <a href="mailto:ritwiks21@iitk.ac.in" aria-label="Email Ritwik"><Mail size={20} />Email</a>
          <a href="https://www.linkedin.com/in/s-ritwik" target="_blank" rel="noreferrer"><Linkedin size={20} />LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
