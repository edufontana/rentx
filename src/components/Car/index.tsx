import React from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
} from './styles';

export function Car() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Details>
        <Brand>Audi</Brand>
        <Name>RS 5 Coupe</Name>

        <About>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 120</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
    </Container>
  );
}
