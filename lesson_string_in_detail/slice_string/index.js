function splitText(text, len = 10) {
  const arr = [];
  let startCut = 0;

  if (typeof text !== "string") {
    return null;
  }
  const joinText = text.split(" ").join("");
  while (true) {
    const subString = joinText.substr(startCut, len);
    if (subString.length === 0) {
      break;
    }
    arr.push(subString[0].toUpperCase() + subString.slice(1));
    startCut += len;

    // console.log(arr);
  }
  return arr.join("\n"); // console.log(arr);
}

console.log(
  splitText("jshdj dsfsdfsdhf sdfsdfsdfsd dfsdfsdf dfsdfsdf sdfsdfsfd", 4)
);
console.log(
  splitText("jshdj dsfsdfsdhf sdfsdfsdfsd dfsdfsdf dfsdfsdf sdfsdfsfd")
);
console.log(splitText("jshdjdsfsdfsdhfdfsdfsdfdfsdfsdf", 4));
console.log(splitText(8, 4));
console.log(splitText("string", 4));
