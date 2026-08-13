// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/viewOptions.ts"
import { FaChartPie, FaLayerGroup, FaTableCellsLarge, FaTableList } from 'react-icons/fa6';

export type ViewMode = 'radar' | 'cards' | 'tabs' | 'grid';

export const viewOptions: { id: ViewMode; icon: typeof FaChartPie; labelKey: string }[] = [
    { id: 'radar', icon: FaChartPie, labelKey: 'languages.viewRadar' },
    { id: 'cards', icon: FaLayerGroup, labelKey: 'languages.viewCards' },
    { id: 'tabs', icon: FaTableCellsLarge, labelKey: 'languages.viewTabs' },
    { id: 'grid', icon: FaTableList, labelKey: 'languages.viewGrid' },
];