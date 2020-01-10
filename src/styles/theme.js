import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const theme = {
  colors: {
    white: '#fff',
    regular: '#e6e6e6',
    black: '#000',
    inative: 'gray',
    active: 'yellow',

    primary: '#ffd362',
    goldiePrimary: '#ffd362',
    secondary: '#060c1f',
    goldieSecondary: '#060c1f',

    success: 'green',
    danger: 'red',
    warning: 'orange',

    transparent: 'transparent',
    blackTransparent: 'rgba(0,0,0,0.6)',
    whiteTransparent: 'rgba(255,255,255,0.3)',
  },
  fonts: {
    fontDefault: hp(2.5),
    fontLarge: hp(4),
    fontSmall: hp(1.8),
  },
  metrics: {
    baseMargin: 10,
    basePadding: 10,
    baseBorderRadius: 10,
  },
};

export default theme;
