import { useEffect, useState } from 'react';

export function useAnimationEnd(state: boolean) {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setIsEnd(true);
      }, 500);
    }
  }, [state]);

  return isEnd;
}
