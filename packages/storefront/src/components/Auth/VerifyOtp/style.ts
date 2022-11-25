import styled from 'styled-components';
import { rem } from 'polished';

export const StyledSection = styled.section`
  height: 100vh;
  padding: ${rem(70)};
  overflow-x: hidden;

  .auth-layout {
    max-width: 460px;
  }
`;

export default StyledSection;
