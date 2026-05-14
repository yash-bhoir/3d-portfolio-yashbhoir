import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Card } from '@components/ui/Card';
import { blogPosts } from '@constants/blog';
import { formatDate } from '@utils/formatDate';

/**
 * TODO: Add design — card with date badge, platform tag, title, read-more arrow link.
 * TODO: Optionally fetch latest posts from Medium / Dev.to RSS feed.
 */
const Blog: React.FC = () => {
  return (
    <section
      id="blog"
      data-section="blog"
      data-animate="true"
      className="blog"
    >
      <SectionTitle
        heading="Blog"
        subtitle="Writing about things I learn"
      />

      <div className="blog__grid">
        {blogPosts.map((post) => (
          <Card key={post.id} className="blog__card">
            <div className="blog__card-meta">
              <span className="blog__card-date">{formatDate(post.date)}</span>
              <span className="blog__card-platform">{post.platform}</span>
            </div>
            <h3 className="blog__card-title">{post.title}</h3>
            <a
              href={post.readMoreLink}
              className="blog__card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
