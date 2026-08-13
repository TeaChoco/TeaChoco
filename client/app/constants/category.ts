// -Path: "TeaChoco-Portfolio/client/src/components/data/category.ts"
import { TbTemplate } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { FaList, FaGlobe, FaRobot, FaServer, FaCode, FaDatabase } from 'react-icons/fa6';
import type { CategoryKeys } from '~/types/category';

export const categoryIcons: Record<CategoryKeys, IconType> = {
    all: FaList,
    web: FaGlobe,
    bot: FaRobot,
    devops: FaCode,
    public: FaGlobe,
    server: FaServer,
    language: FaCode,
    frontend: FaGlobe,
    backend: FaServer,
    database: FaDatabase,
    template: TbTemplate,
};
