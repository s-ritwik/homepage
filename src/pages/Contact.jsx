import { Github, Linkedin, Mail } from "lucide-react";
import Hero from "../components/Hero.jsx";
import PageTransition from "../components/PageTransition.jsx";

const contacts = [
  { label: "Email", value: "ritwiks21@iitk.ac.in", href: "mailto:ritwiks21@iitk.ac.in", Icon: Mail },
  { label: "GitHub", value: "s-ritwik", href: "https://github.com/s-ritwik", Icon: Github },
  { label: "LinkedIn", value: "s-ritwik", href: "https://www.linkedin.com/in/s-ritwik/", Icon: Linkedin },
];

export default function Contact() {
  return (
    <PageTransition>
      <Hero title="Contact Details" image="assets/images/contact-hero-bg.jpg" />
      <section className="section section-muted contact-section">
        {contacts.map(({ label, value, href, Icon }) => (
          <a className="contact-item" href={href} target="_blank" rel="noreferrer" key={label}>
            <Icon size={24} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </section>
    </PageTransition>
  );
}
