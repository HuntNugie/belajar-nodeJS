import { tampilSemua,tampilJudul } from "./books-api.js";

tampilSemua((res)=>{
    console.log(res)
})

tampilSemua((res)=>{
    console.log(res)
},"http://www.omdbapi.com/?apikey=bb6e65b5&s=hantu")