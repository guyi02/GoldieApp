import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const ClientName = styled.Text`
  color: ${props => props.theme.colors.black};
`;

export const Square = styled.View`
  margin-right: 5px;
  background-color: ${props => props.bg};
  padding: 6px 10px;
`;
