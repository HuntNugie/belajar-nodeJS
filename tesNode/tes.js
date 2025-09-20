// synchronus
// const Mahasiswa = function(id,nama){
//     this.id = id
//     this.nama = nama
// }
// const setUserSync = (id,nama)=>{
//     return new Mahasiswa(id,nama) 
// }
// const nugie = setUserSync(1,"Nugie kurniawan")
// const raka = setUserSync(2,"Raka sagraha")

// const getUserSync = ({id,nama})=>{
//     return [id,nama]
// }
// const getNameSync = function({nama}){
//     return nama
// }

// const namaNugie = getNameSync(nugie)
// const getNugie = getUserSync(nugie)
// console.log(namaNugie)
// console.log(getNugie)


// asynchronus
const data = function(link){
    return fetch(link).then(response=>response.json())
}

const AmbilData = async function(link){
    const getData = await data(link)
    console.log(getData)
}

AmbilData("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani")
