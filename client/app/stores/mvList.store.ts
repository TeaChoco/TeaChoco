// -Path: "vite-extra-react-ssr-ts/src/stores/mvList.store.ts"
import { create } from 'zustand';

interface MusicType {
    title: string;
    videoId: string;
    authorUrl: string;
    authorName: string;
}

interface MvListState {
    error?: Error | unknown;
    music: MusicType[] | undefined;
    loadedVideoIds: Set<string>;
    addMusic: (music: MusicType) => void;
    setMusic: (music: MusicType[]) => void;
    fetchMusic: (videoId: string) => Promise<MusicType | void>;
    fetchAllMusic: (videoIds: string[]) => Promise<void>;
}

export const useMvListStore = create<MvListState>((set, get) => ({
    music: undefined,
    loadedVideoIds: new Set<string>(),
    setMusic: (music) => set({ music }),
    addMusic: (music) =>
        set((state) => {
            const exists = state.music?.some((m) => m.videoId === music.videoId);
            if (exists) return state;
            return { music: [...(state.music ?? []), music] };
        }),
    fetchMusic: async (videoId: string) => {
        if (!videoId) return;
        const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch metadata for video ${videoId}`);
            const data = await response.json();
            return {
                videoId,
                title: data.title,
                authorUrl: data.author_url,
                authorName: data.author_name,
            };
        } catch (error) {
            set({ error });
        }
    },
    fetchAllMusic: async (videoIds: string[]) => {
        const { addMusic } = get();
        await Promise.all(
            videoIds.map(async (videoId) => {
                if (get().music?.some((m) => m.videoId === videoId)) return;
                const meta = await get().fetchMusic(videoId);
                if (meta) addMusic(meta);
            })
        );
    },
}));
