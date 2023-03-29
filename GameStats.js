export default function minionGameOutput(string, vowelPlayer, consonentPlayer) {
  let scoreVowelPlayer = 0;
  let scoreConsonantPlayer = 0;
  const upperCaseString = string.toUpperCase();
  const vowels = ["A", "E", "I", "O", "U"];
  const lengthOfTheString = string.length;

  for (let i = 0; i < lengthOfTheString; i++) {
    if (vowels.indexOf(upperCaseString[i]) !== -1) {
      scoreVowelPlayer += lengthOfTheString - i;
    } else {
      scoreConsonantPlayer += lengthOfTheString - i;
    }
  }

  if (scoreVowelPlayer > scoreConsonantPlayer) {
    return {
      Winner: [vowelPlayer, scoreVowelPlayer],
      Looser: [consonentPlayer, scoreConsonantPlayer],
    };
  } else if (scoreConsonantPlayer > scoreVowelPlayer) {
    return {
      Winner: [consonentPlayer, scoreConsonantPlayer],
      Looser: [vowelPlayer, scoreVowelPlayer],
    };
  } else {
    return { Draw: [scoreVowelPlayer, scoreConsonantPlayer] };
  }
}

function subStringsOfTheString(string) {
  let consonentStartingSubStr = {};
  let vowelStartingSubStr = {};

  const vowels = ["A", "E", "I", "O", "U"];
  const upperCaseString = string.toUpperCase();
  const lengthOfTheString = string.length;

  for (let i = 1; i <= lengthOfTheString; i++) {
    const subStrArr = allSubString(upperCaseString, i);

    subStrArr.forEach((subStr) => {
      let consonentObjectKeysArr = Object.keys(consonentStartingSubStr);
      let vowelsObjectKeysArr = Object.keys(vowelStartingSubStr);

      if (vowels.indexOf(subStr[0]) !== -1) {
        if (vowelsObjectKeysArr.indexOf(subStr) === -1) {
          vowelStartingSubStr[subStr] = 1;
        } else {
          vowelStartingSubStr[subStr]++;
        }
      } else {
        if (consonentObjectKeysArr.indexOf(subStr) === -1) {
          consonentStartingSubStr[subStr] = 1;
        } else {
          consonentStartingSubStr[subStr]++;
        }
      }
    });
  }
  return [consonentStartingSubStr, vowelStartingSubStr];
}

function allSubString(string, subStrLength) {
  const stringLength = string.length;
  let arr = [];
  for (let i = 0; i < stringLength - (subStrLength - 1); i++) {
    arr.push(string.slice(i, i + subStrLength));
  }
  return arr;
}

export { subStringsOfTheString };
