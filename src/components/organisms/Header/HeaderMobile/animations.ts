import type { Variants } from 'framer-motion';

export const fadeIn = {
	visible: {
		opacity: 1,
		transition: {
            delay: 0.35,
			duration: 0.35
		}
	},
	invisible: {
		opacity: 0,
		transition: {
			duration: 0.4
		}
	},
    exit: {
        opacity: 0,
    }
} as Variants;

export const navbar = {
	visible: {
		height: "100%",
		transition: {
			duration: 0.35
		}
	},
	invisible: {
		height: 0,
		transition: {
			duration: 0.35
		}
	},
    exit: {
		height: 0,
		transition: {
            delay: 0.35,
			duration: 0.35
		}
	}
} as Variants;

export const topLineVariant = {
	open: { rotate: -45, y: 9 },
	closed: { rotate: 0 }
} as Variants;

export const BottomLineVariant = {
	open: { rotate: 45, y: -9 },
	closed: { rotate: 0 }
} as Variants;
