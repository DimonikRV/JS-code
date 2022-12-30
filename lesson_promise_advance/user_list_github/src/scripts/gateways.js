export const getRequest = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  const userData = await response.json();
  return userData;
};

export const fetchReposList = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  const repoData = await response.json();
  return repoData;
};
