// const tampilData = require('./repl') // ini berfungsi untuk mengambil 1 modules di folder yang sama 

const { sayNama, sayUmur, sayLengkap } = require("./tampilakan")

// console.log(tampilData("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani"))


const tampilkan = require("./tampilakan.js");


console.log(sayNama("Nugie kurniawan"))
console.log(sayUmur(21))
console.log(sayLengkap("nugie kurniawan",21))

console.log(typeof sayNama)