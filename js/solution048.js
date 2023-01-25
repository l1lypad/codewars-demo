//Count characters in your string


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let newString = string.split('');
    let obj = {};
    newString.forEach(function(element) {
      if (obj[element]) {
        obj[element] = obj[element] + 1;
      } else {
        obj[element] = 1;
      }
    });
    return obj;
  }
  