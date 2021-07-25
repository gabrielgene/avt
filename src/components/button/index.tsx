import styled from 'styled-components';
import { Text14 } from 'components/typography';

export type Variant = 'contained' | 'outlined';

export const Wrapper = styled(Text14)<{ type: Variant }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
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
  }}
`;

type Props = {
  onClick: () => void;
  text: string;
  type: Variant;
  className?: string;
};

export default function Button({ text, type, className }: Props) {
  return (
    <Wrapper type={type} className={className}>
      {text}
    </Wrapper>
  );
}
