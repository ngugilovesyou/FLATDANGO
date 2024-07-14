document.addEventListener('DOMContentLoaded', ()=>{
  fetchFilms()
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
    data.forEach(film=>{
      const li = document.createElement('li');
      li.textContent = film.title;
      li.classList.add('film', 'item');
      li.addEventListener('click', () => getFilmDetails(film));
      list.appendChild(li);
  });

  if (data.length > 0) {
      getFilmDetails(data[0]);
  }
});
}

const getFilmDetails = (film)=>{
  poster.src = film.poster;
  title.textContent = film.title;
  runtime.textContent = `Runtime: ${film.runtime} minutes`;
  capacity.textContent = `Capacity: ${film.capacity}`
  showtime.textContent = `Showtime: ${film.showtime}`;
  const tickets_sold = film.capacity - film.tickets_sold;
  tickets_sold.textContent =`Tickets sold: ${film.tickets_sold}`
  description.textContent = film.description;
  
   button.disabled = tickets_sold === 0;
   button.addEventListener('click',buyTicket)
}
 function buyTicket(){
  const available = film.capacity - film.tickets_sold;
        if (available > 0) {
            film.tickets_sold++;
            getFilmDetails(film);
        }
    }

     
    
 
