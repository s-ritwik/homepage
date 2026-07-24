import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ResearchCard({ project, index, onOpen }) {
  return (
    <motion.article
      className="research-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.22) }}
    >
      <button className="research-card-click" type="button" onClick={() => onOpen(project)}>
        <img className="research-card-image" src={project.image} alt={project.alt} />
        <div className="research-card-body">
          <h3 dangerouslySetInnerHTML={{ __html: project.titleHtml }} />
          <div className="research-card-description" dangerouslySetInnerHTML={{ __html: project.descriptionHtml }} />
        </div>
      </button>
      {project.links.length > 0 && (
        <div className="research-card-links">
          {project.links.map((link) => (
            <a className="text-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              {link.label}<ExternalLink size={16} />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
