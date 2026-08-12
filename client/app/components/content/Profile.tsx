// -Path: "TeaChoco-Portfolio/client/src/components/content/Profile.tsx"
import env from '~/secure/env';

export default function Profile({ className = '' }: { className?: string }) {
    return (
        <div className='shrink-0 relative hover:scale-105 transition-transform duration-300'>
            <div className='absolute -inset-1 bg-linear-to-tr from-primary via-secondary to-accent rounded-full blur-md opacity-50' />
            <img
                src={`${env.BASE}TeaChoco-Developer-logo.png`}
                alt='TeaChoco-Developer-logo'
                className={`relative object-cover rounded-full ${className}`}
            />
        </div>
    );
}
