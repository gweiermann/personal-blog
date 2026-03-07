const projects = [
  {
    id: "1",
    title: "Generative Art Engine",
    description: "An algorithmic art system that creates unique visual compositions using noise functions and cellular automata. Built with JavaScript and Canvas API.",
    year: "2026",
    tags: ["Generative Art", "JavaScript", "Canvas"],
    link: "#"
  },
  {
    id: "2",
    title: "Typography Experiments",
    description: "A collection of interactive typographic compositions exploring kinetic text and responsive letterforms using motion and SVG.",
    year: "2025",
    tags: ["Typography", "Animation", "React"],
    link: "#"
  },
  {
    id: "3",
    title: "Data Visualization Suite",
    description: "Interactive visualizations for complex datasets, focusing on clarity and aesthetic presentation. Custom D3.js implementations.",
    year: "2025",
    tags: ["Data Viz", "D3.js", "Design"],
    link: "#"
  },
  {
    id: "4",
    title: "Minimal CMS",
    description: "A stripped-down content management system with a focus on writing experience. Clean interface, markdown support, and fast performance.",
    year: "2025",
    tags: ["Web App", "React", "Node.js"],
    link: "#"
  },
  {
    id: "5",
    title: "Neural Style Transfer Tool",
    description: "Web-based tool for applying artistic styles to images using neural networks. Experimenting with ML in the browser.",
    year: "2024",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    link: "#"
  },
  {
    id: "6",
    title: "Algorithmic Music Generator",
    description: "System for generating ambient music using Markov chains and procedural composition techniques. Explores the boundary between structure and randomness.",
    year: "2024",
    tags: ["Audio", "Algorithms", "Web Audio API"],
    link: "#"
  }
];

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 pb-8 border-b border-black/10">
        <h1 className="text-5xl font-serif mb-4">Projects</h1>
        <p className="text-lg text-black/60 max-w-2xl">
          A selection of personal projects exploring the intersection of code, 
          design, and creative expression.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-16">
        {projects.map((project, index) => (
          <div key={project.id}>
            <a
              href={project.link}
              className="group grid grid-cols-3 gap-12 items-start"
            >
              {/* Visual */}
              <div className="aspect-[4/3] bg-black/5 overflow-hidden">
                <div
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(${45 + index * 40}deg, rgba(0,0,0,${0.03 + index * 0.015}), rgba(0,0,0,${0.08 + index * 0.015}))`
                  }}
                ></div>
              </div>

              {/* Content */}
              <div className="col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-serif mb-2 group-hover:underline">
                      {project.title}
                    </h2>
                    <p className="text-xs uppercase tracking-wider text-black/40">
                      {project.year}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs uppercase tracking-wider border border-black/20 text-black/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>

            {index < projects.length - 1 && (
              <div className="h-px bg-black/10 mt-16"></div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-24 pt-12 border-t border-black/10">
        <p className="text-black/60 leading-relaxed max-w-2xl">
          These projects represent ongoing explorations in computational creativity. 
          Most are open source and available on{" "}
          <a href="#" className="underline hover:text-black">
            GitHub
          </a>
          . For collaboration inquiries, feel free to{" "}
          <a href="#" className="underline hover:text-black">
            reach out
          </a>
          .
        </p>
      </div>
    </div>
  );
}
