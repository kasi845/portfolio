import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const project = {
    name: "Todo List End Points",
    tag: "Full Stack / API",
    description: [
      "User-friendly interface for task creation, editing, and deletion.",
      "Implemented user authentication with JWT for secure login and registration.",
      "Used MongoDB Atlas for persistent cloud data storage.",
    ],
    codeUrl: "https://github.com/kasidulam",
    liveUrl: "#",
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="border-gradient rounded-2xl p-1 hover:glow-multi transition-all duration-500 hover:scale-105">
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-4">
              <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                {project.tag}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
            
            <ul className="space-y-3 mb-8">
              {project.description.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
              >
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
