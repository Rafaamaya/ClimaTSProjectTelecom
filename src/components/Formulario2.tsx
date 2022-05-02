import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'
import MainCard from './MainCard';
import { useClimaCoordinatesData } from '../hooks/useClimaCoordinatesData';

type DetailscreenNavigationProp = StackNavigationProp<RootStackParams, 'WeatherDetailsScreen'>;

export const Formulario2 = () => {

    const { climaData, isLoading } = useClimaCoordinatesData();
    const navigation = useNavigation<DetailscreenNavigationProp>();

    

    const obtenerCliima = async () => {
        navigation.navigate('WeatherDailyForecastDayScreen');
    }

    return (
        <View style={{ height: 380, justifyContent: 'center' }}>
            {isLoading
                ? <ActivityIndicator color='red' size={100} />
                : <TouchableOpacity style={styles.container}
                    onPress={() => obtenerCliima()}>
                    <Image
                        style={{ width: 68, height: 30, marginTop: 5 }}
                        source={{ uri: `http://openweathermap.org/img/w/${climaData?.weather[0].icon}.png` }}
                    />
                    <View style={styles.temperatureView}>
                        <Text style={styles.temperatureText}>{Math.round(climaData?.main.temp as number)}</Text>
                        <Text style={[styles.temperatureText, { fontSize: 38 }]}>º</Text>
                    </View>
                    <Text style={styles.localizationText}>{climaData?.sys.country}, {climaData?.name}</Text>
                    <View style={styles.cardsView}>
                        <MainCard title={"Maxima"} icon={'sunny-outline'} temperature={`${Math.round(climaData?.main.temp_max as number)}°`} backgroundColor='#38B7B8' ></MainCard>
                        <MainCard title={"Minima"} icon={'partly-sunny-outline'} temperature={`${Math.round(climaData?.main.temp_min as number)}°`} backgroundColor='#CC6E30' ></MainCard>
                    </View>
                </TouchableOpacity>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        borderRadius: 30,
        margin: 4,
        justifyContent: 'center',

    },
    temperatureView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    temperatureText: {
        color: 'black',
        fontSize: 40,
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
})
