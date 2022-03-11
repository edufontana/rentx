import React from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import {Car} from '../../components/Car';

import {Container, Header, TotalCars, HeaderContent, CarList} from './styles';

export function Home() {
  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 5,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 3, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Car data={carData} />}
      />
    </Container>
  );
}
