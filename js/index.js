// Juft karrali
// function engKichikJuftKarrali(n) {
//     return (n % 2 == 0) ? n : n * 2 
// }
// console.log(engKichikJuftKarrali(7))

// To'rtburchak
// function findYusaAndperimetr(a, b){
//     let s = a * b
//     let p = 2 * (a + b)
//     return (s > p) ? s : p
// }
// console.log(findYusaAndperimetr(8, 4));

// Kechikkan poyezd
// function findPoezdLeft(t, T){
//     let left = t + T
//     return (left <= 24) ? left : Math.trunc(left / 24) 
// }
// console.log(findPoezdLeft(12, 1));

// MINAB funksiya
// function 

// Karralilar yigindisi
// function karrlilarYigindisi(n){
//     let sum = 0
//     for(let i = 1; i <= n; i++){
//         if(i % 15 == 0 && i % 7 == 0){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(karrlilarYigindisi(210));

// Nollar sonni
// function findNol(n, m){
//     let res = 1
//     let r = 0
//     for(let i = n; i <= m; i++){
//         res *= i
//         if(res % 5 == 0 && res % 2 == 0){
//             r++
//         }       
//     }
//     return r
// }
// console.log(findNol(3, 14)); //savolda nol bilan tugagan sonlarni qanchaligini sorayaptimi

// Tizimda jarima xisoblash
// function findMin(urunish, javob){
//     let vaqt = javob - 1
//     let jarima = urunish * 5
//     return vaqt + jarima
// }
// console.log(findMin(5, 21));

// Ali va Vali
// function findAliAndValiAge(N, K) {
//     let A = (K * N) / (K - 1)
//     let V = A / K
//     return {Ali: A, Vali: V}
// }
// console.log(findAliAndValiAge(48, 7));

// Tenglama
// function topTenglama(n) {
//     let res = []    
//     for (let a = 1; a <= Math.sqrt(n); a++) {
//         if (n % a === 0) {
//             let ab = n / a
//             for (let b = a + 1; b <= Math.sqrt(ab); b++) {  
//                 if (ab % b === 0) {
//                     let c = ab / b
//                     if (b !== c && a !== c) {  
//                         res.push([a, b, c])
//                     } else{
//                         return -1
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// }
// console.log(topTenglama(198));

// Harorat
// function findKelvinAndFarangeyt(celsius){
//     let kel = celsius + 273
//     let far = celsius * 1.80 + 32
//     return {Kelvin: kel, Farangeyt: far}
// }
// console.log(findKelvinAndFarangeyt(500));

// G'aroyib yigindi
// function findUchgaKarrali(a, b){
//     let sum = 0
//     for(let i = a; i <= b; i++){
//         if(i % 3 == 0 && i % 7 !== 0){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(findUchgaKarrali(26, 443));

// Qolganlariga umuman tushinmadim











