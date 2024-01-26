import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { BatTextInput } from '../BatTextInput';
import { styles } from './styles';
import generatePassword from '../../services/passwordService';


export function BatButton() {

  // Criando um estado para a propriedade 'Password'
  const [password, setPassword] = useState('');

  // Criando a função que irá atualizar o estado da propriedade 'Password'
    function handlePasswordChange() {
      let generateToken = generatePassword();
      setPassword(generateToken);
    }

  type Clipboard = {
    setStringAsync: (password: string) => void;
  }

  // Criando função de copiar
  function handleCopy() {
    Clipboard.setStringAsync(password);
  }

  return (
    <>
      <BatTextInput
        password={password}
      />
      
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
        <Text style={styles.text} >🦇 Copy</Text>
      </Pressable>

    </>
  );
}