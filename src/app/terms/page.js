import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TermsPrimary from "@/components/sections/others/TermsPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Terms and Conditions",
	description:
		"Terms and Conditions for HOA.Help Account and Building Texts - message program, opt-in, message frequency, help and opting out, carriers and privacy.",
	alternates: {
		canonical: "/terms",
	},
	openGraph: {
		title: "Terms and Conditions | HOA.Help",
		description:
			"Terms and Conditions for HOA.Help Account and Building Texts - message program, opt-in, frequency, opt-out and privacy.",
		url: "https://hoa.help/terms",
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

export default function Terms() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Terms and Conditions"}
							text={"Terms"}
							breadcrums={[{ name: "Terms", path: "/terms" }]}
						/>
						<TermsPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
