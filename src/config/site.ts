/**
 * Site-wide config: name, social links, taglines, and other personal/editable values.
 * Edit this file to customize your portfolio without touching layout or page code.
 */
export const site = {
  /** Your full name (header, page titles, meta) */
  name: 'Gerrit Weiermann',

  /** Short tagline / role (home hero, meta description) */
  tagline: 'Computer Scientist & Creative',

  /** Social & external links */
  links: {
    github: 'https://github.com/gweiermann',
    linkedin: 'https://www.linkedin.com/in/gerrit-weiermann-686336252/',
    /** Optional: contact / "reach out" URL (e.g. mailto: or contact page) */
    contact: 'mailto:hello@example.com',
  },

  /** Copyright text in footer (use {year} for current year) */
  copyright: '© {year}. All rights reserved.',

  /** Home page content */
  home: {
    headline: 'Building at the intersection of technology and art',
    intro:
      "I'm a computer scientist with a passion for creating beautiful, functional experiences. My work explores the boundary between code and creativity, combining technical precision with artistic expression.",
    /** Featured work shown on the home page. List project or blog slugs in the order you want them displayed. */
    featuredWork: [
      { type: 'project', slug: 'generative-art-engine' },
      { type: 'blog', slug: 'vue-ssr-postprocessing-cms' },
    ],
  },

  /** Blog section */
  blog: {
    metaDescription: 'Thoughts on technology, design, and the creative process.',
    pageDescription:
      'Thoughts on technology, design, and the creative process. A collection of essays and observations.',
  },

  /** Projects section */
  projects: {
    metaDescription:
      'A selection of personal projects exploring the intersection of code, design, and creative expression.',
    pageDescription:
      'A selection of personal projects exploring the intersection of code, design, and creative expression.',
    /** Footer paragraph: parts around the GitHub and contact links */
    footerNote: {
      beforeGithub:
        'These projects represent ongoing explorations in computational creativity. Most are open source and available on ',
      afterGithubBeforeContact: '. For collaboration inquiries, feel free to ',
      afterContact: '.',
    },
  },
} as const;

/** Resolve copyright string with current year */
export function getCopyright(): string {
  const year = new Date().getFullYear();
  return site.copyright.replace('{year}', String(year));
}
