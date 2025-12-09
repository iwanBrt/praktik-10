import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 15px;
  background-color: #fff3cd;
  border-radius: 6px;
  border: 1px solid #ffeaa7;
`;

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'primary' ? '#fd7e14' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;

const StyledText = styled.p`
  color: #856404;
  font-weight: bold;
  margin-top: 10px;
`;

function StyledComponents() {
  return (
    <StyledContainer>
      <StyledButton variant="primary">
        Primary Styled
      </StyledButton>
      <StyledButton>
        Default Styled
      </StyledButton>
      <StyledText>
        This uses Styled Components (CSS-in-JS)
      </StyledText>
    </StyledContainer>
  );
}

export default StyledComponents;