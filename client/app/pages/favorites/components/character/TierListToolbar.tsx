import Select from '~/components/custom/Select';
import Switch from '~/components/custom/Switch';
import Button from '~/components/custom/Button';

interface TierListToolbarProps {
    sourceOptions: { label: string; value: string }[];
    selectedSource: string;
    onSourceChange: (value: string) => void;
    showName: boolean;
    onShowNameChange: (value: boolean) => void;
    onReset: () => void;
}

/**
 * Toolbar above the tier board.
 * Lets the user filter characters by their anime/game source and toggle
 * whether names are shown under each avatar.
 *
 * NOTE: props for Select/Switch/Button are assumed based on common shadcn-style
 * APIs. Adjust the prop names below to match your actual `custom` component
 * implementations if they differ.
 */
export function TierListToolbar({
    sourceOptions,
    selectedSource,
    onSourceChange,
    showName,
    onShowNameChange,
    onReset,
}: TierListToolbarProps) {
    return (
        <div className='flex flex-wrap items-center gap-3 p-2'>
            <Select
                options={sourceOptions}
                value={selectedSource}
                onChange={onSourceChange}
                placeholder='กรองตามอนิเมะ/เกม'
            />

            <div className='flex items-center gap-2'>
                <Switch checked={showName} onCheckedChange={onShowNameChange} />
                <span className='text-sm text-slate-200'>แสดงชื่อตัวละคร</span>
            </div>

            <Button variant='outline' onClick={onReset}>
                รีเซ็ตตัวกรอง
            </Button>
        </div>
    );
}
