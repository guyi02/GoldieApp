import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  padding: 5px;
`;

export const ClientName = styled.Text`
  color: ${props => props.theme.colors.black};
`;
