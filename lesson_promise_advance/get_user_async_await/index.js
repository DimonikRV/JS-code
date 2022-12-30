'use strict';

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};
