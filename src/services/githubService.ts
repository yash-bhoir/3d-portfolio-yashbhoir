import axios from 'axios';

export interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  stars: number;
}

/**
 * Fetches public GitHub stats for the portfolio owner.
 * TODO: use GitHub REST or GraphQL API; add auth token via env var.
 */
export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  // TODO: replace with real GitHub API call
  const response = await axios.get<GitHubStats>(`/api/github/${username}`);
  return response.data;
}
