type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    // Use Object.assign to update the found user in place. 
    Object.assign(foundUser, updates)
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)




/*

Utility Types adalah sekumpulan tipe bawaan (built-in) di TypeScript yang digunakan untuk 
memodifikasi atau menghasilkan tipe baru dari tipe yang sudah ada.

Hubungannya mirip seperti kelas kendaraan dan mobil.

Utility Types = kategori atau kelompok fitur.
Partial = salah satu anggota dari kategori tersebut.

Analogi:

Utility Types
│
├── Partial
├── Required
├── Readonly
├── Pick
├── Omit
├── Record
├── Exclude
├── Extract
├── ReturnType
├── Parameters
└── ...

Jadi ketika Anda menulis:

type UpdatedUser = Partial<User>

yang Anda gunakan adalah utility type bernama Partial.

// ---------partial-------------------
semua properti jadi opsional
type A = Partial<User>

Hasil:

{
    id?: number
    username?: string
    role?: string
}


// ---------required-----------------
Semua properti menjadi wajib.
type User = {
    id?: number
    username?: string
}

Lalu

type B = Required<User>

Hasilnya

{
    id: number
    username: string
}

------------Readonly------------------
Semua properti tidak boleh diubah.
type C = Readonly<User>
Hasil:

{
    readonly id: number
    readonly username: string
    readonly role: string
}

Sehingga

const user: C = {
    id: 1,
    username: "John",
    role: "member"
}

user.username = "Bob"

---------Pick-----------
Mengambil beberapa properti saja.
type D = Pick<User, "id" | "username">

Hasil

{
    id: number
    username: string
}

---------Omit----------
Kebalikan dari Pick.

type E = Omit<User, "role">

Hasil

{
    id: number
    username: string
}
*/