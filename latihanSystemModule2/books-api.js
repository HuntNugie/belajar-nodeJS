const API  = "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani"

// get data
const getData = async function(link=API){
    const data = await fetch(link).then(response=>response.json())
    return data
}

// tampilkan semua
export async function tampilSemua(clbk,link=API){
    const data = await getData(link)
    clbk(data)
}

// tampil titel
export async function tampilJudul(clbk){
    const data = await getData()
    const {books} = data
    books.forEach(el=>{
        clbk(el.title)
    })
}

