import { useThemeStore } from '$/stores/themeStore';

export default function useTextColor() {
    const { theme } = useThemeStore();
    return theme === 'light' ? { hex: '#000000' } : { hex: '#ffffff' };
}
