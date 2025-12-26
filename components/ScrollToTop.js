import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Use useLayoutEffect for an instant, non-flashing scroll
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
