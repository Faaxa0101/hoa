"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src="/images/logos/hoa-help-logo.png"
					alt="HOA.Help"
					width={1530}
					height={871}
					style={{ height: "auto" }}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
