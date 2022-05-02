import React from 'react'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Formulario } from '../components/Formulario';
import { Formulario2 } from '../components/Formulario2';

export const HomeScreen = () => {

    const ocultarTeclado = () => {
        Keyboard.dismiss();
    }

    return (
        <>
            <TouchableWithoutFeedback
                onPress={ocultarTeclado} >
                <View style={styles.app}>
                    <View style={styles.contenido}>
                        <Formulario2/>
                    </View>
                    <View style={{borderColor:'black', borderWidth:1,  margin: '2.5%', borderRadius:30, padding:10}}>
                        <Formulario />
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#2496cf',
        justifyContent: 'center'
    },
    contenido: {
        marginHorizontal: '2.5%',
    }
})
export default HomeScreen;


