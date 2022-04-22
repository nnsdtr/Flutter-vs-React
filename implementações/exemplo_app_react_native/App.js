import { StatusBar } from 'expo-status-bar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />

      {/* <Image
        // style={styles.tinyLogo}
        source={require('./assets/images/splash_2.png')}
      /> */}

      <TouchableOpacity style={styles.button} onPress={() => { }}>
        <Text>Continuar</Text>
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
  },

  button: {
    backgroundColor: 'purple',
    borderRadius: 10,
    height: 60,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
