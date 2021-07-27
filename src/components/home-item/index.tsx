import { Home } from 'context/types';

type Props = {
  home: Home;
};
export default function HomeItem({ home }: Props) {
  return (
    <div>
      <div>{home.title}</div>
    </div>
  );
}
