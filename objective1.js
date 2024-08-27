// Task 1: Obtaining API Key and Configuration

const publicKey = '5f16720cafa4084ce0053c88f5e13f3a'
const privateKey = '0f29bf8a9ad6548c1f39c922c4b5d6bfa009b0a0'

// Task 2: Fetching Characters Using Fetch API

async function fetchMarvelCharactersInfo() {
    try {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters`)
        const data = await response.json();
        return data.data.results();
    } catch (error) {
        console.log("Error", error)
    }
}

async function displayCharacters() {
    const characters = await fetchMarvelCharactersInfo();
    const charactersInfo = document.getElementById("charactersInfo");

    characters.array.forEach((character => {
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";

        characterDiv.innerHTML = `
        <h4>${character.name}</h4>
        <p>${character.description || "No description available"}</p>
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}"
        alt =${character.name} picture">
        `;

        charactersContainer.appendChild(characterDiv)
    }));
}

window.onload = displayCharacters;

// Task 3: Updating User Interface Dynamically

