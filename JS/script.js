// let welck = "hello world";
// const arr = welck.split("");

// const filterWords = (personWord) => {
//   const result = arr.filter((item) => {
//     return !personWord.includes(item);                         <<7.1DZ
//   });

//   return result;
// };

// let word = prompt("Введіть літери для видалення:");
// const arr2 = word.split("");

// const result = filterWords(arr2);

// console.log(result.join(""));

// =====================================================================================

// const arr = [
//   10,
//   20,
//   30,
//   40,
//   50,
//   60,
//   70,
//   80,
//   90,
//   100,
//   "Hello",
//   true,                                              <<7.2 DZ
//   false,
//   null,
//   undefined,
//   { name: "Vlad" },
//   [1, 2, 3],
// ];

// const sum = (arrForSum) => {
//   const result = arrForSum.reduce((acc, item) => {
//     if (typeof item === "number") {
//       acc += item;
//     }
//     return acc;
//   }, 0);
//   return result;
// };

// const result = sum(arr);

// console.log(result);

// =====================================================================================

// const array = [1, 3, 4, 6, 2, 5, 7];

// const removeElement = (array, item) => {
//   const index = array.indexOf(item);
//   if(index !== -1) {
//     array.splice(index, 1);                       <<7.3DZ
//   }return array
// };

// const result = removeElement(array, 7)

// console.log(result)