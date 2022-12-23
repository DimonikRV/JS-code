const getRequest = (userId, repoId) => {
  fetch(`api.github.com/repos/${userId}/${repoId}/commits?per_page=100`).then(userData =>
    userData.json(),
  );
};

const getMostActiveDevs = ({ days, userId, repoId }) => {
  getRequest(userId, repoId);
};
