//-Path: "vite-extra-react-ssr-ts/src/components/layout/Providers.tsx"
import Setup from './Setup';
import { Leva } from 'leva';
import { isDev } from '~/secure/env';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Setup>
            <Leva hidden={!isDev} />
            {children}
        </Setup>
    );
}
