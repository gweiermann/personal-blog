import { useParams, Link } from "react-router";

// Mock blog post data
const blogPostsData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: { type: string; text: string }[];
}> = {
  "1": {
    title: "On Computational Aesthetics",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Essays",
    content: [
      {
        type: "paragraph",
        text: "There's something profound about watching an algorithm create beauty. Not the utilitarian beauty of an efficient sorting routine or an elegant data structure, but visual, aesthetic beauty—the kind that makes you pause and simply look."
      },
      {
        type: "paragraph",
        text: "Computational aesthetics sits at an interesting crossroads. It's where the deterministic world of code meets the subjective realm of artistic expression. When we write algorithms that generate art, we're not directly creating the final piece. Instead, we're designing systems that explore possibility spaces, discovering forms we might never have imagined on our own."
      },
      {
        type: "heading",
        text: "The Algorithm as Artist"
      },
      {
        type: "paragraph",
        text: "There's an ongoing debate about whether algorithmic art can be truly creative. Critics argue that since the algorithm follows predetermined rules, it can't be genuinely original. But this misses something important: all creative processes involve constraints and systems."
      },
      {
        type: "paragraph",
        text: "A painter works within the constraints of their medium, their tools, their training. A poet works within language, rhythm, form. The algorithm is simply another set of constraints, another medium through which aesthetic ideas can be expressed."
      },
      {
        type: "heading",
        text: "Emergence and Surprise"
      },
      {
        type: "paragraph",
        text: "What makes generative systems particularly interesting is their capacity for surprise. Even when you've written the code, you can't always predict what it will produce. Simple rules can lead to complex, unexpected outcomes—emergence in action."
      },
      {
        type: "paragraph",
        text: "This element of discovery is what keeps me coming back to computational aesthetics. Each run of the algorithm is an exploration, a collaboration between intention and chance, between design and emergence."
      }
    ]
  },
  "2": {
    title: "Building with Constraints",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Design",
    content: [
      {
        type: "paragraph",
        text: "Constraints are often seen as obstacles to creativity, but I've found the opposite to be true. Some of my best work has emerged from severe limitations—whether technical, aesthetic, or conceptual."
      },
      {
        type: "paragraph",
        text: "When you have infinite possibilities, decision paralysis sets in. But give yourself three colors instead of thousands, or commit to a specific grid system, and suddenly the path forward becomes clearer. Constraints force you to be more creative, not less."
      }
    ]
  },
  "3": {
    title: "The Poetry of Code",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Programming",
    content: [
      {
        type: "paragraph",
        text: "Code has rhythm. It has structure, repetition, variation. Like poetry, good code says much with little—it's expressive, economical, precise."
      },
      {
        type: "paragraph",
        text: "I often think about the aesthetic qualities of programming languages. Some are verbose and ceremonious, others terse and cryptic. Each has its own character, its own way of expressing ideas."
      }
    ]
  }
};

export function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-black/60 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black mb-12"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12 pb-12 border-b border-black/10">
        <p className="text-xs uppercase tracking-wider text-black/40 mb-4">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="text-5xl font-serif leading-tight mb-6">
          {post.title}
        </h1>
      </header>

      {/* Content */}
      <article className="prose-custom">
        {post.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2 key={index} className="text-2xl font-serif mt-12 mb-6">
                {block.text}
              </h2>
            );
          }
          return (
            <p key={index} className="text-lg leading-relaxed text-black/80 mb-6">
              {block.text}
            </p>
          );
        })}
      </article>

      {/* Footer */}
      <div className="mt-16 pt-12 border-t border-black/10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:underline"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  );
}
