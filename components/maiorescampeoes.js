import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import estilo from './css/FolhaEstilo';  

const Cam = ({ navigation }) => {
  return (
    <ScrollView style={estilo.campo}>
      <Text style={estilo.texto}>
        A Copa Libertadores da América é o principal campeonato do continente, além de ser um dos mais prestigiados do mundo. O torneio teve início em 1960 e conta com 25 diferentes clubes campeões, sendo 11 brasileiros.
        Neste sábado (04), Boca Juniors e Fluminense entraram em campo pela disputa da taça, mas o brasileiro levou a melhor e conquistou seu primeiro título da história.
      </Text>
      <Text style={estilo.texto}>
        Dentre os vencedores da Libertadores, o Brasil possui 23 títulos, enquanto a Argentina já levantou o troféu 25 vezes e é o país que mais vezes conquistou a competição.
      </Text>

      <Text style={[estilo.texto, { marginTop: 20 }]}>Clubes com mais títulos:</Text>
      <View style={estilo.lista}>
        <Text style={estilo.texto}>Independiente (ARG) - 7 Títulos</Text>
        <Text style={estilo.texto}>Boca Juniors (ARG) - 6 Títulos</Text>
        <Text style={estilo.texto}>Peñarol (URU) - 5 Títulos</Text>
        <Text style={estilo.texto}>River Plate (ARG) e Estudiantes (ARG) - 4 Títulos</Text>
        <Text style={estilo.texto}>Olimpia (PAR), Nacional (URU), São Paulo (BRA), Grêmio (BRA), Santos (BRA), Palmeiras (BRA) e Flamengo (BRA) - 3 Títulos</Text>
        <Text style={estilo.texto}>Cruzeiro (BRA), Internacional (BRA) e Atlético Nacional (COL) - 2 Títulos</Text>
        <Text style={estilo.texto}>Fluminense (BRA), Colo-Colo (CHI), San Lorenzo (ARG), Racing (ARG), Vélez Sarsfield (ARG), LDU (EQU), Argentinos Juniors (ARG), Corinthians (BRA), Atlético-MG (BRA), Vasco (BRA) e Once Caldas (COL) - 1 Título</Text>
      </View>
    </ScrollView>
  );
};

export default Cam;
