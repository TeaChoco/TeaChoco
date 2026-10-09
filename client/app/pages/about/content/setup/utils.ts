// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/utils.ts'
import { PRIMARY_SPEC_KEYS } from '~/data/about/setup-meta';
import type { DeviceSpec } from '~/types/setup';

/** Specs split into the highlighted tiles and the remaining detail rows. */
interface SplitSpecs {
    primary: DeviceSpec[];
    secondary: DeviceSpec[];
}

/**
 * Splits specs into primary (CPU/GPU/RAM/Storage) and secondary groups.
 * Primary specs keep the order defined by PRIMARY_SPEC_KEYS.
 *
 * @param specs - All specs of a device.
 * @returns The primary and secondary spec groups.
 */
export function splitSpecs(specs: DeviceSpec[]): SplitSpecs {
    const primary = PRIMARY_SPEC_KEYS.map((key) => specs.find((s) => s.labelKey === key)).filter(
        (s): s is DeviceSpec => Boolean(s),
    );
    const secondary = specs.filter((s) => !primary.includes(s));

    return { primary, secondary };
}

/**
 * Joins truthy class names into a single string.
 *
 * @param parts - Class names or falsy values to skip.
 * @returns The joined class string.
 */
export function cx(...parts: Array<string | false | null | undefined>): string {
    return parts.filter(Boolean).join(' ');
}
