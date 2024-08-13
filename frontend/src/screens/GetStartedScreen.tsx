import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {images} from '../constants';
import { CustomButton } from '../components';

type Props = {
  navigation: any;
};

const GetStartedScreen = (props: Props) => {


  const getStarted = () => {
   props.navigation.navigate('Login');
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-photo/vertical-banners-sales-promo_23-2150653389.jpg?t=st=1723227174~exp=1723230774~hmac=b20d7709518ad11e3e7c799bf317d2673e03fb9f515db7bdf850cdf69056affe&w=826',
      }}
      className="flex-1 w-full h-full">
      <View className="h-[60vh]" />
      <View className="px-3 pt-3 h-[40vh] shadow-md bg-black/30 w-full ">
        <Text className="text-white text-3xl text-center font-bold">
          You want Authentic, here you go
        </Text>
        <Text className="text-white text-lg font-medium text-center mt-3">
          {' '}
          Find it here, buy it now{' '}
        </Text>

        <CustomButton title='Get Started' containerStyle='my-7 py-4' handlePress={getStarted} />
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;
