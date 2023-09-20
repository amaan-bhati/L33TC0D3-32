function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

// Example usage:
const reversedString = reverseString("hello");
console.log(reversedString); // Outputs: olleh
