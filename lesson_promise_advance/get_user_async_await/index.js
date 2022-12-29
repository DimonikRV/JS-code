'use strict';

export const fetchUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to get user data');
  }
  return response.json();
};
