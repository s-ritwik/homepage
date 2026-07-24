import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import Hero from "../components/Hero.jsx";
import { updates } from "../data/siteData.js";

const aboutImageModules = import.meta.glob("../../assets/images/main*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
  eager: true,
  import: "default",
  query: "?url",
});

const aboutImages = Object.entries(aboutImageModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([path, src]) => {
    const name = path.split("/").pop();

    return {
      name,
      src,
      alt: "Ritwik Shankar",
    };
  });

const defaultAboutImageIndex = Math.max(
  0,
  aboutImages.findIndex((image) => /^main2\./i.test(image.name)),
);

export default function Home() {
  const [activeImage, setActiveImage] = useState(defaultAboutImageIndex);

  const showPreviousImage = () => {
    setActiveImage((index) => (index === 0 ? aboutImages.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setActiveImage((index) => (index === aboutImages.length - 1 ? 0 : index + 1));
  };

  return (
    <PageTransition>
      <Hero title="Ritwik Shankar" subtitle="Showcasing my professional journey" image="assets/images/home-hero-bg.jpg">
        <a className="primary-button" href="assets/documents/ritwik-cv.pdf" target="_blank" rel="noreferrer">
          Curriculum vitae
          <span>Last updated: April 2026</span>
        </a>
      </Hero>

      <section className="section section-muted" id="about">
        <div className="about-grid about-grid-centered">
          <div>
            <p className="eyebrow">About me</p>
            <h2>Undergraduate @ IIT Kanpur</h2>
            <p>I am a Senior Undergraduate in the department of Aerospace Engineering at IIT KANPUR.I am really passionate about knowing about anything which flies.</p>
            <p>My research interests include Rotorcrafts, Reinforcement Learning for stable gait generation, Computer vision and ML based algorithms to solve problems relating to autonomy and Implementing these algorithms to UAV's using optimal controls strategies. I also have experience with Design optimisation for performance maximisation of Aerial Vehicles.</p>
            <p>I am <b>Goal Oriented</b> person, literally, holding the midfield and captaining IITK FC</p>
          </div>
          <div className="about-carousel" aria-label="About photo carousel">
            <div className="about-carousel-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={aboutImages[activeImage].src}
                  src={aboutImages[activeImage].src}
                  alt={aboutImages[activeImage].alt}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </AnimatePresence>
              <button className="carousel-control carousel-control-prev" type="button" onClick={showPreviousImage} aria-label="Previous photo">
                <ChevronLeft size={22} />
              </button>
              <button className="carousel-control carousel-control-next" type="button" onClick={showNextImage} aria-label="Next photo">
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="carousel-dots" aria-label="Choose photo">
              {aboutImages.map((image, index) => (
                <button
                  key={image.src}
                  className={index === activeImage ? "is-active" : ""}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section updates-section">
        <div className="updates-wrap">
          <p className="eyebrow">Updates</p>
          <div className="updates-panel">
            {updates.map((update) => (
              <div className="update-row" key={`${update.date}-${update.html}`}>
                <strong>{update.date}</strong>
                <span dangerouslySetInnerHTML={{ __html: update.html }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
