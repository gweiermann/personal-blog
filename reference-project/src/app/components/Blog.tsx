import { Link } from "react-router";

const blogPosts = [
  {
    id: "1",
    title: "On Computational Aesthetics",
    excerpt: "Exploring how algorithms can generate beauty, and what that means for the future of creative expression in the digital age.",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Essays"
  },
  {
    id: "2",
    title: "Building with Constraints",
    excerpt: "Why limitations in design and code often lead to more creative and elegant solutions.",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Design"
  },
  {
    id: "3",
    title: "The Poetry of Code",
    excerpt: "Reflections on the aesthetic qualities of programming languages and the art of writing expressive code.",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Programming"
  },
  {
    id: "4",
    title: "Minimalism in Digital Spaces",
    excerpt: "How reducing visual noise and embracing whitespace can create more focused and meaningful user experiences.",
    date: "January 30, 2026",
    readTime: "5 min read",
    category: "Design"
  },
  {
    id: "5",
    title: "Generative Systems and Emergence",
    excerpt: "Understanding how simple rules can create complex, beautiful patterns in generative art and design.",
    date: "January 12, 2026",
    readTime: "7 min read",
    category: "Essays"
  },
  {
    id: "6",
    title: "The Craft of Interface Design",
    excerpt: "Lessons learned from studying typography, layout, and interaction design in creating delightful interfaces.",
    date: "December 20, 2025",
    readTime: "6 min read",
    category: "Design"
  }
];

export function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 pb-8 border-b border-black/10">
        <h1 className="text-5xl font-serif mb-4">Blog</h1>
        <p className="text-lg text-black/60 max-w-2xl">
          Thoughts on technology, design, and the creative process. 
          A collection of essays and observations.
        </p>
      </div>

      {/* Featured Post */}
      <section className="mb-20">
        <p className="text-xs uppercase tracking-wider text-black/40 mb-6">
          Featured
        </p>
        <Link to={`/blog/${blogPosts[0].id}`} className="group">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/2] bg-black/5 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-black/40 mb-3">
                {blogPosts[0].category} · {blogPosts[0].date}
              </p>
              <h2 className="text-4xl font-serif mb-4 group-hover:underline">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-black/70 leading-relaxed mb-4">
                {blogPosts[0].excerpt}
              </p>
              <p className="text-sm text-black/50">
                {blogPosts[0].readTime}
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* All Posts */}
      <section>
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wider text-black/40 mb-2">
            All Posts
          </p>
          <div className="h-px bg-black/10"></div>
        </div>

        <div className="grid gap-12">
          {blogPosts.slice(1).map((post, index) => (
            <div key={post.id}>
              <Link to={`/blog/${post.id}`} className="group">
                <div className="grid grid-cols-3 gap-8 items-start">
                  <div className="aspect-[4/3] bg-black/5 overflow-hidden">
                    <div 
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(${135 + index * 30}deg, rgba(0,0,0,0.05), rgba(0,0,0,0.1))`
                      }}
                    ></div>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs uppercase tracking-wider text-black/40 mb-3">
                      {post.category} · {post.date} · {post.readTime}
                    </p>
                    <h3 className="text-2xl font-serif mb-3 group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
              {index < blogPosts.length - 2 && (
                <div className="h-px bg-black/10 mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
