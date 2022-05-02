import { useRef } from "react";
import { Animated } from "react-native";


export const useAnimation = () => {

  const animacionOpacity = useRef(new Animated.Value(1)).current;

  const animacionEntrada = () => {
    Animated.timing(animacionOpacity, {
      toValue: 0.2,
      duration: 100,
      useNativeDriver: true
    }).start()
  }

  const animacionSalida = () => {
    Animated.timing(animacionOpacity, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: true
    }).start()
  }

  return {
    animacionOpacity,
    animacionEntrada,
    animacionSalida
  }
}

