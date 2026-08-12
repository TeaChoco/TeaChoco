// -Path: "vite-extra-react-ssr-ts/src/data/routeMeta.ts"

export interface RouteMeta {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    image: string;
}

export type RouteMetaMap = { default: RouteMeta } & Record<string, Partial<RouteMeta>>;

export const routeMetaMap: RouteMetaMap = {
    default: {
        title: 'TeaChoco Portfolio',
        description: 'TeaChoco Portfolio - Developer Portfolio showcasing projects and skills',
        keywords: ['TeaChoco', 'Portfolio', 'Developer', 'Projects'],
        author: 'TeaChoco',
        image: '/TeaChoco-Developer-logo.ico'
    },
    '/': {
        title: 'TeaChoco Portfolio',
        description: 'TeaChoco Portfolio - Developer Portfolio showcasing projects and skills',
        keywords: ['TeaChoco', 'Portfolio', 'Developer', 'Projects'],
    },
    '/about': {
        title: 'About - TeaChoco Portfolio',
        description: 'Learn more about TeaChoco and their journey as a developer',
        keywords: ['TeaChoco', 'About', 'Developer', 'Journey'],
    },
    '/portfolio': {
        title: 'Portfolio - TeaChoco Portfolio',
        description: "Explore TeaChoco's projects and case studies",
    },
    '/contact': {
        title: 'Contact - TeaChoco Portfolio',
        description: 'Get in touch with TeaChoco for collaborations and inquiries',
    },
};

/** Find meta for a route, fallback to '/' */
export const getRouteMeta = (pathname: string): RouteMeta =>
    ({ ...routeMetaMap.default, ...routeMetaMap[pathname] }) as RouteMeta;
