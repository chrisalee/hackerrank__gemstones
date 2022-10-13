/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
  let gemstoneCount = 0;
  //remove all duplicates from arr[0]
  let arrZeroUnique = new Set(arr[0]);
  // only considered a gemstone if found once in all instances of arr
  // use only one (arr[0]) because if found in that, look for those elements in the other instances, and dont have to worry about other elements not found in arr[0] because then wont be in all
  // for-in and for-of both provide a way to iterate over an object or array. The difference between them is: for-in provides access to the object keys, whereas the for-of operator provides access to the values of those keys.
  for(let letter of arrZeroUnique) {
    if(arr.every(lett => lett.includes(letter))) {
      gemstoneCount++;
    }
  }
  return gemstoneCount;
}


///////////////////////////////////////////////////////////////////////
function gemstones(arr) {
    let letters = [];

    // find letters
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!letters.includes(arr[i][j])) {
                letters.push(arr[i][j]);
            }
        }
    }

    letters = letters.join("");

    // validation
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (!arr[j].includes(letters[i])) {
                letters = letters.replace(letters[i], "");
                i--;
                break;
            }
        }
    }

    return letters.length;
}
