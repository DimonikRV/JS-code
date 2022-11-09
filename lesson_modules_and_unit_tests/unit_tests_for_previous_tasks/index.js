// export function reverseString(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.slice().reverse();
// }

// export const withdraw = (clients, balances, client, amount) => {
//   const clientsInd = clients.indexOf(client);
//   if (balances[clientsInd] < amount) {
//     return -1;
//   }

//   balances = balances.map((el, index) =>
//     index === clientsInd ? el - amount : el
//   );
//   return balances[clientsInd];
// };

const getAdults = (obj) => {
  const boundaryAge = 18;
  const adults = {};

  Object.entries(obj)
    .filter((item) => item[1] >= boundaryAge)
    .forEach((el) => (adults[el[0]] = el[1]));
  return adults;
};

// examples
console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
