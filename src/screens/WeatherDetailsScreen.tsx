import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator';
import { useClimaData } from '../hooks/useClimaData';
import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'WeatherDetailsScreen'> { };

export const WeatherDetailsScreen = ({ route }: Props) => {

    const { climaData } = useClimaData(route.params.ciudad, route.params.pais)

    return (

        <View style={styles.container}>
            <Icon  name="sunny-outline" size={40} color="black" />
            <View style={styles.temperatureView}>
                <Text style={styles.temperatureText}>{Math.round(climaData?.main.temp as number)}</Text>
                <Text style={[styles.temperatureText, { fontSize: 38 }]}>º</Text>
            </View>
            <Text style={styles.localizationText}>{climaData?.sys.country}, {climaData?.name}</Text>
            <View style={styles.cardsView}>
                <MainCard title={"Maxima"} icon={'sunny-outline'} temperature={`${Math.round(climaData?.main.temp_max as number)}°`} backgroundColor='#38B7B8' ></MainCard>
                <MainCard title={"Minima"} icon={'partly-sunny-outline'} temperature={`${Math.round(climaData?.main.temp_min as number)}°`} backgroundColor='#CC6E30' ></MainCard>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoText}>Informacion adicional</Text>

                <View style={styles.addtionalInfo}>
                    <InfoCard title={'Estado'} variable={climaData?.weather[0].description}></InfoCard>
                    <InfoCard title={'Visibilidad'} variable={climaData?.visibility}></InfoCard>
                    <InfoCard title={'Viento'} variable={climaData?.wind.speed} ></InfoCard>
                    <InfoCard title={'Humedad'} variable={climaData?.main.humidity} ></InfoCard>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
    temperatureView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    temperatureText: {
        color: 'black',
        fontSize: 50,
    },
    cardsView: {
        color: 'white',
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    localizationText: {
        color: 'black',
    },
    info: {
        alignItems: 'center',
        borderRadius: 20,
        width: 350,
        height: 200,
        backgroundColor: '#8F8F8F',

    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    addtionalInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
