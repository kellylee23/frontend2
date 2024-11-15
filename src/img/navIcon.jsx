import { Icon } from '@iconify/react';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
  font-size: ${(props) => props.size || '24px'};
`;



export const HomeIcon = (props) => (
  <StyledIcon icon="ic:baseline-home" {...props} />
);

export const Q_StorageIcon = (props) => (
  <StyledIcon icon="material-symbols-light:home-storage-sharp" {...props} />
);

export const FaceIdIcon = (props) => (
  <StyledIcon icon="iconoir:face-id" {...props} />
);

export const PersonIcon = (props) => (
  <StyledIcon icon="ic:baseline-person" {...props} />
);