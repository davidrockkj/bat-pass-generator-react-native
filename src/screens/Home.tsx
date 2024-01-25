import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return(
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});