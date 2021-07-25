import chevronDown from 'assets/chevron-down.svg';
import chevronUp from 'assets/chevron-up.svg';

type Props = {
  name: 'chevronUp' | 'chevronDown';
  className?: string;
};

const ICONS = {
  chevronDown,
  chevronUp,
};

export default function Icon({ name, className }: Props) {
  return (
    <img
      className={className}
      style={{ height: 16 }}
      src={ICONS[name]}
      alt={name}
    />
  );
}
