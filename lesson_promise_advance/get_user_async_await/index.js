'use strict';

export const fetchUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.status === 404) {
    throw new Error('Failed to get user data');
  }
  return response.json();
};
