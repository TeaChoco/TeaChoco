import { useSearchParams } from 'react-router';

export function useQuery(name: string): [string, (query?: string) => void] {
    const [searchParams, setSearchParams] = useSearchParams();

    const setQuery = (query?: string) => {
        const next = new URLSearchParams(searchParams);
        if (query) next.set(name, query);
        else next.delete(name);
        if (next.toString() !== searchParams.toString())
            setSearchParams(next, { preventScrollReset: true });
    };

    return [searchParams.get(name) ?? '', setQuery];
}
