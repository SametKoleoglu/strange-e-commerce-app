import {View, Text} from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};
type RootStackParamList = {
  Search: {
    query: string | undefined;
  };
};

type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;


interface SearchProps {
  route: ScreenRouteProps;
}
const SearchTab:React.FC<SearchProps> = ({route}) => {

  const {query} = route.params || {};

  return (
    <SafeAreaView>
      <Text>SearchTab</Text>
      <Text>Search for {query}</Text>
    </SafeAreaView>
  );
};

export default SearchTab;
