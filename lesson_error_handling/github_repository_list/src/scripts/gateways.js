export const getRequest = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(userData => {
    if (userData.ok) {
      return userData.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchReposList = url => {
  return fetch(url).then(reposList => {
    if (reposList.ok) {
      return reposList.json();
    }
    throw new Error('Failed to load data');
  });
};
