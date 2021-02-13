import React, {useEffect} from 'react';
import Navigation from './app/navegations/Navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <Navigation />;
}
