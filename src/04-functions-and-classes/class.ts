class Rekening {
    // untuk membuat properti menjadi read only
//    public readonly nama:string;
   public nama: string;
//    properti ini tidak bisa diakses diluar kelas tapi tetap bisa di child class
   protected umur: number;
   public saldo: number;
   private pekerjaan: string = "Designer";

    // constructor
    constructor(nama: string, umur:number, saldo?:number){
        this.nama = nama;
        this.umur = umur;

        // if(saldo){
        //     this.saldo = saldo;
        // }
        // else{
        //     this.saldo = 0;
        // }
        this.saldo = saldo ?? 0;
    }

    // menggunakan setter dna getter untuk mengakses properti yang private
    set setPekerjaan(newPekerjaan: string){
        this.pekerjaan = newPekerjaan;
    }

    get getPekerjaan():string{
        return this.pekerjaan;
    }

    deposit(jumlahDeposit: number): void {
        this.saldo = this.saldo + jumlahDeposit;
    }

    withdraw(jumlahPenarikan: number):void{
        this.saldo = this.saldo - jumlahPenarikan;
    }

    bukarekening(setoranAwal: number){

    }
}

// inheritence
class RekeningTabungan extends Rekening{
    bunga: number;

    // ketika membiat constructor dari childclass, kita perlu memanggil constructor dari baseclass dengan keyword super
      constructor(nama: string, umur:number, saldo:number, bunga:number){
        super(nama, umur, saldo)
        this.nama = nama;
        this.umur = umur;

        // if(saldo){
        //     this.saldo = saldo;
        // }
        // else{
        //     this.saldo = 0;
        // }
        this.saldo = saldo ?? 0;
        this.bunga = bunga??0;
    }

    bukarekening(setoranAwal: number): void {
        if(setoranAwal < 100000){
            throw new Error("Minimal 100rb")
        }
        this.saldo = setoranAwal
    }

}

// abstraction
interface IBunga{
    hitungBunga: (BungaSaatIni: number) =>void
}


class RekeningInvestasi extends Rekening implements IBunga{
    hitungBunga (BungaSaatIni: number){
        this.saldo = (this.saldo + BungaSaatIni)
    }

}


// encapsulation

let rekeningDwi = new Rekening("Udin", 22)
let rekeningBudi = new RekeningTabungan("Budi", 15, 10, 4)
console.log(rekeningDwi.nama)
console.log(rekeningDwi.getPekerjaan)
// console.log(rekeningBudi.umur) -> error

rekeningDwi.deposit(1000);






