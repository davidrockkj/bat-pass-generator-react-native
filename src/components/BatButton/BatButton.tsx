import React, { useState } from 'react';
import { Button, Pressable, Text } from 'react-native';

import { BatTextInput } from '../BatTextInput';
import { styles } from './styles';


export function BatButton() {

  // Criando um estado para a propriedade 'Password'
  const [password, setPassword] = useState('');


  return (
    <>
      <BatTextInput
        password={password}
      />
      
      <Pressable
        style={styles.button}
        onPress={() => { alert('Pressable Funcionando'); } }
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