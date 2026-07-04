// const user = {
//   name: "Влад",
//   age: 20,
//   city: "Одеса",                                <<6.1DZ
//   country: "Україна",
//   hobby: "Програмування",
//   sayHello: (hi) => {
//     console.log(`${hi} ${user.name}`);
//   },
// };

// user.sayHello("Привіт");

// =====================================================================

// let num = [12, 23, 12, 11, 24, 124, 123, 43, 18];
// let num2 = [];
// const par = num.map((item) => {
//   if(item % 2 === 0){
//     num2.push(item)                         <<6.2DZ
//   }
// });

// console.log(...num2)
// =========================================================================================

// const contactBook = {
//   contacts: [
//     {
//       name: "Іван Петренко",
//       phone: "+380671234567",
//       email: "ivan.petrenko@gmail.com",
//     },
//     {
//       name: "Олена Коваль",
//       phone: "+380501112233",
//       email: "olena.koval@gmail.com",                                 <<6.3DZ
//     },
//     {
//       name: "Максим Шевченко",
//       phone: "+380931234567",
//       email: "maksym.shevchenko@gmail.com",
//     },
//   ],
//   findContactByName: (number) => {
//     const result = contactBook.contacts.find((item) => {
//       if (item.phone === number) return true;
//     });

//     if (!result) return "За цим номером немає контакта";

//     return `Цей номер алежить контакту ${result.name}`;
//   },

//   addNewContact: (info) => {
//     contactBook.contacts.push({name: 'Vlad'});
//     console.log(contactBook.contacts);
//   },
// };
// contactBook.addNewContact();
// const result = contactBook.findContactByName("+380931234567");

// console.log(result);
