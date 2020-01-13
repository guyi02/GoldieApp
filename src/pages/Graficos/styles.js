import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f6f8fa;
`;

export const Content = styled.ScrollView``;

export const CardChart = styled.View`
  box-shadow: 2px 2px 2px #dede;
  background-color: #fff;
  margin: 10px 0;
`;

export const CardChartHeaderArea = styled.View`
  height: 40px;
  padding: 5px;
`;

export const CardChartHeaderText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`;
