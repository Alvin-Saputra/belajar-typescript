/*
Type Narrowing (secara harfiah: "mempersempit tipe") adalah proses di mana TypeScript 
secara cerdas menganalisis alur kode Anda (seperti if/else) untuk menebak dan 
mengerucutkan tipe data yang tadinya luas menjadi lebih spesifik di dalam sebuah blok kode.

*/


// contoh 1 Menggunakan typeof (Untuk Tipe Dasar)
// Ini adalah cara paling umum untuk mempersempit tipe data primitif seperti string, number, atau boolean.
function cetakID(id: string | number) {
  // Di titik ini, 'id' bisa berupa string ATAU number.
  // id.toUpperCase() // ❌ ERROR: number tidak punya toUpperCase()

  if (typeof id === "string") {
    // Di dalam blok 'if' ini, TypeScript MENGUNCI tipe 'id' hanya sebagai 'string'
    console.log(id.toUpperCase()); // ✅ VALID
  } else {
    // Karena opsinya hanya string atau number, TypeScript tahu 
    // di dalam blok 'else' ini 'id' PASTI sebuah 'number'
    console.log(id.toFixed(2)); // ✅ VALID
  }
}


//contoh 2 Pengecekan Kesamaan Asli (Equality / Literal Narrowing)
// Teknik ini sangat kuat jika digabungkan dengan Literal Types yang sudah kita bahas sebelumnya. TypeScript membaca nilai eksaknya untuk mempersempit tipe.
type ResponServer = "sukses" | "gagal";

function tanganiRespon(status: ResponServer) {
  if (status === "sukses") {
    // TypeScript tahu 'status' di sini adalah Literal Type "sukses"
    console.log("Hore! Data berhasil diproses.");
  } else {
    // TypeScript tahu 'status' di sini pasti "gagal"
    console.log("Waduh, terjadi kesalahan.");
  }
}


// 3. Menggunakan Operator in (Untuk Objek)
// Jika Anda memiliki dua objek yang berbeda, 
// Anda bisa mengecek apakah sebuah objek memiliki properti tertentu untuk 
// mempersempit tipenya.

type Burung = { nama: string; terbang: () => void };
type Ikan = { nama: string; berenang: () => void };

function gerakkanHewan(hewan: Burung | Ikan) {
  // hewan.terbang() // ❌ ERROR: Belum tentu Burung

  if ("terbang" in hewan) {
    // TypeScript tahu hanya 'Burung' yang punya properti "terbang"
    hewan.terbang(); // ✅ VALID: Tipe menyempit jadi Burung
  } else {
    hewan.berenang(); // ✅ VALID: Tipe menyempit jadi Ikan
  }
}

// 4. enggunakan Truthiness (Mengecek Null/Undefined)

// Sering kali kita memiliki variabel yang isinya bisa saja kosong (null atau undefined). 
// Kita bisa mempersempit tipenya hanya dengan mengecek apakah variabel itu "ada isinya" 
// (truthy).

function cetakPesan(pesan: string | null) {
  if (pesan) {
    // Di sini, TypeScript tahu 'pesan' TIDAK MUNGKIN null
    console.log(pesan.length); // ✅ VALID
  } else {
    console.log("Tidak ada pesan.");
  }
}