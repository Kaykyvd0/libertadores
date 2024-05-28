import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import estilo from './css/FolhaEstilo';

const Tim = ({ navigation }) => {
  return (
    <ScrollView style={estilo.campo}>
      <Text style={estilo.texto}>
        Os representantes brasileiros na Libertadores 2024 são:
      </Text>
      <Text style={estilo.texto}>
        Fluminense
      </Text>
      <Image style={estilo.imagem} source={require('./img/flu.jpg')} />

      <Text style={estilo.texto}>
        São Paulo
      </Text>
      <Image style={estilo.imagem} source={require('./img/pauli.jpg')} />
      
      
      <Text style={estilo.texto}>
        Palmeiras
      </Text>
      <Image style={estilo.imagem} source={require('./img/pal.jpg')} />

      <Text style={estilo.texto}>
        Flamengo
      </Text>
      <Image style={estilo.imagem} source={require('./img/fla.jpg')} />

      <Text style={estilo.texto}>
        Grêmio
      </Text>
      <Image style={estilo.imagem} source={require('./img/gre.jpg')} />

      <Text style={estilo.texto}>
        Atlético-MG
      </Text>
      <Image style={estilo.imagem} source={require('./img/mine.jpg')} />

      <Text style={estilo.texto}>
        Botafogo
      </Text>
      <Image style={estilo.imagem} source={require('./img/bota.jpg')} />
    </ScrollView>
  );
};

export default Tim;
