import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

// Tipando as propriedades do componente
interface BatTextInputProps {
  password: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder='password'
      value={props.password}
      />
  );
}