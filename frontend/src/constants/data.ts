import {ImageSourcePropType} from 'react-native';
import icons from './icons';
import images from './images';
import {FeaturesTypes, ProductTypes, SplashTypes, TabBarTypes} from './types';
// random number between 1 to 1000 :)
const randomNumber = () => Math.floor(Math.random() * 1000) + 1;
// set the random number to the URL
const randomImage = (): string =>
  `https://picsum.photos/${Math.floor(Math.random() * 900) + 1}/${
    Math.floor(Math.random() * 800) + 1
  }`;

const SplashData: SplashTypes[] = [
  {
    image: images.splash1,
    title: 'Choose Products',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: images.splash2,
    title: 'Make Payment',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: images.splash3,
    title: 'Get Your Order',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];
const CategoriesData: FeaturesTypes[] = [
  {
    image: randomImage(),
    title: 'Beauty',
  },
  {
    image: randomImage(),
    title: 'Fashion',
  },
  {
    image: randomImage(),
    title: 'Kids',
  },
  {
    image: randomImage(),
    title: 'Mens',
  },
  {
    image: randomImage(),
    title: 'Womans',
  },
];

// Random Title
const titles = [
  'Women Printed Kurta',
  'HRX by Hrithik Roshan',
  "IWC Schaffhausen 2021 Pilot's Watch",
  'Labbin White Sneakers',
  'Black Winter Jacket',
  'Mens Starry Printed Shirt',
  'Black Dress',
  'Pink Embroidered Dress',
  'Realme 7',
  'Black Jacket',
  'D7200 Digital Camera',
  "Men's & Boys Formal Shoes",
];

const randomTitle = (): string =>
  titles[Math.floor(Math.random() * titles.length)];

const randomPrice = (): number =>
  parseFloat((Math.floor(Math.random() * 5000) + 500).toFixed(2));

const randomPriceBeforeDeal = (): number =>
  parseFloat(
    (randomPrice() + (Math.floor(Math.random() * 1000) + 100)).toFixed(2),
  );

const randomPriceOff = (price: number, priceBeforeDeal: number): string =>
  ((1 - price / priceBeforeDeal) * 100).toFixed(2);

const randomStars = (): number => Math.random() * 5;

const randomNumberOfReview = (): number => Math.floor(Math.random() * 10000);

const ProductData: ProductTypes[] = Array.from(
  {length: 15},
  (): ProductTypes => {
    const price = randomPrice();
    const priceBeforeDeal = randomPriceBeforeDeal();
    return {
      image: randomImage(),
      title: randomTitle(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: price,
      priceBeforeDeal: priceBeforeDeal,
      priceOff: randomPriceOff(price, priceBeforeDeal),
      stars: randomStars(),
      numberOfReview: randomNumberOfReview(),
    };
  },
);
/**

 */
// TabBar data
const tabName = ['Home', 'Wishlist', 'Cart', 'Search', 'Setting'];
const TabBarData: TabBarTypes[] = [
  {
    title: tabName[0],
    image: icons.home,
    link: tabName[0],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[1],
    image: icons.home,
    link: tabName[1],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[2],
    image: icons.home,
    link: tabName[2],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
    inActiveBGColor: '#FFFFFF',
    activeBGColor: '#EB3030',
  },
  {
    title: tabName[3],
    image: icons.home,
    link: tabName[3],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[4],
    image: icons.home,
    link: tabName[4],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
];

const sizeData = [
  {
    id: 0,
    size: 6,
  },
  {
    id: 1,
    size: 7,
  },
  {
    id: 2,
    size: 8,
  },
  {
    id: 3,
    size: 9,
  },
  {
    id: 4,
    size: 10,
  },
];

interface StatusDataType {
  id: number;
  icon: ImageSourcePropType | string;
  name: string;
}

const statusData: StatusDataType[] = [
  {
    id: 0,
    icon: icons.lock,
    name: 'Nearest Store',
  },
  {
    id: 1,
    icon: icons.lock,
    name: 'VIP',
  },
  {
    id: 2,
    icon: icons.lock,
    name: 'Return Policiy',
  },
];

interface SimilarDataType {
  icon: ImageSourcePropType;
  name: string;
}

const similarData: SimilarDataType[] = [
  {
    icon: icons.eye,
    name: 'View Similar',
  },
  {
    icon: icons.components,
    name: 'Add to Compare',
  },
];

interface personalDetailsDataType {
  id: number;
  title: string;
  placeholder: string;
}

const businessData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Pincode',
    placeholder: '450116',
  },
  {
    id: 1,
    title: 'Address',
    placeholder: " 216 St Paul's Rd, ",
  },
  {
    id: 2,
    title: 'City',
    placeholder: 'London',
  },
  {
    id: 3,
    title: 'State',
    placeholder: 'N1 2LL,',
  },
  {
    id: 4,
    title: 'Country',
    placeholder: 'United Kingdom',
  },
];

const bankData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Bank Account Number',
    placeholder: '204356XXXXXXX',
  },
  {
    id: 1,
    title: 'Account Holder’s Name',
    placeholder: 'Abhiraj Sisodiya',
  },
  {
    id: 2,
    title: 'IFSC Code',
    placeholder: 'SBIN00428',
  },
];

export {
  TabBarData,
  ProductData,
  CategoriesData,
  SplashData,
  sizeData,
  statusData,
  similarData,
  businessData,
  bankData,
};
