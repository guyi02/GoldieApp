import styled from 'styled-components/native';

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
