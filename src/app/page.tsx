
import { ButtonsRoutes } from "./components/Buttons/buttons";
import { Header } from "./components/Header/title";
import { Pokemons } from "./components/Pokemons/Pokemons";

const Page = () => {
  return(
    <div className="bg-gray-300 h-screen w-screen">
        <Header/>
        <Pokemons/>
        <ButtonsRoutes rout="./CreatePokemon" content="Cadastrar Novo Pokemon"/>
    </div>
  );
}

export default Page;