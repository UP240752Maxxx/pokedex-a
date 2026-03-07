import React from 'react';
import { Image, Text, View } from 'react-native';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const id = url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View>
      <Image 
        source={{ uri: imageUrl }} 
        style={{ width: 100, height: 100 }} 
      />
      <Text>{name}</Text>
    </View>
  );
};

export default PokemonCard;