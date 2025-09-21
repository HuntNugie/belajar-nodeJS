// core module merupakan module yang suda ada di dalam node js
// cara memanggi
// contoh fileSystem merupakan modul node yang menglola file system yang ada di laptop atau computer kita

// import modul nya terlebih dahulu
import * as fs from "fs"

// // menuliskan file
// // synchronus
try{
    fs.writeFileSync("satu.txt","Lagi sad banget hari ini");
}catch(e){
    console.log(e)
}
// asynchronus
fs.writeFile("dua.txt","Semangatin Nugie dong",(e)=>{
    console.log(e)
})

// // membca file
// // synchronus
// try{
//     const baca = fs.readFileSync("dua.txt","utf-8")
//     console.log(baca)
// }catch(e){
//     console.log(e)
// }
// // asynchronus
// fs.readFile("dua.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log(data)
// })


