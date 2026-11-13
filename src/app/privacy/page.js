import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import PrivacyPrimary from "@/components/sections/others/PrivacyPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Privacy Policy",
	description:
		"Privacy Policy of MKZ Management LLC, doing business as HOA.Help - text messaging consent, what we collect, how we use and store it, and your rights.",
	alternates: {
		canonical: "/privacy",
	},
};

export default function Privacy() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Privacy Policy"} text={"Privacy Policy"} />
						<PrivacyPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
