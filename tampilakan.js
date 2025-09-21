const sayNama = nama=>`hallo nama saya ${nama}`
const sayUmur = umur=>`umur saya ${umur} tahun`
const sayLengkap = (nama,umur)=>{
    return `hallo nama saya ${nama}, umur saya ${umur}`
}

module.exports = {sayNama,sayUmur,sayLengkap}