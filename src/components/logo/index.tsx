import useMedia from 'use-media';
import avantstaySvg from 'assets/avantstay.svg';
import avantstayIconSvg from 'assets/avantstay-icon.svg';

export default function Logo() {
  const isTablet = useMedia({ maxWidth: '900px' });

  return (
    <img
      src={isTablet ? avantstayIconSvg : avantstaySvg}
      alt="Logo avantstay"
    />
  );
}
