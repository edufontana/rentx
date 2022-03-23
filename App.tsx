import 'react-native-gesture-handler';
import React from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';
import {Routes} from './src/routes';

export default function App() {
  const [fontsLoadead] = useFonts({
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
