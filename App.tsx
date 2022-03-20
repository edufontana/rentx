import React from 'react';
import {CarDetails} from './src/screens/CarDetails';
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
import {Scheduling} from './src/screens/Scheduling';

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
      <Scheduling />
    </ThemeProvider>
  );
}
