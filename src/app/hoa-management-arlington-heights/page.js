import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import ArlingtonHeightsContent from "@/components/sections/others/ArlingtonHeightsContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA & Condo Management in Arlington Heights",
	description:
		"HOA and condo association management in Arlington Heights, IL - collections, financials, reserve planning and 24/7 live support. Free 30-min call.",
	alternates: {
		canonical: "/hoa-management-arlington-heights",
	},
	openGraph: {
		title: "HOA & Condo Management in Arlington Heights | HOA.Help",
		description:
			"HOA and condo association management in Arlington Heights, IL - collections, financials, reserve planning and 24/7 live support. Free 30-min call.",
		url: "https://hoa.help/hoa-management-arlington-heights",
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

const arlingtonheightsFaqs = [
	{
		title: "Do you manage condos and HOAs in Arlington Heights?",
		desc: "Yes - from downtown condo and loft buildings near the Metra to established complexes west of the tracks. Every board gets a free financial and issues review first.",
		initActive: true,
	},

	{
		title: "How much does HOA management cost in Arlington Heights?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},

	{
		title: "Our complex is approaching a roof and paving cycle - can you help plan it?",
		desc: "Yes - reserve-first budgets and long-range replacement plans are the core of what we do, so major projects are funded year by year instead of landing as a special assessment.",
		initActive: false,
	},

	{
		title: "Do you work with small downtown associations?",
		desc: "Yes - small commuter buildings near the Metra are a strong fit for our Basic Financials tier, with common-area upkeep and parking handled consistently.",
		initActive: false,
	},

	{
		title: "Can you take over from our current manager?",
		desc: "Yes, in about two weeks - records, bank accounts and vendor logins transfer with no gap in collections or bill pay.",
		initActive: false,
	},

	{
		title: "Which Arlington Heights properties do you serve?",
		desc: "Condo and HOA associations downtown, around Dunton and Dryden, and along the Palatine Road corridor - on-site from our Rosemont office.",
		initActive: false,
	},];

export default function HoaManagementArlingtonHeights() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA & Condo Management in Arlington Heights"}
							text={"Arlington Heights, IL"}
							breadcrums={[
								{ name: "Arlington Heights", path: "/hoa-management-arlington-heights" },
							]}
						/>
						<Services3 />
						<ArlingtonHeightsContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={arlingtonheightsFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
