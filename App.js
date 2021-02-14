import React, {useEffect} from 'react';
import Navigation from './app/navegations/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store from './app/redux/store';

const store = Store();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
