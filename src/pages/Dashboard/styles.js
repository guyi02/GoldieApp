import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderArea = styled.View`
  height: auto;
  padding: 0 5px;
`;

export const RowHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-left: 5px;
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  font-weight: bold;
`;

export const LogoImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RowItems = styled.ScrollView``;

export const ButtonTab = styled.TouchableOpacity`
  margin: 5px;
  padding: 5px 15px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.active
      ? props.theme.colors.goldieSecondary
      : props.theme.colors.white};
`;

export const TextBtnTab = styled.Text`
  color: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.black};
  ${props => (props.active ? 'font-weight: bold' : null)};
  font-size: 14px;
`;

export const Content = styled.ScrollView`
  background-color: #f6f8fa;
  flex: 1;
  padding: 10px;
`;
