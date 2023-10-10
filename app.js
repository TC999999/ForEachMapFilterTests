// forEach
// Exercise 1: doubleValues
function doubleValues(arr) {
  let doubles = [];
  arr.forEach(function (val) {
    val *= 2;
    doubles.push(val);
  });
  return doubles;
}

//Exercise 2: onlyEvenValues
function onlyEvenValues(arr) {
  let evens = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evens.push(val);
    }
  });
  return evens;
}

//Exercise 3: showFirstAndLast
function showFirstAndLast(arr) {
  let FLArr = [];
  arr.forEach(function (string) {
    let newString = string.split("");
    newString.splice(1, newString.length - 2);
    FLArr.push(newString.join(""));
  });
  return FLArr;
}

//Exercise 4: addKeyAndValue
function addKeyAndValue(objArr, key, value) {
  objArr.forEach(function (obj) {
    obj[key] = value;
  });
  return objArr;
}

//Exercise 5: vowelCount
function vowelCount(str) {
  str = str.toLowerCase();
  const vowels = {};
  const vowelStr = "aeiou";
  strArr = str.split("");
  strArr.forEach(function (letter) {
    let total = 0;
    if (vowels.hasOwnProperty(letter)) {
      total = vowels[letter];
    }
    if (vowelStr.indexOf(letter) !== -1) {
      total++;
    }
    if (total > 0) {
      vowels[letter] = total;
    }
  });
  return vowels;
}

//Map
//Exercise 1: doubleValuesWithMap
function doubleValuesWithMap(arr) {
  let doubles = arr.map(function (val) {
    return val * 2;
  });
  return doubles;
}

//Exercise 2: valTimesIndex
function valTimesIndex(arr) {
  let idx = arr.map(function (val, i) {
    return val * i;
  });
  return idx;
}

//Exercise 3: extractKey
function extractKey(objArr, key) {
  let noKey = objArr.map(function (obj) {
    return obj[key];
  });
  return noKey;
}

//Exercise 4: extractFullName
function extractFullName(objArr) {
  let fullName = objArr.map(function (name) {
    return `${name.first} ${name.last}`;
  });
  return fullName;
}

//Filter
//Exercise 1: filterByValue
function filterByValue(objArr, key) {
  let valArr = objArr.filter(function (obj) {
    return obj[key];
  });
  return valArr;
}

//Exercise 2: find
function find(arr, num) {
  let findVal = arr.filter(function (val) {
    if (val === num) {
      return num;
    }
  });
  return findVal[0];
}

//Exercise 3: findInObj
function findInObj(objArr, key, value) {
  let findObj = objArr.filter(function (obj) {
    if (obj[key] === value) {
      return obj;
    }
  });
  return findObj[0];
}

//Exercise 4: removeVowels
function removeVowels(str) {
  str = str.toLowerCase();
  strArr = str.split("");
  let finArr = [];
  const vowelStr = "aeiou";
  let noVowels = strArr.filter(function (letter, i) {
    if (vowelStr.indexOf(letter) === -1) {
      return finArr.push(letter);
    }
  });
  return noVowels.join("");
}

//Exercise 5: doubleOddNumbers
function doubleOddNumbers(arr) {
  let oddArr = arr.filter(function (nums) {
    if (nums % 2 !== 0) {
      return nums;
    }
  });
  let doubOddArr = oddArr.map(function (nums) {
    return nums * 2;
  });
  return doubOddArr;
}
