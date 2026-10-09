// -Path: 'TeaChoco-Portfolio/client/app/types/setup.ts'

/** Lifecycle state of a device. */
export type DeviceStatus = 'current' | 'retired' | 'broken';

/** A single technical specification line of a device. */
export interface DeviceSpec {
    /** i18n key of the spec label, e.g. `about.setup.spec.cpu`. */
    labelKey: string;
    /** Real, language-neutral value; never translated. */
    value: string;
    /** Optional emoji shown before the label. */
    icon?: string;
}

/** A computer owned by the site owner. */
export interface Device {
    /** Unique id used for list keys. */
    id: string;
    /** Model name; never translated. */
    name: string;
    /** i18n key of the device type. */
    typeKey: string;
    /** Current lifecycle state. */
    status: DeviceStatus;
    /** i18n key of a human nickname. */
    nicknameKey?: string;
    /** i18n key of a short note. */
    noteKey?: string;
    /** Year the device joined, as a string. */
    year?: string;
    /** Marks the main machine worth emphasizing. */
    highlight?: boolean;
    /** Technical specifications shown on the card. */
    specs: DeviceSpec[];
}

/** A peripheral or accessory. */
export interface GearItem {
    /** Unique id used for list keys. */
    id: string;
    /** Product name; never translated. */
    name: string;
    /** Brand name; never translated. */
    brand: string;
    /** Optional model number; never translated. */
    model?: string;
    /** Color name, e.g. `pink`. */
    color?: string;
    /** Category used to pick icon and label. */
    category: 'microphone' | 'keyboard' | 'mouse' | 'headset' | 'monitor' | 'other';
    /** i18n key of a short note. */
    noteKey?: string;
}
