const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <a href="./about.html" id="${pokemon.number}"><img src="${pokemon.photo}"
                alt="${pokemon.name}"></a>
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


var img = window.document.getElementById(`${pokemon.photo}`)
var about = window.document.getElementsByClassName('container')

function clicar() {
    about.innerHTML = `
        <div class="card_first">
            <div class="card__photo">
                <h3>${pokemon.name}</h3>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <div class="card_types">
                ol class="types">
                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 </ol>
            </div>
        </div>

        <div class="card_second">
            <ul class="caracter list">
                <li>
                    <span>Height:</span>
                    <strong>${pokemon.height}</strong>
                </li>
                <li>
                    <span>Weight:</span>
                    <strong>${pokemon.weight}Kg</strong>
                </li>
            </ul>
        </div>

        <div class="number">
            <h3>#${pokemon.number}</h3>
        </div>

        <div class="comeback">
            <a href="/index.html">
                 <button>Voltar</button>
            </a>
        </div>
    `
}