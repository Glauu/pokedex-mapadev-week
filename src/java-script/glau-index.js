const listaSelecaoPokemon = document.querySelectorAll('.pokemon')

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    
    
    pokemon.addEventListener('click', () => { 
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        
        cartaoPokemonAberto.classList.remove('aberto')
        

        const idPokemonSelecionado = pokemon.attributes.id.value
       
        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        
        const pokemonAtivoListagem = document.querySelector('.ativo')
        
        pokemonAtivoListagem.classList.remove('ativo')

        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        
        pokemonSelecionadoListagem.classList.add('ativo')
    })    

})