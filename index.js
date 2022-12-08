const movies = document.getElementById("movies")
const head = document.createElement("h2")
movies.appendChild(head)

head.textContent = "Click on your favourite movie!"

const title = document.getElementById("title")
const runTime = document.getElementById("runTime")
const capacity = document.getElementById("capacity")
const showTime = document.getElementById("showtime")
let tickets = document.getElementById("tickets")
const description = document.getElementById("description")





fetch(" http://localhost:3000/Premiere")
.then(res => res.json())
.then(function(premiere){
    console.log(premiere)

    premiere.map(function(premiere){

       
        

        const list = document.createElement('ul')
        movies.appendChild(list)
        const movieList = document.createElement("li")

        list.appendChild(movieList)


        movieList.innerHTML = `${premiere.title}`

        movieList.addEventListener("click", showMovie)

        function showMovie(e){
            
            e.preventDefault()
            const images = document.getElementById("images")

            images.src = premiere.poster
            title.textContent = `Title: ${premiere.title}`
            runTime.textContent = `Runtime: ${premiere.runtime}`
            capacity.textContent = `capacity: ${premiere.capacity}`
            showTime.textContent = `Showtime: ${premiere.showTime}`
            tickets.textContent = premiere.tickets
            description.textContent = `Description: ${premiere.description}`

        }

    
    })
    const btn = document.getElementById("btn")

btn.addEventListener("click", function(e){

    e.preventDefault()

    tickets = parseInt(tickets.value)

    tickets = tickets + 1

    
   

        
})


})

