import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.TouchableOpacity.attrs({})`
  box-shadow: 2px 2px 2px #888;
  background-color: ${props => props.theme.colors.white};
  padding: 5px;
  border-radius: 8px;
  margin: 5px;
`;

export const Header = styled.View`
  padding: 10px;
`;

export const RowIdentifier = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Identifier = styled.Text`
  margin: 5px 0;
  font-weight: bold;
  font-size: 22px;
  color: ${props => props.theme.colors.black};
`;

export const Client = styled.Text`
  color: ${props => props.theme.colors.inative};
  font-size: 15px;
`;

export const Body = styled.View`
  margin: 5px 0;
  padding: 10px;
`;

export const RowCredential = styled.View`
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
`;

export const Credential = styled.Text`
  margin-left: 5px;
  color: ${props => props.theme.colors.inative};
`;

export const RowUser = styled.View`
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
`;

export const UserText = styled.Text`
  margin-left: 5px;
  color: ${props => props.theme.colors.inative};
`;

export const IconCredential = styled(Icon).attrs({
  name: 'user',
  size: 17,
})`
  margin-left: 3px;
`;

export const IconUser = styled(Icon).attrs({
  name: 'laptop',
  size: 15,
})``;

export const IconArrow = styled(Icon).attrs(props => ({
  name: 'chevron-right',
  size: 25,
  color: props.theme.colors.inative,
}))``;

export const RowProduct = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QtdContainer = styled.View`
  margin: 5px 0;
  background-color: ${props => props.theme.colors.black};
  padding: 5px;
`;

export const QtdText = styled.Text`
  color: ${props => props.theme.colors.white};
`;

export const Product = styled.Text`
  margin-left: 10px;
  width: 70%;
  color: ${props => props.theme.colors.inative};
`;

export const Footer = styled.View`
  padding: 5px;
`;
export const TabArea = styled.View`
  padding: 5px;
`;

export const TabText = styled.Text`
  color: ${props => props.theme.colors.black};
`;

export const RowTab = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RowSku = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Sku = styled.Text`
  margin: 5px 0;
  padding: 5px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`;

export const ValuesArea = styled.View`
  padding: 5px;
`;
export const ValuesHeader = styled.Text`
  font-size: 17px;
  margin-bottom: 5px;
  color: black;
`;

export const RowValues = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

export const ValueText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const Value = styled.Text`
  margin-left: 5px;
  color: ${props => props.theme.colors.inative};
`;
