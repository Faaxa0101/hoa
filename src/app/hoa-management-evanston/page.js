import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import EvanstonContent from "@/components/sections/others/EvanstonContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA & Condo Management in Evanston",
	description:
		"HOA and condo management in Evanston, IL - collections, financials, owner portal, reserve-first budgets and 24/7 support from a local Rosemont team.",
	alternates: {
		canonical: "/hoa-management-evanston",
	},
	openGraph: {
		title: "HOA & Condo Management in Evanston | HOA.Help",
		description:
			"HOA and condo association management in Evanston, IL - collections, financials, owner portal and reserve-first budgets from a local Rosemont team.",
		url: "https://hoa.help/hoa-management-evanston",
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

const evanstonFaqs = [
	{
		title: "Do you manage condos and HOAs in Evanston?",
		desc: "Yes - we manage condo associations, HOA and townhome associations across Evanston, from lakefront high-rises to vintage walk-ups and townhome communities. Every board gets a free financial and issues review before any commitment.",
		initActive: true,
	},
	{
		title: "How much does HOA management cost in Evanston?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},
	{
		title: "How close is your team to Evanston?",
		desc: "Our office is in Rosemont, a short drive from Evanston - we do regular walk-throughs, meet contractors on site and hold board meetings in person when the board prefers it.",
		initActive: false,
	},
	{
		title: "Can you take over from our current manager?",
		desc: "Yes. Transition takes about two weeks: records and bank accounts transfer, vendors and utilities are notified, the owner roster is verified and the portal opens - with no gap in collections or bill pay.",
		initActive: false,
	},
	{
		title: "Do you handle snow, roofing and masonry work?",
		desc: "We maintain a local vendor bench for snow removal, roofing, tuckpointing, gutters and landscaping - collecting certificates of insurance, comparing bids and supervising the work for Evanston buildings.",
		initActive: false,
	},
	{
		title: "Which Evanston properties do you serve?",
		desc: "Condo and HOA associations near downtown Evanston, Northwestern, the lakefront, Central Street and west Evanston. Larger associations outside the city limits are reviewed case by case.",
		initActive: false,
	},
];

export default function HoaManagementEvanston() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA & Condo Management in Evanston"}
							text={"Evanston, IL"}
							breadcrums={[
								{ name: "Evanston", path: "/hoa-management-evanston" },
							]}
						/>
						<Services3 />
						<EvanstonContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={evanstonFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
