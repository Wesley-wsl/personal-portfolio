import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface IProjectsData {
	src?: string;
    image: SanityImageSource;
	title: string;
	description: string;
	codeLink: string;
	liveLink: string;
}
