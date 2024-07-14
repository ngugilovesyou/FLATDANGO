document.addEventListener('DOMContentLoaded', ()=>{

})

const list = document.getElementById("list-movies")
const poster = document.getElementById('poster')
const title = document.getElementById('title')
const runtime = document.getElementById('runtime')
const capacity  = document.getElementById('capacity')
const showtime = document.getElementById('showtime')
const tickets_sold  = document.getElementById('tickets_sold')
const  description = document.getElementById('description')
const  button = document.getElementById('ticket-btn')

function fetchFilms(){
  fetch('http://localhost:3000/films')
  .then((resp)=>resp.json())
  .then((data)=>{
    list.innerHTML=''  
    const li = document.createElement('li')
    li
  })
}