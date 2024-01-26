import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#e5bf3c',
  },
  slider:{
    width: '90%',
    height: '100%'
  },
  sliderContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#e5bf3c',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizePassword: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  }
});