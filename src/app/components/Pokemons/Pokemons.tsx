import {pokemons} from '@/app/Data/Pokemons/pokemon';

export const Pokemons = () => {
    return (
        <div>
            
            <ul className='w-40'>
                {pokemons.map((pokemon) => (
                    <li className='text-black flex justify-between bg-white mb-5 w-80 text-3xl' key={pokemon.name}> 
                        <h1 className='text-blue-600 hover:text-yellow-500 cursor-pointer'> {pokemon.name}</h1>
                        <h1> {pokemon.type}</h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}