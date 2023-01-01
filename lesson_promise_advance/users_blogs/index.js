'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = async users => {
  const usersRequests = users.map(async user => {
    const fetchUrl = `https://api.github.com/users/${user}`;
    try {
      const request = await fetch(fetchUrl);
      const usersRequests = await request.json();
      return usersRequests;
    } catch (error) {
      throw new Error(error);
    }
  });

  const usersData = await Promise.all(usersRequests);
  return usersData.map(({ blog }) => blog);
};
