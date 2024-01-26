import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

export function BatTextInput() {
  return (
    <TextInput style={styles.input} placeholder='password' />
  );
}