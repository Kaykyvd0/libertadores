import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import estilo from './css/FolhaEstilo';  

const Top = (props) => {
  return (
    <ScrollView style={estilo.campo}>
      <Text style={estilo.texto}>
        Zico
        Para muitos, o Pelé branco. Um jogador único, que batia na bola de maneira fenomenal, ganhou destaque no final da década de 70 e brilhou nos anos 80. A Libertadores teve a sorte de vê-lo jogar. E o Flamengo, seu clube, desfrutou ao máximo a edição de 1981, aonde a equipe se consagrou campeã após vencer o Cobreloa, do Chile, na final. Neste mesmo ano o fechamento perfeito viria em Tóquio, aonde graças a magia de Zico os brasileiros levantariam o Mundial após derrotar o Liverpool.
      </Text>
      <Image style={estilo.imagem} source={require('./img/zico.jpg')} />

      <Text style={estilo.texto}>
        Neymar
        O Santos havia entrado na história da Copa Libertadores pelas mãos de Pelé, nos anos 60. Com o Rei, os brasileiros conseguiram o bicampeonato de 1962 e 1963. Demoraria bastante tempo para que o Peixe voltasse ao primeiro plano internacional, algo que aconteceu em 2011.
      </Text>
      <Image style={estilo.imagem} source={require('./img/ney.png')} />

      <Text style={estilo.texto}>
        Gabigol
        Na Libertadores 2021, Gabigol fez um gol contra o Vélez, três no Unión la Calera e dois na LDU, todos ainda pela fase de grupos da competição. Marcou outros quatro nos dois confrontos contra o Olimpia, nas quartas de final: foram dois na ida e dois na volta. O atacante ainda deixou o dele na final contra o Palmeiras.
      </Text>
      <Image style={estilo.imagem} source={require('./img/gabigol.jpg')} />

      <Text style={estilo.texto}>
        Yuri Alberto
        Estreou na Libertadores em 24 de maio, substituindo Vitor Bueno num empate em casa por 0 a 0 contra o Real Garcilaso. Depois de ganhar destaque durante a campanha de 2018, só conseguiu aparecer duas vezes sob o comando de Jorge Sampaoli em 2019.
      </Text>
      <Image style={estilo.imagem} source={require('./img/yuri.jpeg')} />
    </ScrollView>
  );
};

export default Top;
