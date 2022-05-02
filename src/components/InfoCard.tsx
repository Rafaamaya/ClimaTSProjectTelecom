import React from "react";
import { StyleSheet, Text, View } from 'react-native'


const InfoCard = (props : any) => {


    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, {color: '#adadad'}]}>{props.variable}</Text>
        </View>
    )
}
const styles = StyleSheet.create({   
    card:{
        alignItems: 'center',

        
        minWidth: 150,
      },
    text:{
        color: '#e0e0e0',
        marginVertical: 5,
        fontSize: 14,
      },
  });

export default InfoCard;