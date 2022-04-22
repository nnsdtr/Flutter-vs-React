import React, { useRef, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
} from 'react-native';
import TextInput from './TextInput';

//import { InputOutline } from 'react-native-input-outline';
import { TouchableOpacity } from 'react-native';

export default function App() {
    return (

        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.mainText}>
                {
                    /* <Text style={styles.titleText}>SEU ZÉ</Text>
                    {"\n"}
                    <Text>Fazer as compras nunca foi tão fácil</Text> */
                }
                <Text style={styles.titleText}>Bem vindo</Text>
                {"\n"}
                <Text>Preencha os campos para fazer login.</Text>
            </Text>

            <TextInput label="Email" />
            <TextInput label="Senha" />
            {/* <Image
        style={styles.splashImage}
        source={require('./assets/images/splash_2.png')}
      /> */}

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <View ><Text style={styles.textButton}>Continuar</Text></View>

            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    button: {
        backgroundColor: 'purple',
        borderRadius: 10,
        height: 60,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        color: 'white'
    },

    splashImage: {
        height: 200,
        width: 200,
    },

    mainText: {
        textAlign: 'center',
    },

    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },

});
