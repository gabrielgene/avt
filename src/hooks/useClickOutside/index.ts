import React from 'react';

export default function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: MouseEvent) => void
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
