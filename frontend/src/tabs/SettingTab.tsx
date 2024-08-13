import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../constants';
import {CustomButton, CustomWrapper, DetailsItem} from '../components';
import {bankData, businessData} from '../constants/data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '../../App';

type Props = {};

const SettingTab = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditPic = () => {  }


  return (
    <CustomWrapper>
      <View className="pt-16 mb-5 px-3">
        {/* IMAGE PROFILE */}
        <View className="flex items-center justify-center">
          <Image
            source={icons.profile_edit}
            className="w-52 h-52 rounded-full"
          />
          <TouchableOpacity className="p-2 border-white border rounded-full bg-blue-500 absolute bottom-2 right-[31%] items-center justify-center" onPress={handleEditPic}>
            <Image source={icons.pen} className="w-5 h-5" />
          </TouchableOpacity>
        </View>

        {/* PERSONAL DETAILS */}
        <View className="mt-5">
          <Text className="text-2xl font-bold">Personal Details</Text>
          <FlatList
            data={personalDetailsData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View className="h-px w-full my-5 bg-black" />

        {/* BUSINESS INFO */}
        <View className="mt-4">
          <Text className="text-2xl font-bold">Personal Details</Text>
          <FlatList
            data={businessData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View className="h-px w-full my-5 bg-black" />

        {/* BANK ACCOUNT DETAILS */}
        <View className="my-4">
          <Text className="text-2xl font-bold">Bank Account Details</Text>
          <FlatList
            data={bankData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* SAVE CHANGES */}
        <CustomButton
          title="Save Changes"
          containerStyle="py-4"
          handlePress={() => {}}
        />
      </View>
    </CustomWrapper>
  );
};

export default SettingTab;

interface personalDetailsDataType {
  id: number;
  title: string;
  placeholder: string;
}

const personalDetailsData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Email Address',
    placeholder: 'Email Address',
  },
  {
    id: 1,
    title: 'Password',
    placeholder: 'Password',
  },
];
