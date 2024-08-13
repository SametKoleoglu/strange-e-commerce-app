import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../constants';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type CustomSearchProps = {
  placeholder?: string;
  title?: string;
  initialQuery?: string;
};

const CustomSearch: React.FC<CustomSearchProps> = ({
  placeholder,
  initialQuery,
}) => {
  type ScreenNavigationProps = StackNavigationProp<
    RootStackParamList,
    'Search'
  >;
  type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;

  const navigation = useNavigation<ScreenNavigationProps>();
  const route = useRoute<ScreenRouteProps>();

  type RootStackParamList = {
    Search: {
      query: string | undefined;
    };
  };

  const [query, setQuery] = useState('' || initialQuery);

  const handlePress = () => {
    if (query === '') {
      return Alert.alert('Error', 'Please enter a search query');
    } else {
      navigation.navigate('Search', {query});
      setQuery('');
    }
  };

  const onChangeText = (text: string) => {};

  return (
    <View className="mx-3">
      <View className="flex flex-row items-center w-full bg-white justify-between px-5 h-16 rounded-xl">
        <TouchableOpacity className="mr-5" onPress={handlePress}>
          <Image
            source={icons.search}
            className="w-7 h-7"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder || 'Search any Product'}
          value={query}
          onChangeText={(e: string) => setQuery(e)}
          className="flex-1 text-[#BBBBBB] text-lg font-regular bg-white"
          placeholderTextColor={'#BBBBBB'}
          onSubmitEditing={handlePress}
        />
        <Image source={icons.mic} className="w-7 h-7" resizeMode="contain" />
      </View>
    </View>
  );
};

export default CustomSearch;
