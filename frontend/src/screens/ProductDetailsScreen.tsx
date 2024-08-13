import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RouteStackParamList} from '../../App';
import {icons} from '../constants';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteTabsParamList} from './HomeScreen';
import {AirbnbRating} from 'react-native-ratings';
import {ProductData, similarData, sizeData, statusData} from '../constants/data';
import {FeaturesData} from '../tabs/HomeTab';
import { ProductItem } from '../components';

type ScreenRouteProps = RouteProp<RouteStackParamList, 'ProductDetails'>;

type ProductDetailsProps = {
  route: ScreenRouteProps;
};

const ProductDetailsScreen: React.FC<ProductDetailsProps> = ({route}) => {
  const {itemDetails} = route.params || {};

  const navigation =
    useNavigation<StackNavigationProp<RouteTabsParamList, 'Cart'>>();

  return (
    <View className="pt-16 px-3">
      {/* HEADER */}
      <View className="flex flex-row justify-between items-center mx-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.next1} className="rotate-180 w-8 h-8" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Cart', {
              itemDetails,
            })
          }>
          <Image source={icons.cart} className="w-7 h-7" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{flexGrow: 1, marginBottom: '30%'}}
        showsVerticalScrollIndicator={false}>
        {/* IMAGE SLIDER */}
        <View className="mt-5">
          <Image
            source={{uri: itemDetails?.image[0]}}
            className="
        h-64 rounded-2xl "
          />
        </View>

        {/* SIZE UK */}
        <View className="">
          <Text className="text-lg font-bold">Size : 8UK</Text>
          <View className="flex flex-row mt-5 gap-x-5 items-center">
            {sizeData.map(item => (
              <View
                key={item.id}
                className="bg-red-100 py-1 px-2 rounded-lg border border-red-500">
                <Text className="text-red-600 text-lg font-medium">
                  {item.size} uk
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* DETAILS */}
        <View className="mt-5">
          <Text className="text-2xl font-bold mt-5">{itemDetails?.title}</Text>
          <Text className="text-neutral-500 font-semibold text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            animi.
          </Text>

          <View className="flex flex-row items-center mb-3">
            <AirbnbRating
              count={itemDetails?.stars}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              defaultRating={3}
              size={23}
            />
            <Text className="text-xl font-semibold text-gray-800 self-end ml-2">
              {' '}
              {itemDetails?.numberOfReview}{' '}
            </Text>
          </View>
          <View className="flex flex-row items-center gap-x-3 my-3">
            <Text className="font-bold text-2xl text-start">
              {''}${itemDetails?.price}{' '}
            </Text>

            <Text className="text-xl line-through font-thin">
              {' '}
              $ {itemDetails?.priceBeforeDeal}{' '}
            </Text>
            <Text className="text-red-600 font-thin text-xl ml-3">
              {' '}
              $ {itemDetails?.priceOff}{' '}
            </Text>
          </View>

          <View className="mt-3">
            <Text className="text-xl font-semibold ">Product Details</Text>
            <Text className="text-md font-medium text-neutral-400">
              {itemDetails?.description}
            </Text>
          </View>
        </View>

        {/* STATUS */}
        <View className="flex flex-row items-center gap-x-3 mt-5">
          <FlatList
            data={statusData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            renderItem={({item}) => (
              <View
                key={item.id}
                className="flex flex-row bg-transparent border py-1 px-2 rounded-lg border-neutral-500 ">
                <Image
                  source={item.icon}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-neutral-400 font-semibold text-md">
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>

        {/* GO TO CART / BUY NOW */}
        <View className="flex flex-row items-center justify-around my-5">
          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image
                source={icons.cart_circle}
                className="w-11 h-11"
                resizeMode="contain"
              />
            </View>

            <View className="bg-blue-600 py-2 px-5 -ml-4 rounded-xl z-10">
              <Text className="text-white font-medium text-xl">Go To Cart</Text>
            </View>
          </View>

          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image
                source={icons.buy}
                className="w-11 h-11"
                resizeMode="contain"
              />
            </View>

            <View className="bg-green-600 py-2 px-5 -ml-4 rounded-xl z-10">
              <Text className="text-white font-medium text-xl">Buy Now</Text>
            </View>
          </View>
        </View>
        {/* DELIVERY IN */}
        <View className="bg-red-400 px-3 py-3 my-5">
          <Text className="text-lg">Delivery in</Text>
          <Text className="text-2xl font-bold ">1 day</Text>
        </View>

        {/* VIEW SIMILAR */}
        <View className="flex flex-row items-center justify-between my-3">
          <FlatList
            data={similarData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            renderItem={({item, index}) => (
              <View
                key={index}
                className="bg-white py-2 px-3 border border-neutral-200 rounded-lg flex flex-row gap-x-2">
                <Image
                  source={item.icon}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
                <Text className="text-xl font-medium">{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* SIMILAR TO */}

        <View className="my-5">
          <Text className="text-2xl font-bold text-start">Similar To</Text>
          <View className="flex flex-row justify-around my-5">
            <Text className="text-2xl font-bold ">200+ Items</Text>
            <View className="flex flex-row gap-x-2">
              {FeaturesData.map(item => (
                <View
                  className=" gap-3 bg-white flex flex-row rounded-md items-center px-1"
                  key={item.id}>
                  <Text className="">{item.title}</Text>
                  <Image source={item.image} />
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* SIMILAR PRODUCTS */}

        <View className="">
        <FlatList
          data={itemDetails ? [itemDetails] : []}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="mx-3" />}
          contentContainerStyle={{padding: 20}}
          renderItem={({item}) => (
            <ProductItem
              image={item.image[0]}
              title={item.title}
              description={item.description}
              price={item.price}
              priceBeforeDeal={item.priceBeforeDeal}
              priceOff={item.priceOff}
              stars={item.stars}
              numberOfReview={item.numberOfReview}
              itemDetails={item}
            />
          )}
        />
      </View>       

      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
