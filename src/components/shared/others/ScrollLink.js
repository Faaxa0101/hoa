"use client";

import { gsap } from "@/libs/gsap.config";
import Link from "next/link";

/**
 * Anchor link that scrolls smoothly through GSAP ScrollSmoother,
 * the same way the template's `.tj-scroll-btn` buttons do.
 */
const ScrollLink = ({ href, children, className, onClick }) => {
	const targetId = href?.startsWith("#") ? href.slice(1) : null;

	const handleClick = (e) => {
		if (onClick) onClick(e);
		if (!targetId) return;
		e.preventDefault();
		const target = document.getElementById(targetId);
		if (!target) return;
		gsap.to(window, {
			duration: 0.6,
			ease: "power2.out",
			scrollTo: { y: target, offsetY: 90 },
		});
		// keep the hash in the URL without a native jump
		if (history.replaceState) history.replaceState(null, "", href);
	};

	return (
		<Link href={href} className={className} onClick={handleClick}>
			{children}
		</Link>
	);
};

export default ScrollLink;
