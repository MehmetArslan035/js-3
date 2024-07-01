// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

//! ************ IF - ELSE

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı değiştiren bazı durumlar vardır. Bunlardan biri karar yapılarıdır.
/*
if ( şart = true olduğu)
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/
// let sayi=Number(prompt("Bir sayı giriniz"))
// let sayi1=45
//  let kalan=sayi+sayi1
// console.log(kalan)
//  kalan=kalan%2
//  if(kalan===0){
//     console.log("Sayı çifttir")
//  }
// else{
// console.log("Sayı tektir")
// }


// let sinyal=prompt("Elektirik var mı (var/yok) :")

// if(sinyal=== "var") {
//     console.log("Elektirik var");
// }
// else if(sinyal==="yok") {
//     console.log("Elektirik yok")
// }
// else{
//     console.log("Geçersiz seçim!!!");
// }

// let sayi=Number(prompt("Bir sayı giriniz"))

// if (sayi<0){
//     console.log("Sayı negatiftir")
// }
// else if (sayi===0){
//     console.log("Sayı sıfırdır")
// }
// else if ( sayi>0){
//     console.log("Sayı Pozitiftir")
// }
// else{
//     console.log("Geçersiz bir sayı girdiniz")
// }

let sayi1=123
let sayi2=192
let sayi3=47
let enb=Math.max (sayi1,sayi2,sayi3)
console.log(enb)

if (sayi1>sayi2 && sayi1>sayi3){
    max = sayi1
}
else if(sayi2>sayi1 && sayi2>sayi3){
    max = sayi2
}
else if(sayi3>sayi1 && sayi3>sayi2){
    max = sayi3
}
console.log(max);