import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { useClimaData } from '../hooks/useClimaData';
import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDailyForecastDay } from '../hooks/useDailyForecastDay';
import { Daily } from '../interfaces/dailyForecastDaysInterface';

interface Props extends StackScreenProps<RootStackParams, 'WeatherDetailsScreen'> { };

export const WeatherDailyForecastDayScreen = ({ route }: Props) => {

    //const { climaData, isLoading } = useClimaData(route.params.ciudad, route.params.pais);
    const { climaDailyForecastDayData, isLoading } = useDailyForecastDay();
    const [dia, setdia] = useState <string>()

    const renderItemMenu = (item: Daily) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text >{new Date(item.dt as number * 1000).toDateString()}</Text>
                <View style={styles.cardsView}>
                    <MainCard title={"Maxima"} icon={'sunny-outline'} temperature={`${Math.round(item.temp.max as number)}°`} backgroundColor='#38B7B8' ></MainCard>
                    <MainCard title={"Minima"} icon={'partly-sunny-outline'} temperature={`${Math.round(item.temp.min as number)}°`} backgroundColor='#CC6E30' ></MainCard>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Informacion adicional</Text>
                    <View style={styles.addtionalInfo}>
                        <InfoCard title={'Estado'} variable={item.weather[0].description}></InfoCard>
                        <InfoCard title={'Visibilidad'} variable={climaDailyForecastDayData?.current.visibility}></InfoCard>
                        <InfoCard title={'Viento'} variable={item.wind_speed} ></InfoCard>
                        <InfoCard title={'Humedad'} variable={item.humidity} ></InfoCard>
                    </View>
                </View>
            </View>
        )
    }

    return (

        <View style={styles.container} >
            {isLoading
                ? (<ActivityIndicator size={100} color='red' />)
                : (<View style={styles.container}>
                    <Icon name="sunny-outline" size={40} color="black" />
                    <View style={styles.temperatureView}>
                        <Text style={styles.temperatureText}>{Math.round(climaDailyForecastDayData?.current.temp as number)}</Text>
                        <Text style={[styles.temperatureText, { fontSize: 38 }]}>º</Text>
                    </View>
                    <Text style={styles.localizationText}>{climaDailyForecastDayData?.timezone}</Text>
                    <View style={styles.cardsView}>
                        <FlatList
                            data={climaDailyForecastDayData?.daily}
                            renderItem={({ item }) => renderItemMenu(item)}
                            keyExtractor={(item) => item.dt.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop:15,
        marginHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    localizationText: {
        color: 'black',
        fontWeight:'bold'
    },
    info: {
        alignItems: 'center',
        borderRadius: 20,
        width: 300,
        height: 200,
        backgroundColor: '#8F8F8F',

    },
    addtionalInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
});