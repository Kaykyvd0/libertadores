import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import estilo from './css/FolhaEstilo';

const Cadastro = (props) => {
  const [nome, setNome] = useState('');
  const [xnome, xNome] = useState('');
  const [time, setTime] = useState('');
  const [xtime, xTime] = useState('');

  return (
    <View style={estilo.campo}>
      <Text style={estilo.texto}>Nome:</Text>
      <TextInput
        style={estilo.input}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        keyboardType="default"
      />

      <Text style={estilo.texto}>Time:</Text>
      <TextInput
        style={estilo.input}
        onChangeText={setTime}
        placeholder="Digite seu time"
        keyboardType="default"
      />

      <Button
        title="Cadastrar"
        onPress={() => {
          xNome(nome);
          xTime(time);
        }}
      />

      <Text style={estilo.texto}>Digitou nome? {xnome}</Text>
      <Text style={estilo.texto}>Digitou time? {xtime}</Text>
    </View>
  );
};

export default Cadastro;
