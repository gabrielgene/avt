import styled from 'styled-components';
import chevronDown from 'assets/chevron-down.svg';
import chevronUp from 'assets/chevron-up.svg';
import bath from 'assets/bath.svg';
import pool from 'assets/pool.svg';
import user from 'assets/user.svg';
import rooms from 'assets/rooms.svg';
import low from 'assets/low.svg';
import more from 'assets/more.svg';
import high from 'assets/high.svg';

type Props = {
  name:
    | 'chevronUp'
    | 'chevronDown'
    | 'bath'
    | 'pool'
    | 'rooms'
    | 'user'
    | 'low'
    | 'more'
    | 'high';
  className?: string;
};

const ICONS = {
  chevronDown,
  chevronUp,
  bath,
  pool,
  user,
  rooms,
  low,
  high,
  more,
};

const Image = styled.img`
  height: 16px;
`;

export default function Icon({ name, className }: Props) {
  return <Image className={className} src={ICONS[name]} alt={name} />;
}
