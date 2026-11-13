import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import PalatineContent from "@/components/sections/others/PalatineContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA Management in Palatine",
	description:
		"HOA and condo association management in Palatine, IL - collections, reserve-first budgets, water and winter planning, 24/7 live support. Free 30-min call.",
	alternates: {
		canonical: "/hoa-management-palatine",
	},
	openGraph: {
		title: "HOA Management in Palatine | HOA.Help",
		description:
			"HOA and condo association management in Palatine, IL - collections, reserve-first budgets, water and winter planning, 24/7 live support. Free 30-min call.",
		url: "https://hoa.help/hoa-management-palatine",
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

const palatineFaqs = [
	{
		title: "Do you manage condos and HOAs in Palatine?",
		desc: "Yes - downtown condos near the Metra, 1980s-90s townhome associations and older brick walk-ups across the village. Every board gets a free financial and issues review first.",
		initActive: true,
	},

	{
		title: "How much does HOA management cost in Palatine?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},

	{
		title: "How do you handle water intrusion and flood exposure?",
		desc: "Drainage, grading and sump maintenance run on a scheduled cycle, insurance coverage is verified against the association's exposure, and every repair is documented - so wet seasons are maintenance lines, not emergencies.",
		initActive: false,
	},

	{
		title: "Do you manage snow removal?",
		desc: "Yes - contracts bid in fall, plow routes documented and ice treatment budgeted, with supervision across the association's private drives.",
		initActive: false,
	},

	{
		title: "Can you take over from our current manager?",
		desc: "Yes, in about two weeks - records, bank accounts and vendor logins transfer with no gap in collections or bill pay.",
		initActive: false,
	},

	{
		title: "Which Palatine properties do you serve?",
		desc: "Condo and HOA associations downtown, through the subdivisions and the historic core - on-site from our Rosemont office up the tollway.",
		initActive: false,
	},];

export default function HoaManagementPalatine() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA Management in Palatine"}
							text={"Palatine, IL"}
							breadcrums={[
								{ name: "Palatine", path: "/hoa-management-palatine" },
							]}
						/>
						<Services3 />
						<PalatineContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={palatineFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
