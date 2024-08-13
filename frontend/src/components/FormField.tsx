import {
  View,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
  Easing,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../constants';

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  setError?: (error: string) => void;
  error?: string;
  [key: string]: any;
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  setError,
  error,
  ...props
}) => {
  // STATES
  const [showPassword, setShowPassword] = useState(false);
  const [shakeAnimation] = useState(new Animated.Value(0));

  // FUNCTIONS
  const shake = () => {
    shakeAnimation.setValue(0);
    Animated.timing(shakeAnimation, {
      toValue: 4,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => {
      setTimeout(() => {
        setError?.('');
      }, 3000);
    });
  };

  useEffect(() => {
    if (error) {
      shake();
    }
  }, [error]);

  const getIconSource = () => {
    if (title === 'Password') {
      return icons.lock;
    } else if (title === 'Email') {
      return icons.mail;
    } else if (title === 'User') {
      return icons.user;
    }
  };

  return (
    <View className={otherStyles}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: shakeAnimation.interpolate({
                inputRange: [0, 1, 2, 3, 4],
                outputRange: [0, -10, 10, -10, 0],
              }),
            },
          ],
        }}
        className={`flex-row items-center rounded-xl w-full h-16 my-5 px-4 bg-gray-200 border-2 border-black-300 focus:border-black-200 ${
          error ? 'border border-red-500' : ''
        } `}>
        {/* ICON */}
        <Image
          source={getIconSource()}
          className="w-6 h-6 mr-3"
          resizeMode="contain"
        />
        {/* TEXT INPUT */}
        <TextInput
          className="flex-1 font-semibold"
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={'#676767'}
          secureTextEntry={title === 'Password' && !showPassword}
          onBlur={() => error && shake()}
          {...props}
        />

        {/* EYE SWITCH  */}
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </Animated.View>

      {/* DISPLAY THE ERROR HERE IF THERE... */}
      {error && (
        <Animated.View
          className={`text-red-500 font-regular text-sm mt-3 self-center`}>
          {error}
        </Animated.View>
      )}
    </View>
  );
};

export default FormField;
