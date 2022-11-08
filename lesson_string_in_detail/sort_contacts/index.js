function sortContacts(arr, ask) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sortedContacts = arr.sort((a, b) => a.name.localeCompare(b.name));
  if (ask === false) {
    sortedContacts = arr.sort((a, b) => b.name.localeCompare(a.name));
  }
  return sortedContacts;
}
