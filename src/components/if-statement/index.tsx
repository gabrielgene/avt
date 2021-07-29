import React from 'react';

type Props = {
  condition: boolean;
};

export default function If({
  condition,
  children,
}: React.PropsWithChildren<Props>) {
  if (condition) {
    return <>{children}</>;
  }
  return <div />;
}
