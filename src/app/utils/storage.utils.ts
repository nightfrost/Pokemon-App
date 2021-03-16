export function setStorage<T>(key: string, value: T): void {
    const json = JSON.stringify(value);
    const encoded = btoa(json);
    localStorage.setItem(key, encoded);
}

export function getStorage<T>(key: string): T | null {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
        const decoded = atob(storedValue);
        return JSON.parse(decoded) as T;
    }
    return null
}
