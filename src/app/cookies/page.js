import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import CookiesPrimary from "@/components/sections/others/CookiesPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Cookie Policy",
	description:
		"How hoa.help uses cookies and local storage - functional storage, the Google Maps embed, third-party linking sites, and how to control cookies.",
	alternates: {
		canonical: "/cookies",
	},
	openGraph: {
		title: "Cookie Policy | HOA.Help",
		description:
			"How hoa.help uses cookies and local storage - functional storage, the Google Maps embed, third-party linking sites, and how to control cookies.",
		url: "https://www.hoa.help/cookies",
		images: [
			{
				url: "/images/og/hoa-help-og.png",
				width: 1200,
				height: 630,
				alt: "HOA.Help",
			},
		],
	},
};

export default function Cookies() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Cookie Policy"}
							text={"Cookies"}
							breadcrums={[{ name: "Cookies", path: "/cookies" }]}
						/>
						<CookiesPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
