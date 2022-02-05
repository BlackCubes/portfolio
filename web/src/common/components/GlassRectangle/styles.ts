import styled from 'styled-components';

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: ${(props) => props.theme.colors.glass};
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: 12rem;
  margin-left: auto;
  margin-right: auto;

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export const GlassImage = styled.img`
  width: 100%;
`;
