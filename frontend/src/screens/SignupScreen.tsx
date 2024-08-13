import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, FormField} from '../components';
import {icons} from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  navigation: any;
};

const SignupScreen = (props: Props) => {
  // STATES
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  type RootStackParamList = {
    ForgotPassword: undefined;
    Signup: undefined;
  };

  const handleForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {};

  const handleSignInWithProvider = () => {};

  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-5">
      <Text className="text-3xl font-bold text-start">
        Create An {'\n'} Account
      </Text>
      <View>
        <FormField
          title="Email"
          value={form.email}
          setError={setEmailError}
          error={emailError}
          placeholder="Email"
          handleChangeText={(e: any) => {
            setEmailError('');
            setForm({...form, email: e});
          }}
        />

        <View>
          <FormField
            title="Password"
            value={form.password}
            setError={setPasswordError}
            error={passwordError}
            placeholder="Password"
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({...form, password: e});
            }}
          />

          <FormField
            title="Password"
            value={form.confirmPassword}
            setError={setPasswordError}
            error={passwordError}
            placeholder="Confirm Password"
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({...form, confirmPassword: e});
            }}
          />

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-red-500 text-md font-medium self-end">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* SUBMIT BUTTON */}
        <CustomButton
          title="Login"
          handlePress={handleLogin}
          isLoading={isSubmitting}
          containerStyle="mt-10 py-3"
        />

        {/* OR CONTAINER WITH */}
        <View className="mt-5 self-center">
          <Text className="text-gray-700 text-lg self-center ">
            {' '}
            - Or Continue with -{' '}
          </Text>
          <View className="flex flex-row items-center gap-3 mt-5 justify-between">
            {ContinueWithData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={handleSignInWithProvider}
                className="rounded-full p-2">
                <Image
                  source={item.image}
                  className=" w-10 h-10"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View className="flex-row my-8">
            <Text className="text-gray-700 text-lg self-center">
              {' '}
              Create An Account{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text className="text-red-500 text-lg font-bold underline self-center">
                {' '}
                Sign Up{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

type ContinueWithType = {
  image: ImageSourcePropType | undefined;
};

const ContinueWithData: ContinueWithType[] = [
  {
    image: icons.google,
  },
  {
    image: icons.apple,
  },
  {
    image: icons.facebook,
  },
];
