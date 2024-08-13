import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ProductTypes, ItemDetails} from '../constants/types';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '../../App';

type ProductItemProps = {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  priceBeforeDeal?: number;
  priceOff?: string;
  stars?: number;
  numberOfReview?: number;
  ukSide?: number[];
  itemDetails: ItemDetails;
};

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  title,
  description,
  price,
  priceBeforeDeal,
  priceOff,
  stars,
  numberOfReview,
  itemDetails,
}) => {
  const navigation =
    useNavigation<StackNavigationProp<RouteStackParamList, 'ProductDetails'>>();
  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetails', {itemDetails});
  };

  return (
    <TouchableOpacity
      className="w-72 bg-white rounded-xl"
      onPress={navigateToProductDetail}>
      <Image source={{uri: image}} className="h-44 rounded-t-xl w-full" />
      <View className="px-3">
        <Text className="text-3xl text-center font-bold">{title}</Text>
        <Text className="text-xl text-center font-medium">{description}</Text>
        <Text className="font-bold text-2xl mt-3 text-start">
          {''}$ {price}{' '}
        </Text>
        <View className="flex flex-row items-center">
          <Text className="text-xl text-start line-through font-thin">
            $ {priceBeforeDeal}
          </Text>
          <Text className="text-red-600 font-thin text-xl ml-3">
            $ {priceOff}
          </Text>
        </View>

        <View className="flex flex-row items-center mb-5">
          <AirbnbRating
            count={stars}
            reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
            defaultRating={8}
            size={20}
          />
          <Text className="text-xl font-thin text-gray-800 self-end ml-3">
            {numberOfReview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
