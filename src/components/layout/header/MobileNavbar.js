"use client";

import getNavItems from "@/libs/getNavItems";
import ScrollLink from "@/components/shared/others/ScrollLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const pathname = usePathname();
	const isHome = pathname === "/";
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<nav className="mean-nav">
						<ul>
							{navItems?.length
								? navItems.map((item, idx) => {
										const isLast = idx === navItems.length - 1;
										if (item?.submenu?.length) {
											return (
												<MobileMenuItem
													key={item.id}
													text={item.name}
													url={item.path ? item.path : "#"}
												>
													{item.submenu.map((sub) => (
														<li key={sub.id}>
															<Link href={sub.path}>{sub.name}</Link>
														</li>
													))}
												</MobileMenuItem>
											);
										}
										if (item.path?.startsWith("#")) {
											return (
												<li
													key={item.id}
													className={isLast ? "mean-last" : ""}
												>
													<ScrollLink
														href={item.path ? item.path : "#"}
													>
														{item.name}
													</ScrollLink>
												</li>
											);
										}
										return (
											<li
												key={item.id}
												className={isLast ? "mean-last" : ""}
											>
												<Link href={item.path ? item.path : "/"}>
													{item.name}
												</Link>
											</li>
										);
								  })
								: ""}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
