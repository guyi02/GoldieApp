import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.theme.colors.goldieSecondary,
}))``;
