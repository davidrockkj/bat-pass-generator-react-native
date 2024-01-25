import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
  return(
    <View>
      <View>
      <BatLogo />
      </View>

      <Text style={{color: 'black'}}>Home</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}
