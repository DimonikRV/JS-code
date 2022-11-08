function reverseString(string) {
  if (typeof string !== "string") {
    return null;
  }
  return string.split("").reverse().join("");
}
console.log(reverseString("skdkklfgflgdl"));
