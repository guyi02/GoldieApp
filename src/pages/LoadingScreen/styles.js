import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${wp(80)};
  height: ${wp(80)};
  margin-bottom: ${props => props.theme.metrics.baseMargin * 2};
`;
export const Texto = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.fonts.fontDefault};
  color: ${props => props.theme.colors.black};
`;

export const Indicador = styled.ActivityIndicator.attrs(props => ({
  size: props.theme.fonts.fontLarge,
  color: props.theme.colors.danger,
}))``;
