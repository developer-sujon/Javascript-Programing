const roll = [10, 4, 89, 33, 22, 1, 12]; //Sorts the array in ascending numerical order.
const fruits = ["Banana", "Orange", "Apple", "Mango"]; // Sorts the array alphabetically in ascending order.
const colleagues = ["Nahid", "Akbor", "Bash", "Siam", "Rasel"];

function sortNum(arr) {
  const result = arr.sort((a, b) => a - b); //ascending
  return result;
}

function sortName(arr) {
  const result = arr.sort((a, b) => {
    const x = a.toLowerCase();
    const y = b.toLowerCase();

    return x > y ? -1 : x < y ? 1 : 0; //descending
  });

  return result;
}

function sortByLength(arr) {
  const result = arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      0;
    }
  });

  return result;
}

// Test the functions
console.log("Sorted Numbers (Ascending):", sortNum(roll));
console.log("Sorted Names (Descending):", sortName(fruits));
console.log(
  "Sorted Colleagues by Length (Ascending):",
  sortByLength(colleagues)
);
