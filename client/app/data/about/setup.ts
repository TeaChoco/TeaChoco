// -Path: 'TeaChoco-Portfolio/client/app/data/about/setup.ts'
import type { Device } from '~/types/setup';
import type { GearItem } from '~/types/setup';

/** The owner's computers. `value` strings stay language-neutral and are never translated. */
export const DEVICES: Device[] = [
    {
        id: 'hpProBook',
        name: 'HP ProBook 440 G6',
        typeKey: 'about.setup.device.hp.type',
        status: 'current',
        nicknameKey: 'about.setup.device.hp.nickname',
        noteKey: 'about.setup.device.hp.note',
        year: '2026',
        highlight: true,
        specs: [
            { labelKey: 'about.setup.spec.cpu', value: 'Intel Core i7-8565U', icon: '🧠' },
            { labelKey: 'about.setup.spec.gpu', value: 'Intel UHD Graphics 620', icon: '🎮' },
            { labelKey: 'about.setup.spec.ram', value: '24 GB DDR4 2400 MT/s', icon: '💾' },
            {
                labelKey: 'about.setup.spec.storage',
                value: 'SSD NVMe 512 GB + HDD 1 TB',
                icon: '💿',
            },
            { labelKey: 'about.setup.spec.display', value: '14" FHD IPS Matte', icon: '🖥️' },
            { labelKey: 'about.setup.spec.weight', value: '1.6 kg', icon: '⚖️' },
            { labelKey: 'about.setup.spec.os', value: 'Windows 11 Pro / Manjaro KDE', icon: '🐧' },
            { labelKey: 'about.setup.spec.battery', value: '45 Wh (4–6 h)', icon: '🔋' },
        ],
    },
    {
        id: 'dellG3',
        name: 'Dell G3 15 3500',
        typeKey: 'about.setup.device.dell.type',
        status: 'broken',
        nicknameKey: 'about.setup.device.dell.nickname',
        noteKey: 'about.setup.device.dell.note',
        year: '2021',
        specs: [
            { labelKey: 'about.setup.spec.cpu', value: 'Intel Core i5-10300H', icon: '🧠' },
            { labelKey: 'about.setup.spec.gpu', value: 'NVIDIA GTX 1650 4GB', icon: '🎮' },
            {
                labelKey: 'about.setup.spec.gpuIntegrated',
                value: 'Intel UHD Graphics 620',
                icon: '🎮',
            },
            { labelKey: 'about.setup.spec.ram', value: '20 GB DDR4 3200 MT/s', icon: '💾' },
            { labelKey: 'about.setup.spec.storage', value: 'SSD NVMe 256 GB', icon: '💿' },
            { labelKey: 'about.setup.spec.storageMoved', value: 'HDD 1 TB', icon: '📦' },
            { labelKey: 'about.setup.spec.display', value: '15.6" FHD 120Hz', icon: '🖥️' },
            { labelKey: 'about.setup.spec.os', value: 'Windows 11 Pro', icon: '🪟' },
        ],
    },
];

/** Peripherals and accessories the owner uses daily. */
export const GEAR: GearItem[] = [
    {
        id: 'cflgrMonitor',
        name: 'CFLGR 1080p',
        brand: 'CFLGR',
        category: 'monitor',
        noteKey: 'about.setup.gear.cflgr.note',
    },
    {
        id: 'onikumaHoko',
        name: 'Onikuma Hoko',
        brand: 'Onikuma',
        color: 'pink',
        category: 'microphone',
        noteKey: 'about.setup.gear.onikuma.note',
    },
    {
        id: 'okerK428',
        name: 'Oker K428',
        brand: 'Oker',
        model: 'K428',
        color: 'pink',
        category: 'keyboard',
        noteKey: 'about.setup.gear.oker.note',
    },
    {
        id: 'goojodoo',
        name: 'Goojodoo',
        brand: 'Goojodoo',
        color: 'pink',
        category: 'mouse',
        noteKey: 'about.setup.gear.goojodoo.note',
    },
];
