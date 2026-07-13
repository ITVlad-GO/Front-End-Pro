// const createSum = () => {
//   let total = 0;

//   return (number) => {
//     return total += number;
//   };
// };                           <<8.1 DZ

// const sum = createSum();
// console.log(sum(4));
// console.log(sum(6));
// console.log(sum(10));
// console.log(sum(7));

// =================================================================================================================

// const numDob = (a) => {
//   return (b) => {
//     return a * b;
//   };                                 <<8.2 DZ
// };

// const result = numDob(2)(5);

// console.log(result)

// =================================================================================================================

// const randomNum = () => {
//   let persNum = 0;
//   for (let i = 0; i <= 10; i++) {
//     persNum = Number(prompt("Ведіть ваше число"));
//     if (persNum > 100) {
//       console.log(`Браво ви вели число більше за 100 і це ${persNum}`);        <<8.3 DZ
//     } 
//   }
//   console.log(`Ваше останнє число це ${persNum}`);
// };

// randomNum();