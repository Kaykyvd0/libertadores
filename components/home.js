import { View, Text, TextInput, Button } from 'react-native';
import estilo from './css/FolhaEstilo';
///elemento visual
const Index = ({ navigation }) => {
  return (
    <View style={estilo.layout}>
      <Button
        style={estilo.bot}
        title="Historia"
        onPress={() => {
          navigation.navigate('Historia');
        }}
      />
      <Button
        style={estilo.bot}
        title="Top Jogadores"
        onPress={() => {
          navigation.navigate('Top Jogadores');
        }}
      />
      <Button
        style={estilo.bot}
        title="Times"
        onPress={() => {
          navigation.navigate('Times');
        }}
      />
      <Button
        style={estilo.bot}
        title="Maiores campeões"
        onPress={() => {
          navigation.navigate('Maiores campeões');
        }}
      />
      <Button
        style={estilo.bot}
        title="Cadastro"
        onPress={() => {
          navigation.navigate('Cadastro');
        }}
      />
    </View>
  );
};
export default Index;
