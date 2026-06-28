

// Pada array, semua elemen biasanya memiliki tipe yang sama (atau union type), dan 
// panjangnya bisa berubah.

let numbers: number[] = [1, 2, 3];

numbers.push(4);      // ✅
numbers.push(5);      // ✅

// Atau array dengan beberapa tipe:

let data: (string | number)[] = ["Andi", 20, "Programmer"];

// Masalahnya, TypeScript tidak tahu bahwa indeks tertentu harus bertipe tertentu.

let data2: (string | number)[] = ["Andi", 20];

let namaa = data[0]; // string | number
let umurrr = data[1]; // string | number

// Walaupun kita tahu data[0] adalah string, TypeScript tetap menganggapnya bisa string | number.

// ===============Tuple

// Tuple mendefinisikan tipe setiap posisi.

let user: [string, number] = ["Andi", 20];

// Artinya:

// indeks 0 → harus string
// indeks 1 → harus number
let nama = user[0]; // string
let umur = user[1]; // number

// Kalau salah urutan:

// let user: [string, number] = [20, "Andi"];

// ❌ Error

// Kalau salah jumlah:

// let user: [string, number] = ["Andi"];

// ❌ Error