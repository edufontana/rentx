import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.header};
  padding-top: 96px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape};

  margin-top: 40px;
`;

export const Menssage = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_detail};
  text-align: center;

  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
`;
