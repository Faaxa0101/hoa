"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Footer link groups: plain columns on desktop, native <details>
 * accordions on mobile (no JS library, just a breakpoint listener).
 */
const FooterGroups = ({ groups }) => {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 992px)");
		const apply = () => setIsDesktop(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);

	return groups.map((group) => (
		<details
			key={`${group.title}-${isDesktop}`}
			className="footer-group"
			open={isDesktop}
		>
			<summary className="footer-group-title">{group.title}</summary>
			<ul className="footer-group-list">
				{group.links.map((link) => (
					<li key={link.href + link.label}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</details>
	));
};

export default FooterGroups;
