import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

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
        onPress={() => { alert('Pressable Funcionando'); } }
      >
        <Text style={styles.text} >🦇 Copy</Text>
      </Pressable>

    </>
  );
}