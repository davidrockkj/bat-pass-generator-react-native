import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <BatLogo />
      </View>

      <View style={styles.inputcontainer}>
        <BatTextInput />
        <BatButton />
      </View>

      <Text style={{color: 'black'}}>Home</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}
