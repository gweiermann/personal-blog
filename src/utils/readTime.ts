import type { CollectionEntry } from 'astro:content';

type BlogPostEntry = CollectionEntry<'blog'>;

export const readTime = (post: BlogPostEntry): string =>
  post.data.readTimeMinutes ? `${post.data.readTimeMinutes} min read` : '';

export const readTimeWithSeparator = (post: BlogPostEntry): string =>
  post.data.readTimeMinutes ? ` · ${readTime(post)}` : '';

