// module filesystem
import * as fs from "fs"
import * as readline from "readline/promises"
import { stdin as input,stdout as output } from "process"

const isi = []
const rl = readline.createInterface({input,output})
let nama = await rl.question("Masukan nama anda : ")
let noHp = await rl.question("Masukan nomor hp anda : ")
// buat file json nya
if(fs.existsSync("contact.json")){
    fs.readFile("contact.json","utf-8",(err,data)=>{
        if(err)throw err
        const obj = JSON.parse(data)
        const teks = {nama,noHp}
        
        obj.push(teks)
        fs.writeFile("contact.json",JSON.stringify(obj),(e)=>{
            console.log(e)
        })
    })
}else{
    let teks = [{nama,noHp}]
    fs.writeFile("contact.json",JSON.stringify(teks),(e)=>{
        console.log(e)
    })
}
rl.close()
