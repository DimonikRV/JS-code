const countOccurrences = (str, text = "") => {
  if (text.length === 0) {
    return null;
  }
  let countOcc = 0;
  let startWith = 0;
  while (text.indexOf(str, startWith) > -1) {
    countOcc += 1;

    startWith = text.indexOf(str, startWith) + str.length;
  }
  return countOcc;
};

console.log(
  countOccurrences(
    "fgsdg",
    " zxsdfs fgsdg sg sg s gsd ds, gsdg ygyg gsdg zxsdfs gsdg gsdg  gsdg dfggdg fgsdg fgsdg"
  )
);
