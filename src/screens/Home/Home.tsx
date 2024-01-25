import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Home() {
  return(
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}
