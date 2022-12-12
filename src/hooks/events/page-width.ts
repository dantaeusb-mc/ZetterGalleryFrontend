import {useState, useEffect} from 'react';

export const pageWidth = (): number => {
  const [pageSize, setPageSize] = useState<number>(512);

  useEffect(() => {
    const handleResize = (): void => {
      // @todo: do something with hardcoded value
      setPageSize(Math.min(window.innerWidth, 512));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return pageSize;
};
