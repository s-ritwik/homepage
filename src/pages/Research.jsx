import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Hero from "../components/Hero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import { heroResearchImages, publications, researchProjects } from "../data/siteData.js";

export default function Research() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <PageTransition>
      <Hero title="Research" subtitle="Here's some of my recent work" marqueeImages={heroResearchImages} />

      <section className="section">
        <h2>Research Publication(s)</h2>
        <ul className="publication-list original-publications">
          {publications.map((publication) => (
            <li key={publication} dangerouslySetInnerHTML={{ __html: publication }} />
          ))}
        </ul>
      </section>

      <section className="section section-muted" id="projects-section">
        <h2>Research Projects</h2>
        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <ResearchCard project={project} index={index} key={project.titleHtml} onOpen={setSelectedProject} />
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <button className="project-modal-backdrop" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)} />
          <div className="project-modal-panel">
            <button className="project-modal-close" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)}>
              <X size={22} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.alt} />
            <div className="project-modal-content">
              <h3 id="project-modal-title" dangerouslySetInnerHTML={{ __html: selectedProject.modalTitleHtml }} />
              <div dangerouslySetInnerHTML={{ __html: selectedProject.modalHtml }} />
              {selectedProject.links.length > 0 && (
                <div className="project-modal-links">
                  {selectedProject.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
