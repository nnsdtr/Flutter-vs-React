import { StatusBar } from 'expo-status-bar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>
        Seu Zé  
        {"\n"}
        <Text>Fazer as compras nunca foi tão fácil</Text>
      </Text>

      <StatusBar style="auto" />

      <Image
        style={styles.splashImage}
        source={require('./assets/images/splash_2.png')}
      />

      <TouchableOpacity style={styles.button} onPress={() => { }}>
        <View ><Text style={styles.textButton}>Continuar</Text></View>

      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: 'purple',
    borderRadius: 10,
    height: 60,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: 'white'
  },

  splashImage: {
    height: 200,
    width: 200,
  }
});
