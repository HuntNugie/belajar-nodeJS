// import module
const books = require("./books-api")

books.tampilSemua((res)=>{
    console.log(res)
})
books.tampilJudul((res)=>{
    console.log(res)
})
