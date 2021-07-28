import MUISkeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';
import { Wrapper, Content, Divider, Info } from './index';

const Skeleton = styled(MUISkeleton)`
  border-radius: 2px;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Content>
        <Skeleton variant="rect" width={390} height={208} />
        <Info>
          <Skeleton
            style={{ marginTop: 18, marginBottom: 4 }}
            variant="rect"
            width={132}
            height={17}
          />
          <Skeleton
            style={{ marginBottom: 4 }}
            variant="rect"
            width={218}
            height={28}
          />
          <Skeleton
            style={{ marginBottom: 39 }}
            variant="rect"
            width={241}
            height={17}
          />

          <Skeleton
            style={{ marginBottom: 4 }}
            variant="rect"
            width={74}
            height={17}
          />
          <Skeleton
            style={{ marginBottom: 4 }}
            variant="rect"
            width={98}
            height={32}
          />
          <Skeleton variant="rect" width={45} height={17} />
        </Info>
      </Content>
      <Divider />
    </Wrapper>
  );
}
