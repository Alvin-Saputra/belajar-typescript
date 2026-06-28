let myName: string = "Bob"
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let numberOfWheels: number = 4
let isStudent: boolean = false


// unknown
// Di TypeScript, unknown adalah tipe yang digunakan untuk menyatakan bahwa nilai bisa berupa apa saja, 
// tetapi harus diperiksa terlebih dahulu sebelum digunakan. Tipe ini lebih aman daripada any.

let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

function printDouble(value: unknown) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log("Bukan angka");
  }
}


// symbol adalah salah satu tipe primitif di JavaScript dan TypeScript yang 
// digunakan untuk membuat identifier yang selalu unik.
// Saat Anda membuat Symbol(), hasilnya selalu unik, meskipun deskripsinya sama.

const id1 = Symbol("user");
const id2 = Symbol("user");

// console.log(id1 === id2); // false

// Kegunaan Utama symbol
// 1. Mencegah Bentrok Nama Properti (Property Key Collision)
// imi misalnya kita ingin menambahkan id lokal sementara dan tidak ingin mereplace id dari server misalnya
const id = Symbol("id");

const user = {
  nama: "Alvin",
  umur: 24,
  id: 1234,
  [id]: 12345 // Menggunakan symbol sebagai key
};

console.log(user[id]); // Output: 12345



// null

// null berarti nilai kosong yang sengaja diberikan.

let user3 = null;

// Contoh:

type User = {
  name: string;
};

let currentUser: User | null = null;

// nanti
currentUser = {
  name: "Budi",
};


// undefined

// undefined berarti belum ada nilai.

// Contoh JavaScript:

// contoh 1
// let a;
// console.log(a); -> undefined
// undefined

// contohn2
const obj = {};
// console.log(obj.name); -> undefined

// Di TypeScript:
let age: number | undefined;

// Contoh:
interface User3 {
    name: string;
    age?: number;
}

// Karena age?, maka sebenarnya tipenya adalah
// age: number | undefined
// Artinya:
// property ini boleh tidak ada.

// void
function cetakPesan(pesan: string): void {
  console.log(pesan);
  // Tidak ada 'return' di sini (atau 'return;' kosong)
}

// never
// 3. return never (tidak pernah selesai normal)
// Melempar error (program berhenti di sini)
function lemparError(pesan: string): never {
  throw new Error(pesan);
}

// Infinite loop (fungsi tidak pernah selesai)
function perulanganTanpaHenti(): never {
  while (true) {
    console.log("Berjalan terus...");
  }
}
