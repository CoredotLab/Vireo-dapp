import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-family: 'quicksand';
  font-size: 22px;
  font-weight: 350;
  padding-left: 650px;
  padding-right: 650px;
  padding-top: 75px;
  position: relative;
  z-index: 1;
`;

export const StyledMenuItem = styled.div`
  cursor: pointer;
  color: ${props => (props.active ? 'green' : 'white')};
`;

export const GreenContainer = styled.div`
  background: rgba(222, 255, 180, 0.26);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 58px;
  z-index: 1;
`;