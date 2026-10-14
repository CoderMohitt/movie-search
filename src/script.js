const main = document.getElementById("main")
const ipt = document.getElementById("ipt")
const btn = document.getElementById("btn")
const loader = document.getElementById("loader")
const searchRes = document.getElementById("searchRes")
const not = document.getElementById("not")

btn.addEventListener("click", () => {
    getData(ipt.value)
})

async function getData(query) {
    loader.className = "p-10 block"
    not.className = "hidden"

    main.innerHTML = ""

    searchRes.innerHTML = ""
    const name = document.createElement("div")
    name.textContent = "showing results for " + query
    searchRes.appendChild(name)

    const res = await fetch(`https://www.omdbapi.com/?apikey=6dfdc897&s=${query}`)
    const data = await res.json()

    const movies = data.Search

    loader.className = "p-10 hidden"

    if(!movies) {
        not.className = "block p-10"
    }

    movies.forEach(movie => createCard(movie))

}   

function createCard(movie) {
    const card = document.createElement("div")
    const poster = document.createElement("img")
    poster.classList.add("image")

    const title = document.createElement("p")
    title.classList.add("title")

    poster.src = movie.Poster
    title.textContent = movie.Title
    card.appendChild(poster)
    card.appendChild(title)
    card.classList.add("poster")

    main.appendChild(card)
}   

getData(ipt.value ? ipt.value : "batman") // "", "moviename"