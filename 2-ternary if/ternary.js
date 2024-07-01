 let yas=21

 if (yas>18){
    console.log("oy kullanabilir")
 }
 else {
    console.log("oy kullanamaz")
 }


//  yas>18 ? console.log("oy kullanabilirsin") :console.log("oy kullanamazsınız")

yas>18 ? console.log("oy kullanabilirsin") : null

 const mesaj= yas >18 ?"oy kullan" : "oy kullanma"

console.log(mesaj)

mesaj ==="oy kullan" ?  console.log("seçim sandiğina git") : console.log("Otur evde hava sicak")

const age=16

const sonuc = age <=14 ? "Çocuk" : age<=18 ? "Ergen" :"Yetişkin"
console.log(sonuc)


let sayi=36
const result= sayi >0 ? "Pozitif":
                          sayi<0 ? "negatif":
                          "Sıfır"

console.log(result)

let maas = 4000
let yil =12
yil>10 && (maas= maas *1.5)
console.log(maas)


durum="çocuk"

age>=18 || (durum==="çocuk")

console.log(durum);