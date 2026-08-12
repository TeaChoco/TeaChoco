//-Path: "TeaChoco-Portfolio/client/src/components/3d/Background.tsx"
import Screen from './Screen';

export default function Background() {
    return (
        <div className='fixed inset-0 w-full h-full -z-10 bg-bg-light dark:bg-bg-dark transition-colors duration-200'>
            <Screen />
        </div>
    );
}
