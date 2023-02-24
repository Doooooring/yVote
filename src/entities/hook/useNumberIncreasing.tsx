import { useEffect, useState } from 'react';

export function useNumberIncreasing(num: number): number {
  const [curNum, setCurNum] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (curNum < num) {
        setCurNum(curNum + 1);
      }
    }, 30);
  }, [curNum]);

  return curNum;
}
