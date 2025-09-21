const API = 'https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani'


const getApi = (link)=>{
return fetch(link).then(response=>response.json())
}
const tampilData = async(link)=>{const data = await getApi(link)
console.log(data)
}

// const buku = tampilData(API)

// module.exports = getApi;
module.exports = tampilData;
// module.exports = API;

// console.log('aman aja kawan')