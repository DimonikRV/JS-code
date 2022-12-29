export const getRequest = async userName => {
  const response = fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  const userData = await response.json();
  return userData;
};

export const fetchReposList = async url => {
  const response = fetch(url);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  const reposList = await response.json();
  return reposList;
};
