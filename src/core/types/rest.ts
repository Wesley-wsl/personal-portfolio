import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface IProjectsData {
    image: SanityImageSource;
	title: string;
    techStack: string;
	description: string;
	codeLink: string;
	liveLink: string;
}
