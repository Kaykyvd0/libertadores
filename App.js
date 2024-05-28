import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import Index from './components/home';
import Cadastro from './components/entrada';
import His from './components/historia';
import Top from './components/topjogadores';
import Tim from './components/times';
import Cam from './components/maiorescampeoes';

//REACT NAV
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Top Jogadores" component={Top} />
        <Stack.Screen name="Historia" component={His} />
        <Stack.Screen name="Times" component={Tim} />
        <Stack.Screen name="Maiores campeões" component={Cam} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}



