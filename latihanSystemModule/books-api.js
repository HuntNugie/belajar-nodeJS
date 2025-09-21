const API  = "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani"

const getData = async function(link){
    const response = await fetch(link)
    const resJson = await response.json();
    return resJson
}

const tampilSemua = async function(clbk){
    const data = await getData(API)
    clbk(data)
}

const tampilJudul = async function(clbk){
    const data = await getData(API)
    const {books} = data
    books.forEach(el=>{
        clbk(el.title)
    })
}
module.exports = {tampilSemua,tampilJudul}