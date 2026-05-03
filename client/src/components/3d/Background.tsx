//-Path: "TeaChoco-Portfolio/client/src/components/3d/Background.tsx"
// import Screen from './Screen';
import { useState, useEffect, Component, type ReactNode } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<{ children?: ReactNode }, ErrorBoundaryState> {
    constructor(props: { children?: ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Three.js Error caught by boundary:', error, errorInfo);

        // Show error on screen for mobile debugging
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            right: 10px;
            background: rgba(255, 0, 0, 0.9);
            color: white;
            padding: 10px;
            border-radius: 5px;
            z-index: 9999;
            font-family: monospace;
            font-size: 12px;
            max-height: 200px;
            overflow: auto;
        `;
        errorDiv.innerHTML = `
            <strong>Three.js Error:</strong><br>
            ${error.message}<br>
            <small>${error.stack}</small>
        `;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) errorDiv.parentNode.removeChild(errorDiv);
        }, 10000);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(255, 0, 0, 0.1)',
                        border: '2px solid red',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}
                >
                    <h3 style={{ color: 'red', margin: '0 0 10px 0' }}>Three.js Error</h3>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                        {this.state.error?.message || 'Unknown error occurred'}
                    </p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#666' }}>
                        Check console for details
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default function Background() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient)
        return (
            <div className='fixed inset-0 w-full h-full -z-10 bg-bg-light dark:bg-bg-dark transition-colors duration-200' />
        );

    return (
        <div className='fixed inset-0 w-full h-full -z-10 bg-bg-light dark:bg-bg-dark transition-colors duration-200'>
            <ErrorBoundary>
                {(() => {
                    throw new Error('Test error');
                    return null;
                })()}
                {/* <Screen /> */}
            </ErrorBoundary>
        </div>
    );
}
