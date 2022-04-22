import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginPage(navigation) {
  return (

    <View style={styles.container}>

      <Text style={styles.mainText}>
        <Text style={styles.titleText}>SEU ZÉ</Text>
        {"\n"}
        <Text>Fazer as compras nunca foi tão fácil</Text>
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
