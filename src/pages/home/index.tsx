import styled from 'styled-components';
import Header from 'components/header';
import Empty from 'components/empty';
import HomeItem from 'components/home-item';
import Loading from 'components/home-item/loading';
import PageTitle from 'components/page-title';
import { useStore } from 'context/store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
        {loading && (
          <>
            <Loading />
            <Loading />
            <Loading />
          </>
        )}
        {count === 0 && <Empty />}
        <div>
          {homes.map((h) => (
            <HomeItem key={h.id} home={h} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
