import React from 'react';
import { Button } from 'react-native';

import { styles } from './styles';

export function BatButton() {
  return (
    <Button 
      accessibilityLabel='Click par gerar senha'
      title='Gerar Senha'
      onPress={() => {alert('Senha Gerada')}}
    />
  );
}