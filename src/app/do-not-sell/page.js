import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import DoNotSellPrimary from "@/components/sections/others/DoNotSellPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Do Not Sell or Share My Personal Information",
	description:
		"HOA.Help does not sell personal information and does not share it for cross-context behavioral advertising - CCPA/CPRA statement and how to exercise your rights.",
	alternates: {
		canonical: "/do-not-sell",
	},
	openGraph: {
		title: "Do Not Sell or Share My Personal Information | HOA.Help",
		description:
			"HOA.Help does not sell personal information and does not share it for cross-context behavioral advertising - CCPA/CPRA statement and how to exercise your rights.",
		url: "https://www.hoa.help/do-not-sell",
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

export default function DoNotSell() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Do Not Sell or Share My Personal Information"}
							text={"Do Not Sell"}
							breadcrums={[{ name: "Do Not Sell", path: "/do-not-sell" }]}
						/>
						<DoNotSellPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
