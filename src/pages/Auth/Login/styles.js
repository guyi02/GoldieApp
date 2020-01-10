import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView.attrs({
})`
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${props => props.theme.colors.background};
`;

export const HeaderArea = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image.attrs({})`
  width: 100%;
  height: 80px;
  margin: ${metrics.baseMargin}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  height: auto;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  margin: ${metrics.baseMargin}px 0px;
  border: 1px solid ${colors.black};
  padding: ${hp(2)}px;
  border-radius: ${wp(12)};
  background-color: ${props => props.theme.colors.regular};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${props => props.clientStyle};
  justify-content: center;
  align-items: center;
  border-radius: ${wp(15)};
  margin: 10px 0;
`;

export const TextButtonConfirm = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 17px;
  font-weight: bold;
`;

export const ButtonLogout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextButtonLogout = styled.Text`
  margin: 10px 0;
  color: blue;
  font-size: 17px;
`;
