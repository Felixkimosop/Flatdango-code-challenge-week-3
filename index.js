const movies = document.getElementById("movies");
const head = document.createElement("h2");
movies.appendChild(head);

head.textContent = "Click on your favourite movie!";

const title = document.getElementById("title");
const runTime = document.getElementById("runTime");
const capacity = document.getElementById("capacity");
const showTime = document.getElementById("showtime");
let tickets = document.getElementById("tickets");
const description = document.getElementById("description");
const form = document.querySelector("#form");
const input = document.createElement("input");
input.type = "hidden";
input.className = "inputs";
form.appendChild(input);
let tickestsAvailable = document.getElementById("ticket")


fetch(" http://localhost:3000/Premiere")
  .then((res) => res.json())
  .then(function (premiere) {
    premiere.map(function (premiere) {
      const list = document.createElement("ul");
      movies.appendChild(list);
      const movieList = document.createElement("li");

      list.appendChild(movieList);

      movieList.innerHTML = `${premiere.title}`;

      movieList.addEventListener("click", showMovie);

      function showMovie(e) {
        e.preventDefault();
        const images = document.getElementById("images");

        images.src = premiere.poster;
        title.textContent = `Title: ${premiere.title}`;
        runTime.textContent = `Runtime: ${premiere.runtime}`;
        capacity.textContent = `capacity: ${premiere.capacity}`;
        showTime.textContent = `Showtime: ${premiere.showtime}`;
        tickets.textContent = premiere.tickets;
        description.textContent = `Description: ${premiere.description}`;
        tickestsAvailable.textContent = premiere.tickets_available

        


      }
    });
  });

btn.addEventListener("click", function (e) {
  e.preventDefault()

  let noOfTickets = document.getElementById("amount").value;
  

    

  if((parseInt(tickets.textContent) > parseInt(capacity.textContent))&&(parseInt(tickestsAvailable.textContent)== 0)){
    tickets.textContent = capacity.textContent
    tickestsAvailable.textContent = 0
  }
  else if((parseInt(noOfTickets) > parseInt(tickestsAvailable.textContent))&&(parseInt(tickestsAvailable.textContent)>= 0)){
    // const newTickets = parseInt(tickets.textContent) + parseInt(noOfTickets);

    alert( "You have bought more than what we have")
    // tickestsAvailable.textContent = "No more tickets"
  }
  else{
    const newTickets = parseInt(tickets.textContent) + parseInt(noOfTickets);
  tickets.textContent = newTickets;
  tickestsAvailable.textContent = parseInt(capacity.textContent) - parseInt(tickets.textContent)
    tickets.textContent = newTickets
    tickestsAvailable.textContent  = parseInt(tickestsAvailable.textContent)
  }

  

  
});


