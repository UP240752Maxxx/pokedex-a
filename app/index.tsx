import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);
  
  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}> 
      <ScrollView>
        {results.map((item) => (
          <PokemonCard 
            key={item.name} 
            name={item.name} 
            url={item.url} 
          />
        ))}
      </ScrollView>
    </View>
  );
}