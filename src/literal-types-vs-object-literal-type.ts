// 1. Literal Types (Nilai sebagai Tipe Data)
// Ini adalah konsep yang sudah Anda pahami dengan sempurna di pertanyaan sebelumnya. 
// Ini adalah saat kita menggunakan nilai eksak sebagai tipe data (contoh: "Budi", 42, true).

// INI Literal Type
type NamaSpesifik = "Budi";


// 2. Object Type Literal (Sintaks Penulisan Tipe)
// Di dalam spesifikasi internal TypeScript, ketika Anda mendefinisikan bentuk objek 
// menggunakan kurung kurawal { ... } secara langsung (inline) tanpa membuat interface 
// atau type terpisah, TypeScript menyebut sintaks tersebut sebagai "Object Type Literal" 
// (atau Type Literal).

// Di dokumentasi TS, cara penulisan seperti ini secara sintaks disebut "Type Literal"
let pengguna: { nama: string; umur: number };

// Kata "Literal" di sini tidak merujuk pada nilainya yang eksak, melainkan merujuk pada 
// cara penulisannya (ditulis secara harfiah/langsung di tempat, 
// tanpa menggunakan alias/wadah).


// Agar sebuah objek benar-benar memiliki nilai eksak (Literal Type sesungguhnya), 
// ia harus dikombinasikan

let penggunaEksak: { nama: "Budi"; umur: 28; aktif: true };

penggunaEksak = {
    nama:"Budi",
    umur: 28,
    aktif:true,
}

penggunaEksak.nama = "Budi";

// penggunaEksak.nama = "Udin"; -> ini akan error karena nama itu harus eksak Budi