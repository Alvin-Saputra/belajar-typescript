/*
Di TypeScript, intersection type adalah cara menggabungkan dua atau lebih 
tipe menjadi satu tipe yang memiliki semua properti dari setiap tipe 
tersebut. Intersection type menggunakan operator &

*/

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type Staff = Person & Employee;

// Sekarang Staff harus memiliki semua properti dari Person dan Employee.
const staff: Staff = {
  name: "Budi",
  age: 25,
  employeeId: "EMP001",
  department: "IT"
};

// Jika ada properti yang hilang:
// TypeScript akan menghasilkan error karena employeeId dan department belum ada.
// const staff2: Staff = {
//   name: "Budi",
//   age: 25
// };