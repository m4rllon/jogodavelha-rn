import React from 'react';
import { Game } from './src/screens/Game';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Game/>
    </ThemeProvider>
  );
}
