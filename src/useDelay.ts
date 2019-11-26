import { useEffect, useState } from 'react';

const delay = (): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

export default (): boolean => {
  const [isWaiting, setIsWaiting] = useState(true);
  useEffect(() => {
    const execute = async (): Promise<void> => {
      await delay();
      setIsWaiting(false);
    };
    execute();
  }, [setIsWaiting]);
  return isWaiting;
};
