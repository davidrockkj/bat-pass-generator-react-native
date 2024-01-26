import React from 'react';
import { Button, Pressable, Text } from 'react-native';

import { BatTextInput } from '../BatTextInput';
import { styles } from './styles';

export function BatButton() {
  return (
    <>
      <BatTextInput />
      
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