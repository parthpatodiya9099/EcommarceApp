import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './app/routes/BottomTab';
import 'react-native-gesture-handler';
import { persistor, store } from './app/redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottomTab/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
