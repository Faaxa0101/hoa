import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import Contact3 from "@/components/sections/contacts/Contact3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Contact",
	description:
		"Contact HOA.Help - call or text (847) 773-0026, email hello@hoa.help, or visit our Rosemont office at 10700 W Higgins Rd, Suite 270. Free 30-min call.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact HOA.Help | HOA.Help",
		description:
			"Contact HOA.Help - call or text (847) 773-0026, email hello@hoa.help, or visit our Rosemont office at 10700 W Higgins Rd, Suite 270. Free 30-min call.",
		url: "https://www.hoa.help/contact",
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

export default function Contact() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Contact HOA.Help"}
							text={"Contact"}
							breadcrums={[
								{ name: "Contact HOA.Help", path: "/contact" },
							]}
						/>
						<Contact3 />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
