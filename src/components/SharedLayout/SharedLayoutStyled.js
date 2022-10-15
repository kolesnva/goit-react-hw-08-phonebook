import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vw;
  max-width: 1280px;
  margin: auto;
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
`;
