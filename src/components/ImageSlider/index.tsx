import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  ImageIndexs,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imageUrl: String[];
}

export function ImageSlider({imageUrl}: Props) {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />

      <ImageIndexs>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexs>

      <CarImageWrapper>
        <CarImage source={{uri: imageUrl[0]}} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
