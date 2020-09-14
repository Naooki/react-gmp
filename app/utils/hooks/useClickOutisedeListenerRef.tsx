import { useCallback, useEffect, useRef } from 'react';

function useClickOutsideListenerRef<T extends HTMLElement>(
  onClose: (e: Event) => void,
) {
  const ref = useRef<T>(null);
  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(e);
      }
    },
    [onClose],
  );
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as T)) {
        onClose?.(e);
      }
    },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);
  return ref;
}

export default useClickOutsideListenerRef;
