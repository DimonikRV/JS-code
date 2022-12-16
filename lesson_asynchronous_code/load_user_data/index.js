'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */
const requestUserData = (userId, callback) => {
     if (userId === 'broken') {
        callback = (null, 'Failed to load user data')
    }
  const userObj = {
    userId,
    email: `${userId}@example.com`,
  };
 
};

const callback = (userObj) => {
   
}
    
console.log(requestUserData('userId777', () => {}));
