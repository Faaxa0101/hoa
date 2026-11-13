import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import SchaumburgContent from "@/components/sections/others/SchaumburgContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA Management in Schaumburg",
	description:
		"HOA and townhome association management in Schaumburg, IL - collections, reserve-first budgets, rules enforcement, landscaping and snow. Free call.",
	alternates: {
		canonical: "/hoa-management-schaumburg",
	},
	openGraph: {
		title: "HOA Management in Schaumburg | HOA.Help",
		description:
			"HOA and townhome association management in Schaumburg, IL - collections, reserve-first budgets, rules enforcement, landscaping and snow. Free call.",
		url: "https://hoa.help/hoa-management-schaumburg",
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

const schaumburgFaqs = [
	{
		title: "Do you manage townhome associations in Schaumburg?",
		desc: "Yes - multi-building townhome and condo associations are our specialty here, including communities built from the 1970s through the 1990s around Woodfield, Weathersfield and the Golf Road corridor.",
		initActive: true,
	},

	{
		title: "How much does association management cost in Schaumburg?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},

	{
		title: "How do you handle rules enforcement?",
		desc: "The same way every time: documented notices, appeal windows and board-approved penalties. The board sets policy; we execute it consistently and keep the record.",
		initActive: false,
	},

	{
		title: "Do you manage large landscaping and snow contracts?",
		desc: "Yes - we collect certificates of insurance, compare bids and supervise landscaping, snow, roofing and asphalt work across multi-building associations.",
		initActive: false,
	},

	{
		title: "Can you take over from our current manager?",
		desc: "Yes, in about two weeks - records, bank accounts and vendor logins transfer with no gap in collections or bill pay.",
		initActive: false,
	},

	{
		title: "Which Schaumburg properties do you serve?",
		desc: "Townhome and condo associations across Schaumburg, with on-site visits from our Rosemont office a straight run up the tollway.",
		initActive: false,
	},];

export default function HoaManagementSchaumburg() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA Management in Schaumburg"}
							text={"Schaumburg, IL"}
							breadcrums={[
								{ name: "Schaumburg", path: "/hoa-management-schaumburg" },
							]}
						/>
						<Services3 />
						<SchaumburgContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={schaumburgFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
