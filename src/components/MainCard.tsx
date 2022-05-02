import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native'
/* import { Feather } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons' */


import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string,
  icon: string,
  temperature: string,
  backgroundColor: string
}

const MainCard = ({ title, icon, temperature, backgroundColor }: Props) => {

  const MiIcon = () => {

    return (
      <Icon style={styles.cardIcon} name={icon} size={40} color="white" />
    )
  }

  return (
    <View style={[styles.card, { backgroundColor: backgroundColor }]}>
      <Text style={styles.cardHourText}>{title}</Text>
      <MiIcon></MiIcon>
      <Text style={styles.cardTemparatureText}>{temperature}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    width: 130,
    height: 210,

  },
  cardHourText: {
    color: 'white',
    margin: 15,
    fontSize: 20,
  },
  cardTemparatureText: {
    color: 'white',
    margin: 15,
    fontSize: 20,
  },
  cardIcon: {
    color: 'white',
    margin: 15
  },
});

export default MainCard;