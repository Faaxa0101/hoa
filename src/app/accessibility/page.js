import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import AccessibilityPrimary from "@/components/sections/others/AccessibilityPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Accessibility Statement",
	description:
		"HOA.Help accessibility statement - WCAG 2.1 AA target, keyboard navigation, alt text, known limitations and how to report a barrier.",
	alternates: {
		canonical: "/accessibility",
	},
	openGraph: {
		title: "Accessibility Statement | HOA.Help",
		description:
			"HOA.Help accessibility statement - WCAG 2.1 AA target, keyboard navigation, alt text, known limitations and how to report a barrier.",
		url: "https://www.hoa.help/accessibility",
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

export default function Accessibility() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Accessibility Statement"}
							text={"Accessibility"}
							breadcrums={[{ name: "Accessibility", path: "/accessibility" }]}
						/>
						<AccessibilityPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
