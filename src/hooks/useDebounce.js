import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounedValue;
}

export default useDebounce;
