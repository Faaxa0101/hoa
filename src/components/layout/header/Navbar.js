"use client";

import getNavItems from "@/libs/getNavItems";
import ScrollLink from "@/components/shared/others/ScrollLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const navItems = getNavItems();
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems?.length
						? navItems.map((item) =>
								item?.submenu?.length ? (
									<li key={item.id} className="has-dropdown">
										<Link href={item.path ? item.path : "#"}>
											{item.name}
										</Link>
										<ul className="sub-menu">
											{item.submenu.map((sub) => (
												<li key={sub.id}>
													<Link href={sub.path}>{sub.name}</Link>
												</li>
											))}
										</ul>
									</li>
								) : item.path?.startsWith("#") ? (
									<li key={item.id}>
										{isHome ? (
											<ScrollLink href={item.path}>{item.name}</ScrollLink>
										) : (
											<Link href={`/${item.path}`}>{item.name}</Link>
										)}
									</li>
								) : (
									<li key={item.id}>
										<Link href={item.path ? item.path : "/"}>
											{item.name}
										</Link>
									</li>
								)
						  )
						: ""}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
