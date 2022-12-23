const urlServ = 'https://63a5c50df8f3f6d4abff64be.mockapi.io/tasklist/';

export const getTaskList = () => {
  return fetch(urlServ).then(response => response.json());
};

export const createTaskList = newTasksList => {
  return fetch(`${urlServ}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset = utf-8',
    },
    body: JSON.stringify(newTasksList),
  });
};

export const updateTask = (UpdatedTaskData, taskId) => {
  return fetch(`${urlServ}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset = utf-8',
    },
    body: JSON.stringify(UpdatedTaskData),
  });
};
