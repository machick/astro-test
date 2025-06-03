
import { Image } from "astro:assets";

const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax").then((res) => {
    return res.json()
});

const Pokemon = () => {
console.log("🚀 ~ pokemon:", pokemon)
const {name, sprites:{front_default}} = pokemon

return (
<div>
    <p>{name}</p>
    <img src={front_default} alt="" srcset="" />
</div>
)

}

export default Pokemon;