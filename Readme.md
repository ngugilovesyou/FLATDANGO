WHAT IT IS:
This is a simple web application to display a list of movies, show detailed information about a selected movie, and allow users to buy tickets.

The web application uses :
    HTML
    CSS
    JAVASCRIPT
    JSON

Features:
Display a list of movies fetched from a server.
It contains detailed information about a selected movie.
Enables a user to purchase tickets for a selected movie if available.

It fetches fils from this endpoint "http://localhost:3000/films" from  the JSON server and converts the response to JSON form (making it easily readable). The data gotten from the server is then pushed to the div#film through a list item. The response from the server contains the films details:The poster,Title,Runtime, Capacity,Showtime,Ticket sold and description which is rendered when a film is selected.

The ticket available is gotten from substracting the sold ticket from the capacity required for that movie.
The website also has a button where a user can press to purchase a ticket,
   
    
   



