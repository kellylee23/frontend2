import { Icon } from '@iconify/react';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
  font-size: ${(props) => props.size || '35px'};
`;



export const LeftArrow = (props) => (
    <StyledIcon icon="fe:arrow-left" {...props} />
);

export const RightArrow = (props) => (
    <StyledIcon icon="fe:arrow-right" {...props} />
);
