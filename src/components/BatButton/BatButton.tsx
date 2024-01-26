import React from 'react';
import { Button, Pressable, Text } from 'react-native';

import { styles } from './styles';

export function BatButton() {
  return (
    <>
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