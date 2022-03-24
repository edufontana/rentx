import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {CarDTO} from '../../dtos/CarDTO';
import {RFValue} from 'react-native-responsive-fontsize';
import {BackButton} from '../../components/BackButton';
import {ImageSlider} from '../../components/ImageSlider';
import {Accessory} from '../../components/Accessory';
import {Button} from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peoplevg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const {car} = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />

      <Header>
        <BackButton onPress={handleBack} color="red" />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              icon={speedSvg}
              name={accessory.name}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title={'Escolher período do aluguel'}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
