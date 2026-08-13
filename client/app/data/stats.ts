// -Path: "TeaChoco-Portfolio/client/src/components/data/stats.ts"
import { projects } from "./projects";
import { codingSkills } from "./coding";
import type { StatsType } from '~/types/stats';

const getYearsOfExperience = (
    startYear: number,
    startMonth: number = 0,
    startDay: number = 1,
): number => {
    const now = new Date();
    const start = new Date(startYear, startMonth, startDay);

    let years = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();

    // ถ้ายังไม่ถึงเดือนหรือวันเกิด ให้ลด 1 ปี
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) years--;
    return years;
};

export const devStats: StatsType[] = [
    { value: `${getYearsOfExperience(2019)}+`, key: 'about.statYears' },
    { value: `${projects.length}+`, key: 'about.statProjects' },
    { value: `${codingSkills.length}+`, key: 'about.statTech' },
];
