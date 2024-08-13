import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons, images} from '../constants';
import {CustomSearch, ProductItem} from '../components';
import {CategoriesData, ProductData} from '../constants/data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {removeItem} from '../utils/AsyncStorage';
import {ProductTypes} from '../constants/types';

type Props = {};

const HomeTab = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type RootStackParamList = {
    Setting: undefined;
    Profile: undefined;
  };

  const [products, setProducts] = useState<ProductTypes[]>([]);
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      const data = await fetch('http://192.168.1.2:4001/api/v1/products/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const response = await data.json();
      
      setProducts(response);
      console.log(products);
    };
    fetchData();
  }, [products]); // update when products items updated

  const navigateToProfile = async () => {
    navigation.navigate('Profile');
    await removeItem('onboarded');
  };

  const handleSelectCategory = () => {};

  return (
    <ScrollView
      className=""
      contentContainerStyle={{marginVertical: 50, top: -10}}
      showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View className="flex flex-row items-center justify-between mx-5">
        <Image source={icons.menu} className="w-8 h-8" resizeMode="contain" />

        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-14 h-14"
        />

        <TouchableOpacity onPress={navigateToProfile}>
          <Image
            source={icons.profile}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* SEARCH BAR */}
      <CustomSearch initialQuery="" />

      {/* FEATURES */}
      <View className="flex flex-row justify-between mx-5 my-10">
        <Text className="text-2xl font-bold mr-2">All Features</Text>
        <View className="flex flex-row gap-x-2">
          {FeaturesData.map((item: FeaturesDataProps) => (
            <View
              className=" gap-3 bg-white flex flex-row rounded-md items-center px-1"
              key={item.id}>
              <Text className="">{item.title}</Text>
              <Image source={item.image} />
            </View>
          ))}
        </View>
      </View>

      {/* CATEGORIES */}
      <View>
        <FlatList
          data={CategoriesData}
          horizontal
          contentContainerStyle={{paddingHorizontal: 20}}
          ItemSeparatorComponent={() => <View className="w-7" />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity className="flex-1" onPress={handleSelectCategory}>
              <Image
                source={{uri: item.image}}
                resizeMode="stretch"
                className="w-24 h-24 rounded-full"
              />
              <Text className="text-lg text-center font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={() => <View className="h-5" />}
          ListFooterComponent={() => <View className="h-5" />}
        />
      </View>

      {/* OFFER */}
      <View>
        <Image
          source={images.deal_off}
          resizeMode="contain"
          className="w-full mt-8"
        />
      </View>

      {/* DAILY */}
      <View className="flex flex-row bg-[#4392f9] items-center justify-center gap-x-1 rounded-xl mx-6 px-5 py-5">
        <View>
          <Text className="text-white text-xl font-semibold">
            Daily of the Deals
          </Text>
          <View className="flex flex-row items-center gap-x-1 mt-3">
            <Image
              source={icons.calender}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <Text className="text-white text-base font-medium">
              22h 23m 20s remaining{' '}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center h-12 px-2 rounded-lg border-2 border-white ">
          <Text className="text-white font-medium text-lg">View All</Text>
          <Image
            source={icons.show_all}
            resizeMode="contain"
            className="w-5 h-5"
          />
        </View>
      </View>

      {/* PRODUCTS */}
      <View className="my-5">
        <FlatList
          data={products}
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

      {/* SPECIAL OFFER */}
      <View className="flex flex-row items-center justify-between py-3 px-4 m-5 rounded-xl bg-white">
        <Image
          source={icons.offer}
          className="w-24 h-24"
          resizeMode="contain"
        />
        <View className="">
          <Text className="text-2xl font-bold">Special Offers</Text>
          <Text className="text-neutral-500 text-base w-52">
            We make sure you get the offer you need at best prices
          </Text>
        </View>
      </View>

      {/* FLAT SHOES OFFER */}
      <View className="my-5">
        <Image
          source={images.flat}
          className="self-center"
          resizeMode="contain"
        />
      </View>

      {/* TRENDING PRODUCTS */}
      <View className="flex flex-row bg-red-400 items-center justify-center gap-x-1 rounded-xl mx-6 px-5 py-5">
        <View>
          <Text className="text-white text-xl font-semibold">
            Daily of the Deals
          </Text>
          <View className="flex flex-row items-center gap-x-1 mt-3">
            <Image
              source={icons.calender}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <Text className="text-white text-base font-medium">
              22h 23m 20s remaining{' '}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center h-12 px-2 rounded-lg border-2 border-white ">
          <Text className="text-white font-medium text-lg">View All</Text>
          <Image
            source={icons.show_all}
            resizeMode="contain"
            className="w-5 h-5"
          />
        </View>
      </View>

      <View className="mb-10">
        <FlatList
          data={ProductData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="mx-3" />}
          contentContainerStyle={{padding: 20}}
          renderItem={({item}) => (
            <ProductItem
              image={item.image}
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
  );
};

export default HomeTab;

type FeaturesDataProps = {
  id: number;
  title: string;
  image: ImageSourcePropType;
};

export const FeaturesData: FeaturesDataProps[] = [
  {
    id: 1,
    title: 'Sort',
    image: icons.sort,
  },

  {
    id: 2,
    title: 'Filter',
    image: icons.filter,
  },
];
