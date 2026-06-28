/*
Tipe any di TypeScript adalah tipe data "sapu jagat" atau jalan pintas (escape hatch). 
Ketika Anda memberikan tipe any pada sebuah variabel, 
Anda secara harfiah memberi tahu compiler TypeScript: "Tutup matamu, 
jangan periksa variabel ini, biarkan saya melakukan apa pun yang saya mau."

Menggunakan any pada dasarnya mematikan seluruh fitur keamanan TypeScript pada bagian 
kode tersebut dan mengembalikannya menjadi JavaScript biasa.
*/


let dataBebas: any = "Ini teks";

// TypeScript TIDAK AKAN protes saat Anda melakukan hal-hal gila ini:
dataBebas = 100;              // ✅ Valid: Diubah jadi angka
dataBebas = { nama: "Budi" }; // ✅ Valid: Diubah jadi objek
dataBebas = true;             // ✅ Valid: Diubah jadi boolean

// BAHKAN, TypeScript membiarkan Anda memanggil fungsi yang sebenarnya tidak ada:
dataBebas.fungsiYangTidakPernahAda(); // ✅ Valid di mata TypeScript! (Tapi akan CRASH saat aplikasi dijalankan)


/*
|--------------------------------------------------------------------------
| Kapan `any` Boleh Digunakan?
|--------------------------------------------------------------------------
|
| Meskipun sangat dihindari, ada beberapa situasi spesifik di mana `any`
| terpaksa digunakan (biasanya hanya sementara):
|
| 1. Migrasi Proyek JavaScript ke TypeScript
|    Saat memindahkan proyek besar dari JavaScript ke TypeScript, belum
|    tentu semua tipe data bisa langsung didefinisikan dengan lengkap.
|    Menggunakan `any` memungkinkan aplikasi tetap dapat di-compile dan
|    berjalan sambil proses penambahan tipe dilakukan secara bertahap.
|
| 2. Library Pihak Ketiga Tanpa Tipe
|    Beberapa library JavaScript lama tidak menyediakan file deklarasi
|    tipe (.d.ts). Dalam kondisi ini, `any` dapat digunakan agar kode
|    tetap berjalan tanpa error tipe.
|
| 3. Data yang Benar-Benar Dinamis
|    Misalnya saat menerima JSON dari API eksternal dengan struktur yang
|    tidak konsisten atau sulit diprediksi. Namun, untuk kasus seperti
|    ini biasanya `unknown` lebih direkomendasikan daripada `any`.
|
|--------------------------------------------------------------------------
| Mengapa `any` Sangat Dihindari?
|--------------------------------------------------------------------------
|
| Banyak developer TypeScript menerapkan aturan ketat seperti
| `noImplicitAny` untuk meminimalkan penggunaan `any`.
|
| Bahaya menggunakan `any`:
|
| 1. Menghilangkan Manfaat Utama TypeScript
|    TypeScript dirancang untuk mendeteksi kesalahan saat proses
|    pengembangan. Dengan `any`, pemeriksaan tipe dinonaktifkan sehingga
|    bug baru akan muncul saat aplikasi dijalankan (runtime).
|
| 2. Auto-Complete Menjadi Tidak Berguna
|    Editor seperti VS Code tidak dapat memberikan saran properti atau
|    metode karena tipe data sebenarnya tidak diketahui.
|
| 3. Efek Domino
|    Jika sebuah nilai bertipe `any` menyebar ke bagian lain aplikasi,
|    keamanan tipe di area tersebut juga ikut hilang.
|
|--------------------------------------------------------------------------
| Alternatif yang Lebih Aman: `unknown`
|--------------------------------------------------------------------------
|
| Jika tipe data belum diketahui, gunakan `unknown`.
|
| Berbeda dengan `any`, TypeScript akan memaksa Anda melakukan
| pengecekan tipe (type narrowing) sebelum nilai tersebut digunakan.
|
| Contoh:
|
|   let data: unknown = getData();
|
|   if (typeof data === "string") {
|     console.log(data.toUpperCase());
|   }
|
| Dengan cara ini, keamanan tipe tetap terjaga dan risiko bug
| dapat dikurangi.
|
*/