import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({theme}) => theme.colors.line};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;
export const DateInfo = styled.View`
  width: 33%;
`;
export const DateTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;
export const DateValue = styled.Text<DateValueProps>`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  ${({selected, theme}) =>
    !selected &&
    css`
      border-bottom-color: ${theme.colors.text};
      border-bottom-width: 1px;
      padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showVerticalScrollIndicator: false,
})``;
export const Footer = styled.View`
  padding: 24px;
`;
