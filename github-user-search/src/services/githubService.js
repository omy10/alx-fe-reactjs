import axios from 'axios';

headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
const BASE_URL = 'https://api.github.com/search/users';

export const searchGitHubUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username}+in:login`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `${BASE_URL}?q=${query}&per_page=20`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('GitHub API Error');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
