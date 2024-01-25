import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Home from './src/screens/Home/Home';
import { Menu } from './src/components/Menu/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

