import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/routeContainer';

const getFonts = async () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const setupFinished = () => {
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts()}
        onFinish={setupFinished()}
        onError={() => {}}
      />
    );
  } else {
    return (
      <Navigator />
    );
  }
}