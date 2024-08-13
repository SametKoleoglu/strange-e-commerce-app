import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CheckoutScreen,
  ForgotPasswordScreen,
  GetStartedScreen,
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  PlaceOrder,
  ProductDetailsScreen,
  ProfileScreen,
  SignupScreen,
} from './src/screens';
import SplashScreen from 'react-native-splash-screen';
import {ItemDetails, ProductTypes} from './src/constants/types';
import {getItem} from './src/utils/AsyncStorage';
import {ActivityIndicator, View} from 'react-native';

export type RouteStackParamList = {
  GetStarted: undefined;
  HomeScreen: undefined;
  Login: undefined;
  Onboarding: undefined;
  PlaceOrder: {itemDetails: ItemDetails} | undefined;
  Profile: undefined;
  Signup: undefined;
  Checkout: undefined;
  ProductDetails: {itemDetails: ItemDetails} | undefined;
  ForgotPassword: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RouteStackParamList>();
  const [showOnboarded, setShowOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    SplashScreen.hide();
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');

    if (onboarded === 200) {
      setShowOnboarded(false);
    } else {
      setShowOnboarded(false);
    }
  };

  if (showOnboarded === null) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <ActivityIndicator size={'large'} color={'#F3F3F3'} />
      </View>
    );
  }

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={showOnboarded ? 'Onboarding' : 'HomeScreen'}>
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
