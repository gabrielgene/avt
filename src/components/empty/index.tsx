import Button from 'components/button';
import { Text16 } from 'components/typography';
import satelliteSvg from 'assets/satellite.svg';
import styled, { keyframes } from 'styled-components';

export const float = keyframes`
  0% { transform: translatey(0px); }
  50% { transform: translatey(-20px); }
  100% { transform: translatey(0px); }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin-top: 260px;
  margin-bottom: 40px;
  animation: ${float} 4s ease-in-out infinite;
`;

const StyledButton = styled(Button)`
  width: 211px;
  margin-top: 30px;
  justify-content: center;
  color: #53c3d0;
  border-color: #53c3d0;

  &:hover {
    border-color: #1c5d9f;
    color: #1c5d9f;
  }
`;

export default function Empty() {
  return (
    <Wrapper>
      <Image src={satelliteSvg} alt="Satellite" />
      <Text16>Oops! We haven’t found anything matching your search.</Text16>
      <Text16>Try something else or reset the filters to see all homes.</Text16>
      <div>
        <StyledButton
          onClick={() => {}}
          type="contained"
          text="See all homes"
        />
      </div>
    </Wrapper>
  );
}
