// Literal Type di TypeScript adalah cara untuk 
// membatasi sebuah variabel agar hanya bisa menerima nilai eksak atau spesifik, 
// bukan sekadar tipe data umum secara luas.

// Sebagai gambaran: jika Anda menggunakan tipe data string, 
// variabel tersebut bisa diisi dengan teks apa saja. 
// Namun, jika Anda menggunakan literal type, Anda memberi tahu TypeScript, 
// "Variabel ini hanya boleh diisi dengan teks 'sukses' atau 'gagal'."



// 1. String Literal

// mendifinisikan variabel myName dengan tipe "bob"
let myName: "Bob" = "Bob"

// myname2 otomatis bertipe string karena typescript melakukan inference
let myname2 = "udin"

// myname3 otomatis bertipe "Bobby" karena typescript melakukan inference dan sejatinya
// const tidak dapat diubah nilainya, jadi tipenya harus sama dengan valueynya
const myName3 = "Bobby"

// jika mengisi myName dengan nilau lain selain bob akan error, karena myName sudha bertipe "Bob"
// myName = "Andy" 


type Arah = "atas" | "bawah" | "kiri" | "kanan";

function gerakkanKarakter(arah: Arah) {
  console.log(`Karakter bergerak ke ${arah}`);
}

gerakkanKarakter("atas"); // ✅ Valid
// gerakkanKarakter("maju"); // ❌ Error: Type '"maju"' is not assignable to type 'Arah'



// 2. Numeric Literal Type
// Hanya menerima angka 1 sampai 5
type RatingBintang = 1 | 2 | 3 | 4 | 5;

let ulasanSaya: RatingBintang;

ulasanSaya = 5;  // ✅ Valid
// ulasanSaya = 10; // ❌ Error: Type '10' is not assignable to type 'RatingBintang'.


// 3. Boolean Literal Type
type Berhasil = true;

let prosesSelesai: Berhasil;
prosesSelesai = true;  // ✅ Valid
// prosesSelesai = false; // ❌ Error: Type 'false' is not assignable to type 'true'.


// 4. Object Literal type
type KonfigurasiAplikasi = {
  env: "production" | "development"; // Hanya boleh dua teks ini
  port: 8080 | 3000;                  // Hanya boleh dua angka ini
  ssl: true;                         // WAJIB bernilai true
}

// 1. CONTOH YANG VALID ✅
const configResmi: KonfigurasiAplikasi = {
  env: "production",
  port: 8080,
  ssl: true
}; 

// 2. CONTOH YANG ERROR/SALAH ❌
// const configError: KonfigurasiAplikasi = {
//   env: "staging", // ❌ Error: "staging" tidak terdaftar di tipe env
//   port: 5000,      // ❌ Error: 5000 tidak terdaftar di tipe port
//   ssl: false       // ❌ Error: Type 'false' is not assignable to type 'true'
// };

// Membuat objek biasa, tapi dikunci dengan 'as const' juga bisa digunakan untuk mendefinisikan object literal type
const API_ENDPOINT = {
  url: "https://api.contoh.com",
  versi: 2,
  fiturBeta: false
} as const;



// 5. array literal type
// Ini adalah Tuple: Harus tepat 2 elemen. Indeks 0 = string, Indeks 1 = number
type TitikKoordinat = [string, number];

let posisi: TitikKoordinat;

posisi = ["X", 100]; // ✅ Valid
// posisi = ["Y", 50, 10]; // ❌ Error: Source has 3 element(s) but target allows only 2.
// posisi = [100, "X"]; // ❌ Error: Type 'number' is not assignable to type 'string' at index 0.