import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  testStyles?: string;
  isLoading?: boolean;
  textStyle?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyle,
  testStyles,
  isLoading,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      className={`bg-red-400 rounded-xl w-full flex flex-row justify-center items-center ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={isLoading}>
      <Text className={`text-white font-bold text-lg ${textStyle}`}>
        {title}
      </Text>

      {
        isLoading  && (
          <ActivityIndicator animating={isLoading} color={'white'} className='ml-2' />
        )
      }
    </TouchableOpacity>
  );
};

export default CustomButton;
