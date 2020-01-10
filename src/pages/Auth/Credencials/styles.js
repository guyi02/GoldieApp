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
  background-color: ${props => props.theme.colors.goldieSecondary};
`;

export const HeaderArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image.attrs({})`
  width: ${wp(35)};
  height: ${wp(35)};
  margin: ${metrics.baseMargin}px;
`;

export const Form = styled.View`
  height: auto;
  justify-content: center;
  padding: ${metrics.basePadding}px;
`;

export const InputText = styled.TextInput.attrs(props => ({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
}))`
  border: 1px solid ${colors.black};
  padding: ${hp(2)}px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.regular};
  border-radius: ${wp(12)};
  color: ${props => props.theme.colors.goldieSecondary};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${props => props.theme.colors.goldiePrimary};
  justify-content: center;
  align-items: center;
  border-radius: ${wp(15)};
  margin: 10px 0;
`;

export const TextButtonConfirm = styled.Text`
  color: ${props => props.theme.colors.goldieSecondary};
  font-size: 17px;
  font-weight: bold;
`;
