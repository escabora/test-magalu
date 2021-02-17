import styled from 'styled-components';
import { rem } from 'polished';

import { center } from '../styles/tools';

const ContainerWrapper = styled.div`
  ${center}
  display: flex;
  width: 100%;
  max-width: ${rem('1350px')};
  flex-direction: column;
  
  @media screen and (max-width: 768px) {
    max-width: 95%;
  }
`;

export default ContainerWrapper;
