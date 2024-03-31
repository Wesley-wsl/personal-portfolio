import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BottomLineVariant, fadeIn, navbar, topLineVariant } from './animations';

export const HeaderMobile = () => {
	const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

	return (
		<div className="md:hidden">
			<motion.button
				className={`z-20 flex h-[45px] w-[45px] cursor-pointer flex-col items-center justify-center gap-[6px] ${isMobileHeaderOpen && 'fixed right-5 top-12'}`}
				onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
				aria-label="mobile header"
			>
				<motion.div
					className="h-[3px] w-[35px] rounded bg-[--secondary]"
					variants={topLineVariant}
					animate={isMobileHeaderOpen ? 'open' : 'closed'}
				/>
				<motion.div
					className="h-[3px] w-[35px] rounded bg-[--secondary]"
					animate={isMobileHeaderOpen ? { opacity: 0 } : { opacity: 1 }}
				/>
				<motion.div
					className="h-[3px] w-[35px] rounded bg-[--secondary]"
					variants={BottomLineVariant}
					animate={isMobileHeaderOpen ? 'open' : 'closed'}
				/>
			</motion.button>
			<AnimatePresence>
				{isMobileHeaderOpen && (
					<motion.div
						className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[--card-background]"
						initial="invisible"
						animate="visible"
						exit="exit"
						variants={navbar}
					>
						<motion.nav
							className="block md:hidden"
							initial="invisible"
							animate="visible"
							exit="exit"
							variants={fadeIn}
						>
							<ul className="mt-[250px] flex flex-col items-center justify-center gap-[30px] text-[22px] text-[--secondary]">
								<li className="transition-all hover:text-[--primary]">
									<a href="/">Home</a>
								</li>
								<li className="transition-all hover:text-[--primary]">
									<a href="/about">About</a>
								</li>
								<li className="transition-all hover:text-[--primary]">
									<a href="/tech-stack">Tech Stack</a>
								</li>
								<li className="transition-all hover:text-[--primary]">
									<a href="/projects">Projects</a>
								</li>
							</ul>
						</motion.nav>

						<motion.div
							className="mt-[30px] flex items-center justify-center gap-[20px] md:hidden"
							initial="invisible"
							animate="visible"
							exit="exit"
							variants={fadeIn}
						>
							<a
								href="https://github.com/Wesley-wsl"
								target="_blank"
								className="transition-all hover:-translate-y-1"
							>
								<img src="/assets/icons/github-icon.svg" alt="Github icon" />
							</a>
							<a
								href="https://www.linkedin.com/in/wesley-westellley"
								target="_blank"
								className="transition-all hover:-translate-y-1"
							>
								<img src="/assets/icons/linkedin-icon.svg" alt="Github icon" />
							</a>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
