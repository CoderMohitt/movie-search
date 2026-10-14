const main = document.getElementById("main")
const ipt = document.getElementById("ipt")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    getData(ipt.value)
})

async function getData(query) {
    main.innerHTML = ""

    const res = await fetch(`https://www.omdbapi.com/?apikey=6dfdc897&s=${query}`)
    const data = await res.json()

    const movies = data.Search

    movies.forEach(movie => createCard(movie))

}   

function createCard(movie) {
    const card = document.createElement("div")
    // card.className = "bg-red-500"
    card.textContent = movie.Title
    const poster = document.createElement("img")
    poster.src = movie.Poster
    card.appendChild(poster)
    // card.classList.add("poster")

    main.appendChild(card)
}

const a = 10
const b = 20

// console.log("value of a is", a, "value of b is", b)
// console.log(`value of a is ${a} value of b is ${b}`)

const music = document.getElementById("music")

async function  getMusic() {
    const res = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://api.freetouse.com/v3/music/tracks/all"))
    const data = await res.json()

    console.log(data)
}

getMusic()
