import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';

/**
 * TODO: Wire up githubService.ts to fetch real stats on mount.
 * TODO: Embed contribution graph via GitHub Readme Stats or custom canvas.
 * TODO: Animate stat numbers counting up on scroll entry.
 */
const GitHubStats: React.FC = () => {
  return (
    <section
      id="github-stats"
      data-section="github-stats"
      data-animate="true"
      className="github-stats"
    >
      <SectionTitle
        heading="GitHub Stats"
        subtitle="Activity and contributions"
      />

      <div className="github-stats__graph">
        {/* TODO: Replace with embedded contribution graph */}
        <ImagePlaceholder
          label="GitHub contribution graph"
          className="github-stats__graph-placeholder"
        />
      </div>

      <div className="github-stats__cards">
        <div className="github-stats__card">
          {/* TODO: Render streak stats card */}
          <span className="github-stats__card-label">Current Streak</span>
          <span className="github-stats__card-value">— days</span>
        </div>

        <div className="github-stats__card">
          {/* TODO: Render top languages card */}
          <span className="github-stats__card-label">Top Language</span>
          <span className="github-stats__card-value">TypeScript</span>
        </div>

        <div className="github-stats__card">
          {/* TODO: Render total stars card */}
          <span className="github-stats__card-label">Total Stars</span>
          <span className="github-stats__card-value">—</span>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
