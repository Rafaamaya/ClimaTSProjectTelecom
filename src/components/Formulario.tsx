import React, { useState } from 'react'
import { Alert, Animated, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { useAnimation } from '../hooks/useAnimation'
import { useNavigation } from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
//import { CommonActions } from '@react-navigation/native';


type DetailscreenNavigationProp = StackNavigationProp<RootStackParams, 'WeatherDetailsScreen'>;

export const Formulario = () => {



    const { animacionOpacity, animacionEntrada, animacionSalida } = useAnimation();
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState<number | string>("");

    
    const navigation = useNavigation<DetailscreenNavigationProp>();

    const obtenerCliima = async () => {
        if (pais === "" || ciudad.trim() === "") {
            mostrarAlert();
            return;
        }
        navigation.navigate('WeatherDetailsScreen' , { ciudad, pais });
    }

    const mostrarAlert = () => {
        Alert.alert(
            'Erorr',
            'Agregar un pais o una ciudad para la busqueda',
            [{ text: 'Entendido' }]
        )
    }

    return (
        <>
            <View>
                <View>
                    {/* <Text>{Pais}</Text> */}
                    <Picker
                        onValueChange={(itemValue) => setPais(itemValue)}
                        selectedValue={pais}
                        itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                    >
                        <Picker.Item label='--Selecciones un pais--' value="" />
                        <Picker.Item label='Argentina' value="AR" />
                        <Picker.Item label='Estados Unidos' value="US" />
                        <Picker.Item label='Mexico' value="MX" />
                        <Picker.Item label='Colombia' value="CO" />
                        <Picker.Item label='Costa Rica' value="CR" />
                        <Picker.Item label='España' value="ES" />
                        <Picker.Item label='Peru' value="PE" />
                    </Picker>
                </View>
                <View>
                    <TextInput
                        value={ciudad}
                        onChangeText={setCiudad}
                        style={styles.input}
                        placeholder='Ciudad'
                        placeholderTextColor="#666"
                    />
                    {/* <Text>{Ciudad}</Text> */}
                </View>
                <TouchableWithoutFeedback
                    onPressIn={animacionEntrada}
                    onPressOut={animacionSalida}
                    onPress={obtenerCliima}>
                    <Animated.View style={{ ...styles.btnBuscar, opacity: animacionOpacity }}>
                        <Text style={styles.textBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        borderRadius:30,
    },
    btnBuscar: {
        marginTop: 20,
        marginHorizontal: 30,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 40
    },
    textBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: `uppercase`,
        textAlign: 'center',
        fontSize: 18

    }
})