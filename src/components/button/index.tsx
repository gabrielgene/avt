import styled from 'styled-components';
import { Text14 } from 'components/typography';

type Variant = 'contained' | 'outlined';

type Props = {
  onClick: () => void;
  text: string;
  type: Variant;
  className?: string;
};

const Wrapper = styled(Text14)<{ type: Variant }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  height: 36px;
  ${({ type }) => {
    if (type === 'contained') {
      return `
				border: 2px solid #022B54;
				border-radius: 3px;
				padding: 8px 25px;
				&:hover {
					border: 2px solid #53C3D0;
					color: #53C3D0;
				}
			`;
    }
  }};
`;

export default function Button({ text, type, className, onClick }: Props) {
  return (
    <Wrapper type={type} className={className} onClick={onClick}>
      {text}
    </Wrapper>
  );
}
