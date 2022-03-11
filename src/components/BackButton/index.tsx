import React from 'react';
import {StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {BorderlessButtonProps} from 'react-native-gesture-handler';

import {Container} from './styles';

interface BackButtonProps {
  color: string;
}

interface Props extends BorderlessButtonProps {
  data?: BackButtonProps;
}

export function BackButton({data, ...rest}: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={data.color ? data.color : theme.colors.text}
      />
    </Container>
  );
}
