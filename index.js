document.addEventListener("DOMContentLoaded", ()=> {
    fetch("http://localhost:3000/art")
    .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(artistCard)
            })
    })

let globalArtist

function artistCard(artist){
    globalArtist = artist
    const artistDiv = document.createElement("div")
    const artistImage = document.createElement("img")
    const artistName = document.createElement("p")
    const artistYearsAlive = document.createElement("p")
    const artistIdentity = document.createElement("p")

    artistDiv.className = "artist-card"
    artistImage.src = artist["artist_image"]
    artistImage.className = "card-image"
    artistName.textContent = artist.name
    artistYearsAlive.textContent = artist.yearsAlive
    artistIdentity.textContent = artist.nationality

    artistDiv.append(artistImage, artistName, artistYearsAlive, artistIdentity)

    document.querySelector(".artist-container").append(artistDiv)

    //artistImage.addEventListener("click",  artist.artworks.forEach(artwork => featuredArtist(artwork)))
    artistImage.addEventListener("click",  ()=> featuredArtist(artist))
}

function featuredArtist(artwork){
    document.querySelector(".detailedWorks").innerHTML = ""
    console.log(artwork)
    const header = document.createElement("h1")
    header.textContent = "Notable Works:"
    document.querySelector(".detailedWorks").appendChild(header)
    artwork.artworks.forEach(art => {
        const artworkDiv = document.createElement("div")
        const artworkImage = document.createElement("img")
        artworkImage.className = "art-image"
        const artworkTitle = document.createElement("p")
        const artworkDate = document.createElement("h3")
    
        artworkDiv.className = "featured-artwork"
        artworkImage.src = art.image
        artworkTitle.textContent = art.title
        artworkDate.textContent = art.year
    
        artworkDiv.append(artworkImage, artworkTitle, artworkDate)
    
    
        document.querySelector(".detailedWorks").appendChild(artworkDiv)
    })
}

const form = document.querySelector("#create-comment-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    addComment(e.target["comment"].value)

    form.reset()
    }
   )

function addComment(text){
    console.log("we added a comment")
    console.log(text)
    let comment = document.createElement("li")
    let btn = document.createElement("btn")
    btn.addEventListener("click", deleteBtn)
    btn.textContent = "x"
    comment.textContent = text
    // console.log(commentContent)
    document.querySelector("#posted-comments").appendChild(comment)
}

 function deleteBtn(e){
  e.target.parentNode.remove()
 }
