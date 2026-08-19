import { useRef } from 'react';

export function useLongPress(callback, ms = 500) {
    const timerRef = useRef(null);
    return {
        onTouchStart: () => timerRef.current = setTimeout(callback, ms),
        onTouchEnd: () => clearTimeout(timerRef.current),
        onTouchMove: () => clearTimeout(timerRef.current),

    }
}