'use strict';

const fetchUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    return new Promise.reject(new Error('Failed to get user data'));
  }
  const userData = await response.json();
  return userData;
};

fetchUser('facebook');
