// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/codingViewOptions.ts"
import { FaBars, FaTableCellsLarge, FaTable } from 'react-icons/fa6';

export type CodingViewMode = 'list' | 'cards' | 'grid';

export const codingViewOptions: { id: CodingViewMode; icon: typeof FaBars; labelKey: string }[] = [
    { id: 'list', icon: FaBars, labelKey: 'skills.viewList' },
    { id: 'cards', icon: FaTableCellsLarge, labelKey: 'skills.viewCards' },
    { id: 'grid', icon: FaTable, labelKey: 'skills.viewGrid' },
];