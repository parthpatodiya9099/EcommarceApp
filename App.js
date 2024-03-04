import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './app/routes/BottomTab';
import 'react-native-gesture-handler';
import { persistor, store } from './app/redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './app/cointener/SplashScreen';


export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplashScreen(false)
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {
            showSplashScreen?<SplashScreen/>:<BottomTab/>
          }
          {/* <SplaceScreenTask/> */}
          {/* <Otp/> */}
          {/* <Task />   */}
          {/* <Login2/> */}
          {/* <Login22/>  */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
