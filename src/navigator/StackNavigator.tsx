
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WeatherDetailsScreen } from '../screens/WeatherDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { WeatherDailyForecastDayScreen } from '../screens/WeatherDailyForecastDayScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    WeatherDetailsScreen: { ciudad: string, pais: number | string },
    WeatherDailyForecastDayScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    shadowColor: 'transparent',
                },
            }}
        >
            <Stack.Screen
                name="HomeScreen"

                options={{ title: 'Home', headerStyle: { backgroundColor: '#2496cf' }, headerTitleAlign: 'center' }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="WeatherDetailsScreen"
                options={{ title: 'Clima' }}
                component={WeatherDetailsScreen}
            />
            <Stack.Screen
                name="WeatherDailyForecastDayScreen"
                options={{ title: 'Clima en los Proximos 5 dias' }}
                component={WeatherDailyForecastDayScreen}
            />
        </Stack.Navigator>
    );
}  