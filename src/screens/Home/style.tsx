import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 10,
    // backgroundColor: '#4d4d4d',
  },
  inputcontainer: {
    width: 300,	
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default styles;