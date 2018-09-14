import styled from 'styled-components';

export const View = styled.div`
  width: 100%;
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'none')};
  justify-content: ${props => (props.jc ? props.jc : 'flex-start')};
  align-items: ${props => (props.ai ? props.ai : 'flex-start')};
  flex-direction: column;
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'none')};
  justify-content: ${props => (props.jc ? props.jc : 'flex-start')};
  align-items: ${props => (props.ai ? props.ai : 'flex-start')};
  flex-direction: row;
`;

export const Full = styled(View)`
  height: 100%;
`;

export const FullCenter = styled(Full)`
  justify-content: center;
  align-items: center;
`;
