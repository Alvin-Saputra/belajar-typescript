type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}


// 1. return tipe data primitif
// Fungsi ini WAJIB mengembalikan angka (number)
function tambah(a: number, b: number): number {
  return a + b;
}

// Fungsi ini WAJIB mengembalikan teks (string)
function sapa(nama: string): string {
  return `Halo, ${nama}!`;
}

// 2. return void
function cetakPesan(pesan: string): void {
  console.log(pesan);
  // Tidak ada 'return' di sini (atau 'return;' kosong)
}

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


// 4. Tipe Kompleks (Object, Array, Tuple)
type Pengguna = { id: number; nama: string };

// Mengembalikan sebuah Objek 'Pengguna'
function cariPengguna(id: number): Pengguna {
  return { id: id, nama: "Budi" };
}

// Mengembalikan Array of numbers
function buatDaftarAngka(): number[] {
  return [1, 2, 3, 4, 5];
}

// 5. Union Types (Tipe Gabungan)
// Bisa mengembalikan 'string' ATAU 'null'
function cariData(id: number): string | null {
  if (id === 1) {
    return "Data Ditemukan";
  }
  return null; // Jika id bukan 1, kembalikan null
}

// 6. Promise<T> (Untuk Fungsi Asinkronus)

// Fungsi async selalu mengembalikan Promise.
// Di sini, Promise pada akhirnya akan menghasilkan 'string'
async function ambilDataDariServer(): Promise<string> {
  const respon = await fetch("https://api.contoh.com/data");
  const teks = await respon.text();
  return teks;
}

// Contoh fungsi async yang tidak mengembalikan apa-apa
async function simpanData(): Promise<void> {
  await fetch("https://api.contoh.com/simpan");
  console.log("Selesai menyimpan!");
}


function tambahAngka (a: number, b: number, c?: number): void {

function tambahAngka(a: number, b: number, c?: number): void {
  console.log(a + b + (c ?? 1));
}

}