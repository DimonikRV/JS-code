// function splitString(text, len = 10) {
//   const arr = [];
//   let startCut = 0;

//   if (typeof text !== "string") {
//     return null;
//   }

//   while (true) {
//     let subString = text.substr(startCut, len);
//     if (subString.length === 0) {
//       break;
//     }
//     while (subString.length < len) {
//       subString = subString.concat(".");
//     }
//     arr.push(subString);
//     startCut += len;

//     // console.log(arr);
//   }
//   return arr; // console.log(arr);
// }

// console.log(splitString("abcd efgh", 4));

function concatDots(len, substr, dots) {
  let newSubstr = substr;
  while (newSubstr.length < len) {
    newSubstr = newSubstr.concat(dots);
  }
  return newSubstr;
}

function splitString(text, len = 10) {
  const arr = [];
  let startCut = 0;
  let subString = "";
  const dots = ".";
  if (typeof text !== "string") {
    return null;
  }

  while (true) {
    subString = text.substr(startCut, len);
    if (subString.length === 0) {
      break;
    }

    if (subString.length < len) {
      arr.push(concatDots(len, subString, dots));
      break;
    }
    arr.push(subString);
    startCut += len;
  }
  return arr;
}

console.log(splitString("abcd jgcfhfgzh", 4));
