import styled from 'styled-components';
import Header from 'components/header';
import Empty from 'components/empty';
import HomeItem from 'components/home-item';
import Loading from 'components/home-item/loading';
import PageTitle from 'components/page-title';
import If from 'components/if-statement';
import LoadMore from 'components/load-more';
import { useStore } from 'context/store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: auto;
  margin-top: 40px;
  @media (max-width: 900px) {
    margin: 0;
    padding: 0 30px;
    width: 100%;
  }
`;

export default function Home() {
  const { homes, count, loading, onLoad } = useStore();

  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle count={count} loading={loading} />
        <If condition={loading}>
          <div>
            <Loading />
            <Loading />
            <Loading />
          </div>
        </If>
        <If condition={count === 0 && !loading}>
          <Empty />
        </If>
        <If condition={!loading}>
          <div>
            {homes.map((h) => (
              <HomeItem key={h.id} home={h} />
            ))}
            <If condition={count !== homes.length}>
              <LoadMore onShow={onLoad} loading={loading} />
            </If>
          </div>
        </If>
      </Wrapper>
    </>
  );
}
