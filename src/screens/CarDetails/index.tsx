import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
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

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  const data = {
    color: 'black',
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />

      <Header>
        <BackButton onPress={() => {}} color="red" />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory icon={speedSvg} name="390Km/h" />
          <Accessory icon={accelerationSvg} name="3.2s" />
          <Accessory icon={forceSvg} name="800 HP" />
          <Accessory icon={gasolineSvg} name="Gasoline" />
          <Accessory icon={exchangeSvg} name="Auto" />
          <Accessory icon={peoplevg} name="2 pessoas" />
        </Accessories>

        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
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
