
function distributeCandies(candyType) {
  // Create a hash table to store the number of candies of each type.
  const candyCounts = {};
  for (const candy of candyType) {
    candyCounts[candy] = (candyCounts[candy] || 0) + 1;
  }

  // Initialize the maximum number of different types of candies.
  let maxTypes = 0;

  // Iterate through the hash table.
  for (const candy in candyCounts) {
    // If the number of candies of this type is more than half of the total number of candies,
    // then we can eat one of this type of candy.
    if (candyCounts[candy] > candyType.length / 2) {
      maxTypes++;
    }
  }

  return maxTypes;
}
