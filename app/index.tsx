import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre entre en plantalla");
    getPokemons();
  }, []);
  
  const getPokemons = async () => { 'getPokemons'
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    console.log(data.results);
  };

  return (
    <View>
      <Text>MadMax</Text>
    </View>
  );
}
