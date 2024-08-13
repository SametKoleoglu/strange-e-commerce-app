import {View, Text, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {SplashData} from '../constants/data';
import { setItem } from '../utils/AsyncStorage';

type Props = {
  navigation: any;
};

const pages = [
  {
    backgroundColor: '#fff',
    image: <Image source={SplashData[0].image} />,
    title: SplashData[0].title,
    subtitle: SplashData[0].description,
  },

  {
    backgroundColor: '#fff',
    image: <Image source={SplashData[1].image} />,
    title: SplashData[1].title,
    subtitle: SplashData[1].description,
  },

  {
    backgroundColor: '#fff',
    image: <Image source={SplashData[2].image} />,
    title: SplashData[2].title,
    subtitle: SplashData[2].description,
  },
];

const OnboardingScreen = (props: Props) => {

  async function handleDone(){
    props.navigation.navigate('Login');
    await setItem('onboarded', 200);
  } 

  return (
    <View className="flex-1">
      <Onboarding pages={pages} onDone={handleDone} />
    </View>
  );
};

export default OnboardingScreen;
