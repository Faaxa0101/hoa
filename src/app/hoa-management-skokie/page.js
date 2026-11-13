import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import SkokieContent from "@/components/sections/others/SkokieContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA & Condo Management in Skokie",
	description:
		"HOA and condo association management in Skokie, IL - collections, financials, owner portal, reserve-first budgets and 24/7 live support. Free 30-min call.",
	alternates: {
		canonical: "/hoa-management-skokie",
	},
	openGraph: {
		title: "HOA & Condo Management in Skokie | HOA.Help",
		description:
			"HOA and condo association management in Skokie, IL - collections, financials, owner portal, reserve-first budgets and 24/7 live support. Free 30-min call.",
		url: "https://hoa.help/hoa-management-skokie",
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

const skokieFaqs = [
	{
		title: "Do you manage condos and HOAs in Skokie?",
		desc: "Yes - we manage condo associations, HOA and townhome associations across Skokie, including 1960s-80s brick buildings and mid-rise condos. Every board gets a free financial and issues review first.",
		initActive: true,
	},

	{
		title: "How much does HOA management cost in Skokie?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},

	{
		title: "Do you handle older buildings with original plumbing and windows?",
		desc: "Yes - that's most of Skokie's stock. We build reserve plans around the real remaining life of boilers, windows and plumbing, so replacements are funded before they fail.",
		initActive: false,
	},

	{
		title: "Can you help with village code compliance?",
		desc: "We keep a compliance calendar per building: seasonal inspections, documented walk-throughs and vendor work orders that resolve items before the village sends anything.",
		initActive: false,
	},

	{
		title: "Can you take over from our current manager?",
		desc: "Yes. Transition takes about two weeks - records, bank accounts and vendor logins transfer with no gap in collections or bill pay.",
		initActive: false,
	},

	{
		title: "Which Skokie properties do you serve?",
		desc: "Condo and HOA associations along Skokie Boulevard, Dempster, Oakton and the village's townhome communities - with on-site visits from our Rosemont office.",
		initActive: false,
	},];

export default function HoaManagementSkokie() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA & Condo Management in Skokie"}
							text={"Skokie, IL"}
							breadcrums={[
								{ name: "Skokie", path: "/hoa-management-skokie" },
							]}
						/>
						<Services3 />
						<SkokieContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={skokieFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
