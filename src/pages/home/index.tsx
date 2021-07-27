import styled from 'styled-components';
import Header from 'components/header';
import Empty from 'components/empty';
import HomeItem from 'components/home-item';
import PageTitle from 'components/page-title';
import { useStore } from 'context/store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin: auto;
  margin-top: 40px;
`;

export default function Home() {
  const { homes, count, loading } = useStore();

  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle count={count} loading={loading} />
        {loading && <div>Loading...</div>}
        {homes.map((h) => (
          <HomeItem key={h.id} home={h} />
        ))}
        {/* <Empty /> */}
      </Wrapper>
    </>
  );
}
