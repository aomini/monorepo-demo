import React, { useEffect, useState } from 'react';

type Props = {
  isMounted?: boolean;
  mountDelay?: number;
  unmountDelay?: number;
};

export type TransitionProps = Props;
export const useMountTransition = ({
  isMounted,
  mountDelay = 200,
  unmountDelay = 300,
}: TransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !isTransitioning) {
      setTimeout(() => setIsTransitioning(true), mountDelay);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [mountDelay, unmountDelay, isMounted, isTransitioning]);

  return isTransitioning;
};
