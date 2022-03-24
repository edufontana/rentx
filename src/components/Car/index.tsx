import React from 'react';
import {StatusBar} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import GasolineSvg from '../../assets/gasoline.svg';
import {CarDTO} from '../../dtos/CarDTO';
import {getAccessoryIcon} from '../../utils/getAccessoryIcon';

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
  CarImage,
} from './styles';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({data, ...rest}: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
