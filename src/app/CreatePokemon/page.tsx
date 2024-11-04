"use client"
import Link from "next/link";
import { Title } from "../components/Header/title";
import { useState } from "react";
import { pokemons } from '@/app/Data/Pokemons/pokemon';

const Page = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Não vai reiniciar a página quando clicar em submit

        const newPokemon = { name, type };

        // Adiciona o novo Pokémon ao array (pode ser necessário persistir isso em algum lugar)
        pokemons.push(newPokemon);

        // Armazena no localStorage (opcional, se desejar persistir)
        localStorage.setItem('pokemons', JSON.stringify(pokemons));

        // Limpa os campos do formulário
        setName('');
        setType('');
    }

    return (
        <div className="bg-gray-300 h-screen w-screen">
            <Title text="Cadastrar Pokémon" />

            <form className="flex flex-col w-96 text-black" onSubmit={handleSubmit}>
                <label htmlFor="pokemonName">Nome do Pokémon:</label>
                <input 
                    type="text" 
                    id="pokemonName" 
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="Digite o nome do Pokémon"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="pokemonType">Tipo do Pokémon:</label>
                <input 
                    type="text" 
                    id="pokemonType" 
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="Digite o tipo do Pokémon"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />

                <button 
                    type="submit" 
                    className='bg-blue-800 text-white p-4 rounded-sm text-2xl hover:bg-yellow-500 hover:text-blue-800'
                >
                    Cadastrar
                </button> 
            </form>
            
            <Link href="/">
                <button 
                    className='bg-blue-800 text-white p-4 rounded-sm text-2xl hover:bg-yellow-500 hover:text-blue-800 mt-4'
                >
                    Cancelar
                </button> 
            </Link>
        </div>
    );
}

export default Page;
