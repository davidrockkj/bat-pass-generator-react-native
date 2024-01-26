import React from "react";
import { View } from "react-native";
import styles from "./style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <BatLogo />
      </View>

      <View style={styles.inputcontainer}>
        <BatButton />
      </View>

    </View>
  )
}
