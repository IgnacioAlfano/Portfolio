import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Bank App",
    description: "Solución web moderna con componentes reutilizables y diseño responsivo, basada en React y Tailwind.",
    image: "/BankApp.png",
    tags: ["React", "TailwindCSS" ],
    demoUrl: "https://modern-bank-app-cyan.vercel.app/#features",
    githubUrl: "https://github.com/IgnacioAlfano",
  },
  {
    id: 2,
    title: "Vam Web Optimization",
    description:
      "UI conceptual basada en el espacio, con estética retro-pixelada y navegación intuitiva diseñada en Figma.",
    image: "/Vam-WEB-Optimization.png",
    tags: ["Figma", "Prototype", "Web Design"],
    demoUrl: "https://www.figma.com/design/DMecBTWtduwmtvYuSonHsG/VamWeb?node-id=0-1&p=f&t=NhAValUHqFEtUQ16-0",
    githubUrl: "https://github.com/IgnacioAlfano",
  },
  {
    id: 3,
    title: "Modern Portfolio",
    description:
      " Portafolio moderno usando React, TailwindCSS, Vite y Lucide Icons. Con soporte para modo oscuro y animaciones responsivas",
    image: "/Portfolio.png",
    tags: ["React", "TailwindCSS", "Vite",],
    demoUrl: "",
    githubUrl:"https://github.com/IgnacioAlfano/Portfolio",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary"> Proyectos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estos son algunos de mis proyectos recientes. Cada uno fue cuidadosamente desarrollado con atención al detalle, el rendimiento y la experiencia del usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/IgnacioAlfano?tab=repositories"
          >
             Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};