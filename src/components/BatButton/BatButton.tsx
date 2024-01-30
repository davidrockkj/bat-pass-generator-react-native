import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Slider from '@react-native-community/slider';

import { BatTextInput } from '../BatTextInput';
import { styles } from './styles';
import generatePassword from '../../services/passwordService';


export function BatButton() {

  // Criando um estado para a propriedade 'Password'
  const [password, setPassword] = useState('');

  // Criando a função que irá atualizar o estado da propriedade 'Password'
    function handlePasswordChange() {
      let generateToken = generatePassword(size);
      setPassword(generateToken);
    }

  type Clipboard = {
    setStringAsync: (password: string) => void;
  }

  // Criando função de copiar
  function handleCopy() {
    Clipboard.setStringAsync(password);
    alert('Password copied! 📜✅');
  }

  // Criando um Slider para definir o tamanho da senha gerada
  const [size, setSize] = useState(8);

  return (
    <>
      <BatTextInput
        password={password}
      />

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={size}
          minimumValue={8}
          maximumValue={20}
          onValueChange={ (value) => setSize(Number(value.toFixed(0))) }
          minimumTrackTintColor="#000"
          thumbTintColor='#fff'
        />
        <Text style={styles.sizePassword}>{size}</Text>
      </View>
      
      <Pressable
        style={styles.button}
        onPress={ handlePasswordChange }
      >
        <Text style={styles.text} >🦇 Generate</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={ handleCopy }
      >
        <Text style={styles.text} >📝 Copy</Text>
      </Pressable>

    </>
  );
}