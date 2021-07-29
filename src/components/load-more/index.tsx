import React from 'react';
import styled from 'styled-components';
import { Text16 } from 'components/typography';

type Props = {
  onShow: (page: number) => void;
  loading: boolean;
};

const Wrapper = styled.div`
  background: #f7f7f7;
  border-radius: 2px;
  height: 30px;
  width: 182px;
  margin: auto;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  /* margin-bottom: 55px; */
`;

const StyledText = styled(Text16)`
  color: #b3b3b3;
`;

function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const ScrollTrigger = ({ onShow, loading }: Props) => {
  const [page, setPage] = React.useState<number>(1);
  const ref = React.useRef<any>(null);
  const isVisible = useOnScreen(ref);

  React.useEffect(() => {
    if (isVisible && !loading) {
      setPage(page + 1);
      onShow(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, loading]);

  return (
    <Wrapper ref={ref}>
      <StyledText>Loading more Homes...</StyledText>
    </Wrapper>
  );
};

export default ScrollTrigger;
