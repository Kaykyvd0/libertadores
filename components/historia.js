import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './css/FolhaEstilo'; 

const His = ({ navigation }) => {
  return (
    <View style={estilo.campo}>
      <Image style={estilo.imagem} source={require('./img/liberta.png')} />
      <Text style={estilo.texto}>
        A Copa Libertadores da América ou Taça Libertadores da América (em espanhol: Copa Libertadores de América),
        oficialmente CONMEBOL Libertadores, é a principal competição de futebol entre clubes profissionais da América
        do Sul, organizada pela Confederação Sul-Americana de Futebol (CONMEBOL) desde 1960. É a competição de clubes
        mais importante do continente e um dos torneios mais prestigiados do mundo. O nome do torneio é uma homenagem
        aos principais líderes da independência das nações da América do Sul: José Artigas, Simón Bolívar, José de San
        Martín, José Bonifácio de Andrada e Silva, D. Pedro I do Brasil, Antonio José de Sucre e Bernardo O'Higgins.
        
        No formato atual, o torneio consiste em três etapas, com a primeira fase sendo iniciada geralmente no fim de janeiro.
        As seis equipes sobreviventes da primeira fase juntam-se aos outros 26 times previamente classificados na segunda, na
        qual existem oito grupos compostos por quatro equipes cada. Os dois melhores clubes de cada grupo vão para fase final
        eliminatória, sempre em jogos de ida-e-volta até as semifinais; a final, que é disputada em jogo único num local
        previamente escolhido, é disputada preferencialmente em novembro. O vencedor da Libertadores se classifica para a
        disputa da Copa do Mundo de Clubes da FIFA (como representante da CONMEBOL) e na Recopa Sul-Americana do ano seguinte.
        
        O Independiente é o recordista de títulos na competição, com sete conquistas. A Argentina é o país com o maior número
        de conquistas, com 25 títulos, enquanto o Brasil é o país com a maior diversidade de times vencedores, com um total de
        11 clubes diferentes que ergueram a taça 23 vezes. O troféu foi conquistado por 26 clubes diferentes, sendo que quinze
        ganharam o torneio mais de uma vez e sete o venceram de forma consecutiva.
      </Text>
      <Image style={estilo.imagem} source={require('./img/inde.jpg')} />
    </View>
  );
};

export default His;
