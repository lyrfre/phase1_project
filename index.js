document.addEventListener("DOMContentLoaded", ()=> {
    fetch("http://localhost:3000/artists")
    .then(response => response.json())
    .then(response => {
        featuredArtist(response["2"])
        //globalArtist = response["0"]
        response.forEach(console.log(artistCard))
    })
    // fetch("http://localhost:3000/artists/1")
    // .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    // })
})

let globalArtist

function clickEvent1(art){
    document.querySelector(".artist-card").addEventListener("click", (e) =>console.log(e))
}


function featuredArtist1(art){
//featured artist input function
    const featuredName = document.querySelector("#featured-artist-name")
    const image = document.createElement("img")
    image.className = ""
    const firstImage = document.querySelector("#first-image")
    const firstTitle = document.querySelector("#first-title")
    const firstDate = document.querySelector("#first-date")

    const secondImage = document.querySelector("#second-image")
    const secondTitle = document.querySelector("#second-title")
    const secondDate = document.querySelector("#second-date")
    
    const thirdImage = document.querySelector("#third-image")
    const thirdTitle = document.querySelector("third-title")
    const thirdDate = document.querySelector("#third-date")

    featuredName.textContent = art.name
    
    firstImage.src = art.artworks.piece1.image
    firstTitle.textContent = art.artworks.piece1.title
    firstDate.textContent = art.artworks.piece1.year

    secondImage.src = art.artworks.piece2.image
    secondTitle.textContent = art.artworks.piece2.title
    secondDate.textContent = art.artworks.piece2.year

    thirdImage.src = art.artworks.piece3.image
    thirdTitle.textContent = art.artworks.piece3.title
    thirdDate.textContent = art.artworks.piece3.year

    globalArtist = art
}

function featuredArtist(artwork){
    const artworkDiv = document.createElement("div")
    const artworkImage = document.createElement("img")
    const artworkTitle = document.createElement("p")
    const artworkDate = document.createElement("h3")

    artworkDiv.className = "featured-artwork"
    artworkImage.src = artwork.image
    artworkTitle.textContent = artwork.title
    artworkDate.textContent = artwork.year

    artworkDiv.append(artworkImage, artworkTitle, artworkDate)

    document.querySelector(".detailedWorks").appendChild(artworkDiv)
}

function artistCard(artist){
    const artistDiv = document.createElement("div")
    const artistImage = document.createElement("img")
    const artistName = document.createElement("p")
    const artistYearsAlive = document.createElement("p")
    const artistIdentity = document.createElement("p")

    artistDiv.className = "artist-card"
    artistImage.scr = artist["artist_image"]
    artistName.textContent = artist.name
    artistYearsAlive.textContent = artist.yearsAlive
    artistIdentity.textContent = artist.nationality

    artistDiv.append(artistImage, artistName, artistYearsAlive, artistIdentity)

    document.querySelector(".artist-container").append(artistDiv)

    artistImage.addEventListener("click", (e) => featuredArtist(artist, e))
}


