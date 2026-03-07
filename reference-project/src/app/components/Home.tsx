import { Link } from "react-router";

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-24 border-b border-black/10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-black/50 mb-6">
            Computer Scientist & Creative
          </p>
          <h2 className="text-5xl font-serif leading-tight mb-8">
            Building at the intersection of technology and art
          </h2>
          <p className="text-lg leading-relaxed text-black/70 mb-8">
            I'm a computer scientist with a passion for creating beautiful, 
            functional experiences. My work explores the boundary between code 
            and creativity, combining technical precision with artistic expression.
          </p>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider text-black/50 mb-2">
            Featured Work
          </h3>
          <div className="h-px bg-black/10"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <Link to="/projects" className="group">
            <div className="aspect-[4/3] bg-black/5 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-black/10 to-black/5 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h4 className="text-xl font-serif mb-2 group-hover:underline">
              Generative Art Engine
            </h4>
            <p className="text-black/60 leading-relaxed">
              An algorithmic art system that creates unique visual compositions 
              using noise functions and cellular automata.
            </p>
          </Link>

          <Link to="/projects" className="group">
            <div className="aspect-[4/3] bg-black/5 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h4 className="text-xl font-serif mb-2 group-hover:underline">
              Typography Experiments
            </h4>
            <p className="text-black/60 leading-relaxed">
              A collection of interactive typographic compositions exploring 
              kinetic text and responsive letterforms.
            </p>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 border-t border-black/10">
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider text-black/50 mb-2">
            Recent Writing
          </h3>
          <div className="h-px bg-black/10"></div>
        </div>

        <div className="space-y-8">
          <Link to="/blog/1" className="block group">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-black/40 mb-2">
                  March 5, 2026
                </p>
                <h4 className="text-2xl font-serif mb-3 group-hover:underline">
                  On Computational Aesthetics
                </h4>
                <p className="text-black/60 leading-relaxed">
                  Exploring how algorithms can generate beauty, and what that means 
                  for the future of creative expression in the digital age.
                </p>
              </div>
              <div className="text-xs uppercase tracking-wider text-black/40">
                5 min read
              </div>
            </div>
          </Link>

          <div className="h-px bg-black/10"></div>

          <Link to="/blog/2" className="block group">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-black/40 mb-2">
                  February 28, 2026
                </p>
                <h4 className="text-2xl font-serif mb-3 group-hover:underline">
                  Building with Constraints
                </h4>
                <p className="text-black/60 leading-relaxed">
                  Why limitations in design and code often lead to more creative 
                  and elegant solutions.
                </p>
              </div>
              <div className="text-xs uppercase tracking-wider text-black/40">
                4 min read
              </div>
            </div>
          </Link>

          <div className="h-px bg-black/10"></div>

          <Link to="/blog/3" className="block group">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-black/40 mb-2">
                  February 15, 2026
                </p>
                <h4 className="text-2xl font-serif mb-3 group-hover:underline">
                  The Poetry of Code
                </h4>
                <p className="text-black/60 leading-relaxed">
                  Reflections on the aesthetic qualities of programming languages 
                  and the art of writing expressive code.
                </p>
              </div>
              <div className="text-xs uppercase tracking-wider text-black/40">
                6 min read
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:underline"
          >
            View All Posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
