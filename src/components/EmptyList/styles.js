import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  box-shadow: 2px 2px 2px #888;
  background-color: ${props => props.theme.colors.regular};
  padding: 5px;
  border-radius: 8px;
  margin: 5px;
`;

export const Header = styled.View`
  padding: 10px;
`;

export const MessageText = styled.Text`
  margin: 5px 0;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.colors.black};
`;
