import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput";

export default function Home() {
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <BatLogo />
      </View>

      <View>
        <BatTextInput />
      </View>
      
      <Text style={{color: 'black'}}>Home</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}
