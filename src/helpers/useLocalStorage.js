import { useState } from "react";
import { useEffect } from "react";


export function useLocalStorage(initialValue, key) {
    const [value, setValue] = useState(
        function() {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : initialValue;
        }
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}